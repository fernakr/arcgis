import React, { useRef, useEffect } from "react";

import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
// import Point from '@arcgis/core/geometry/Point';
// import Extent from '@arcgis/core/geometry/Extent';
// import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
// import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
// import mapImage from './map.jpg';
// import * as geodesicUtils from "@arcgis/core/geometry/support/geodesicUtils.js";
// import Point from '@arcgis/core/geometry/Point';
// import PopupTemplate from '@arcgis/core/PopupTemplate';
// import RouteParameters from "@arcgis/core/rest/support/RouteParameters.js";
// import FeatureSet from "@arcgis/core/rest/support/FeatureSet.js";
// import * as route from "@arcgis/core/rest/route.js";
import esriConfig from '@arcgis/core/config.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import Legend from '@arcgis/core/widgets/Legend';
import Fullscreen from '@arcgis/core/widgets/Fullscreen';
//import Compass from '@arcgis/core/widgets/Compass';
// import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
// import Color from '@arcgis/core/Color';

import * as reactiveUtils from '@arcgis/core/core/ReactiveUtils';

import "./App.css";



function App() {

  const mapDiv = useRef(null);
  const urlParams = new URLSearchParams(window.location.search);
  const selectedObjectId = urlParams.get('objectId');

  const fields = ['name', 'birthdate', 'headshot', 'status', 'OBJECTID', 'Eligibility', 'cemeterySection'];
  const listExpressionAppend = 'status = \'occupied\'';


  const cemeteryLocation = [-97.726293, 30.266041];
  
  const [hash, setHash] = React.useState(window.location.hash);
  const [locating, setLocating] = React.useState(false);
  const [helpActive, setHelpActive] = React.useState(false);
  const [helpInfo, setHelpInfo] = React.useState(0);
  const [currPage, setCurrPage] = React.useState(0);
  const [filtersExpanded, setFiltersExpanded] = React.useState(false);
  
  const [gravesLayer, setGravesLayer] = React.useState(null);
  const [gravesView, setGravesView] = React.useState(null);

  const [filtersActive, setFiltersActive] = React.useState(false);
  const [filterSections, setFilterSections] = React.useState([]);
  const [filterEligibility, setFilterEligibility] = React.useState([]);
  const [filterValue, setFilterValue] = React.useState(false);

  const [searchName, setSearchName] = React.useState('');
  const [searchSearchKeywords, setSearchKeywords] = React.useState('');

  const [currTab, setCurrTab] = React.useState('map');

  const [items, setItems] = React.useState([]);
  const [pagination, setPagination] = React.useState({});
  const [resetActive, setResetActive] = React.useState(false);
  
  const [sort, setSort] = React.useState('name');
  const [sortDirection, setSortDirection] = React.useState('asc');

  const [selectedFeature, setSelectedFeature] = React.useState(null);

  // these will be pulled from Craft     
  let eligibilityOptions = [
    {
      id: 10,
      title: 'Governor'
    },
    {
      id: 14,
      title: 'Senator'
    },
    {
      id: 30,
      title: 'Representative'
    },
    {
      id: 40,
      title: 'President'
    }
  ]

  const cemeterySections = [
    {
      id: 1,
      title: 'Statesman Meadow'
    },
    {
      id: 2,
      title: 'Capital Point'
    },
    {
      id: 3,
      title: 'Monument Hill'
    },
    {
      id: 4,
      title: 'Confederate Field'
    }
  ];

  const findMe = () => {
  

    setLocating(true);
    updateResetActive();
    navigator.geolocation.getCurrentPosition((position) => {
      // Add a marker for the browser's GPS location
      mapDiv.userPositionLayer.removeAll();
      const userPosition = [position.coords.longitude, position.coords.latitude];

      
      const target = selectedFeature ? [selectedFeature.geometry.centroid.longitude, selectedFeature.geometry.centroid.latitude]: cemeteryLocation;

      const points = [userPosition, target]; // latter to subbed in with currently selected feature if applicable

      const graphics = points.map((point, index) => {
        return new Graphic({
          geometry: { type: "point", x: point[0], y: point[1] },
          symbol:  index === 0 ? {
            type: 'text',  // autocasts as new TextSymbol()
            color: 'green',
            text: '\ue61d',  // esri-icon-map-pin
            font: {  // autocast as new Font()
              family: 'CalciteWebCoreIcons',
              size: 12
            }         
          } : {
            type: 'simple-marker',  // autocasts as new TextSymbol()
            color: 'transparent',
            outline: {              
              width: 0
            },
            size: '1px'
          }
        });
      });

      mapDiv.view.graphics.addMany(graphics);
      mapDiv.view.when(() => {
        setLocating(false);
        mapDiv.view.goTo({
          target: graphics
        });
      });



    });


  }

  const reset = () => {    
    mapDiv.view.goTo({
      target: cemeteryLocation,
      zoom: getBaseZoom()
    }).then(() => {
      updateResetActive();
    });
  }
  
  let helpButtons = [
    {
      text: 'Help',
      id: 'help',
      action: e => setHelpActive(1)          
    },
    {
      text: 'Find Me',
      id: 'find-me',
      action: findMe          
    },
    {
      text: 'Reset',
      id: 'reset',
      action: reset          
    }
  ]

  const tabMenu = [
    {
      title: 'Map View',
      id: 'map'
    },
    {
      title: 'Listing Search',
      id: 'list'
    }
  ]

  const helpStates = [
    {
      highlightElemSelector: '.esri-legend',
      description: 'This is the legend'
    },
    {
      highlightElemSelector: '#find-me',
      description: 'Click this button to find your location'
    },
    {
      highlightElemSelector: '#reset',
      description: 'Click this button to reset the map'
    }
  ]


  useEffect(() => {
    // Create a map and view
    esriConfig.apiKey = "AAPK1603870d3538472fb7f6c4d1accdec01rx8QfJvj3jb-IW_qiJR_dYdKvNMFUSvt1HQOWd7OjMFMiuUtCVBmUwyLHuDAxRkx";

    const map = new WebMap({
      portalItem: {
        id: 'b8fbdd2f710e4414844565206609892e'
      },
      basemap: 'arcgis-navigation',

    });




    const isMobile = checkMobile();
    // base rotation of mobile or desktop
    const baseRotation = isMobile ? -90 : 180;
    const baseZoom = getBaseZoom();
    const view = new MapView({
      container: mapDiv.current,
      map: map,
      center: cemeteryLocation,
      rotation: 68 + baseRotation, // Rotate the view to 0 degrees
      // constraints: {
      //   // minZoom: 16,
      //   // maxZoom: 22, // Set the max zoom level to 19
      // },
      zoom: baseZoom, // Set your desired zoom level
    });

    const userPositionLayer = new GraphicsLayer();
    map.add(userPositionLayer);

    mapDiv.view = view;
    mapDiv.map = map;
    mapDiv.userPositionLayer = userPositionLayer;


    view.when(() => {

      reactiveUtils.watch(
        () => view.popup.selectedFeature,
        (graphic) => {
          setSelectedFeature(graphic);
        }
      );
      
      
      var layers = map.layers.toArray();

      // Filter feature layers
      var featureLayers = layers.filter(function (layer) {
        return layer instanceof FeatureLayer;
      });

      let legendValues = [];
      featureLayers.forEach(function (featureLayer) {

        if (featureLayer.title.includes('Graves')) {
          setGravesLayer(featureLayer);
          featureLayer.outFields = ['*'];
          //graveLayer.visible = false;

          // set the renderer update fill color based off status
          // Create a unique value renderer
          var renderer = new UniqueValueRenderer({
            field: "status",
            //defaultSymbol: fillSymbol,
            uniqueValueInfos: [{
              value: "occupied",
              symbol: new SimpleFillSymbol({
                color: "green"
              }),
              label: "Occupied"
            },
            {
              value: "vacant",
              symbol: new SimpleFillSymbol({
                color: "yellow"
              }),
              label: "Vacant"
            },
              // Add more unique values as needed
            ]
          });

          legendValues.push(legendValues.concat([{
            layer: featureLayer,
            title: "Legend"
          }]));

          // Set the renderer to the feature layer
          featureLayer.renderer = renderer;

          // Create a new layer view for the feature layer
        

          view.whenLayerView(featureLayer).then(async (layerView) => {

            // after all features are loaaded           
            await reactiveUtils.whenOnce(() => !layerView.updating);
            updateResetActive();
            updateResults(layerView, false);
            if (selectedObjectId) {
              selectObject(selectedObjectId, layerView);
            }
            setGravesView(layerView);
            //updateGraveLayerVisibility(layerView);
          });

          // add images to the feature layer
          featureLayer.popupTemplate = {
            title: '{name}',
            content: [{
              type: "fields", // Autocast as new FieldsContent()
              // Autocast as new FieldInfo[]
              fieldInfos: [{
                fieldName: "birthdate",
                label: "Birth Date",
                // Autocast as new FieldInfoFormat()
                // format: {
                //   places: 0,
                //   digitSeparator: true
                // }
              }]
            }, {

              // Autocasts as new MediaContent()
              type: "media",
              mediaInfos: [{
                title: "<b>Headshot</b>",
                type: "image", // Autocasts as new ImageMediaInfo()
                caption: "Headshot description here",
                // Autocasts as new ImageMediaInfoValue()
                value: {
                  sourceURL: "{headshot}"
                }
              }]
            }]
          }




        } else {
          // disable pop up from other layers
          featureLayer.popupEnabled = false;

          // legendValues.push(legendValues.concat([{
          //   layer: featureLayer,
          //   title: "Legend"
          // }]));
        }


      });



      const fullscreen = new Fullscreen({
        label: 'Expand',
        view: view
      });

      


      for (let i = 0; i < helpButtons.length; i++) {
        const helpButton = document.createElement("button");
        helpButton.innerHTML = helpButtons[i].text;
        helpButton.id = helpButtons[i].id;
        helpButton.classList.add("esri-widget", "esri-widget--button", "esri-interactive", "esri-reset-button");
        helpButton.addEventListener("click", helpButtons[i].action);
        view.ui.add(helpButton, "top-left");
        helpButtons[i].element = helpButton;            
      }
      

  

      document.addEventListener("fullscreenchange", function() {
        helpButtons[0].element.style.display = document.fullscreenElement ? 'none' : 'block';
        
      });

      

      var legend = new Legend({
        view: view,
        layerInfos: legendValues[0]
      });

      view.ui.add(fullscreen, "top-right");
      view.ui.add(legend, "bottom-left");

    });

    
    view.on('drag', (event) => {
      updateResetActive();
    });

    view.watch('zoom', (event) => {
      updateResetActive();
      updateGraveLayerVisibility(event);
    });

    view.on('pointer-leave', (event) => {
      document.body.style.cursor = "auto";
    });




  }, [mapDiv]);

  useEffect(() => {
    let highlightElemSelector, description;
    if (helpActive > 0) {
      const helpState = helpStates[helpActive - 1];

      if (helpState) {
        highlightElemSelector = helpState.highlightElemSelector;
        description = helpState.description;
        // get position of help from esri-legend class
        const highlightElem = document.querySelector(highlightElemSelector);
        const highlightElemPosition = highlightElem.getBoundingClientRect();;

        setHelpInfo({
          top: highlightElemPosition.top,
          left: highlightElemPosition.left,
          description
        })
      }
    }
  }, [helpActive]);

  useEffect(() => {
    const resetButton = helpButtons.find(button => button.id === 'reset');    
  }, [resetActive]);
  useEffect(() => {
    const sectionPrefix = '#section-';
    if (hash.includes(sectionPrefix)){
      
      const sectionId = hash.replace(sectionPrefix, '');
      setFilterSections([sectionId]);
    }
  }, [hash]);

  useEffect(() => {
    let filters = [];
    if (filterEligibility.length > 0) {
      filterEligibility.forEach(filter => {
        const option = eligibilityOptions.find(option => option.id.toString() === filter);
        
        filters.push({
          field: 'Eligibility',
          ...option
        });
      });      
    }
    if (filterSections.length > 0) {
      filterSections.forEach(filter => {
        const option = cemeterySections.find(option => option.id.toString() === filter);
        filters.push({
          field: 'cemeterySection',
          ...option
        });
      });
    }

    setFiltersActive(filters);
  }, [filterEligibility, filterSections, filterValue, gravesView, searchName, searchSearchKeywords]);


  useEffect(() => {
    if (gravesView) {
      updateResults();
      updateGraveLayerVisibility();
    }

  }, [filtersActive, gravesView, currPage]);

  const updateGraveLayerVisibility = (zoom = mapDiv.view.zoom) => {
    if (!gravesLayer) return;
    gravesLayer.visible = true; // zoom > 17;
  }

  const updateResetActive = () => {    
    // if the map is not at the default location and zoom is not default zoom

    const formatCoordinates = (coordinate) => {
      return coordinate.toFixed(2);
    }

    const currCenter =[
      formatCoordinates(mapDiv.view.center.longitude),
      formatCoordinates(mapDiv.view.center.latitude)
    ];


    const isCentered = currCenter[0] === formatCoordinates(cemeteryLocation[0]) && currCenter[1] === formatCoordinates(cemeteryLocation[1]);
    
    const isZoomed = mapDiv.view.zoom === getBaseZoom();
    setResetActive(!isCentered || !isZoomed);

  }

  const updateResults = (layerView = gravesView) => {


    let filterExpression = '';
    if (searchSearchKeywords) {
      filterExpression = "(" + fields.map(field => `lower(${field}) LIKE '%${searchSearchKeywords.toLowerCase()}%'`).join(" OR ") + ")";
    }
    if (searchName) {
      if (filterExpression) filterExpression += " AND ";
      filterExpression = searchName ? "(lower(name) LIKE '%" + searchName.toLowerCase() + "%')" : null;
    }


    if (filterEligibility.length > 0) {
      if (filterExpression) filterExpression += " AND ";
      let eligibilityExpression = "(" + filterEligibility.map(eligibility => `Eligibility like '%|${eligibility}|%'`).join(" OR ") + ")";
      filterExpression += eligibilityExpression;
    }

    if (filterSections.length > 0) {
      if (filterExpression) filterExpression += " AND ";
      let sectionExpression = "(" + filterSections.map(section => `cemeterySection = ${section}`).join(" OR ") + ")";
      filterExpression += sectionExpression;      
    }

    
      
    //console.log(filterExpression ? (filterExpression + " AND ") : '');
      // change the renderer of features that are not in the filter
      layerView.featureEffect = {
        filter: {
          where: filterExpression ? filterExpression  : ''
        },
        includedEffect: "",
        excludedEffect: "grayscale(100%) opacity(10%)"
      };
    


    // paginate the results. 1000 is the max number of features that can be returned

    const numPerPage = 2;

    layerView.queryFeatures({
      where: (filterExpression ? filterExpression + " AND " : '') + listExpressionAppend,
      start: currPage * numPerPage,
      num: numPerPage,
      outFields: fields,
    }).then(async (response) => {


      //console.log(response.features.map(feature => feature.attributes));
      setItems(response.features.map(feature => feature.attributes));
      // need to filter by status
      const featureCount = await layerView.queryFeatureCount();
      setPagination({
        total: featureCount,
        totalPages: Math.ceil(featureCount / numPerPage)
      });

    });

  }

  const getBaseZoom = () => {
    const isMobile = checkMobile();
    return isMobile ? 16 : 17;
  }



  const checkMobile = () => {
    return window.innerWidth < 768;
  }



  const selectObject = (objectId, layerView = gravesView) => {
    if (currTab !== 'map') setCurrTab('map');


    layerView.queryFeatures({
      where: "OBJECTID = " + objectId
    }).then(function (results) {

      if (results.features.length > 0) {
        var feature = results.features[0];

        // Zoom to the feature

        mapDiv.view.goTo({
          target: feature,
          zoom: 20
        });

        // after zooming to the feature, open the popup



        mapDiv.view.popup.dockEnabled = false;
        mapDiv.view.popup.open({
          features: [feature]
        });



      }
    })
  };

  const updateFilterEligibility = (e) => {
    // grab all checked checkboxes with this name
    const checkboxes = document.querySelectorAll('input[name="eligibility"]');
    const checkedValues = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    setFilterEligibility(checkedValues);
  }

  const updateFilterSections = (e) => {
    // grab all checked checkboxes with this name
    const checkboxes = document.querySelectorAll('input[name="section"]');
    const checkedValues = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    setFilterSections(checkedValues);
  }

  const outputEligibility = (eligibilityString) => {
    const eligibilityOption = eligibilityString.split('|').filter(eligibility => eligibility != '').map(eligibility => eligibilityOptions.find(option => option.id.toString() === eligibility).title);
    return eligibilityOption.join(', ');
  }

  const outputCemeterySection = (sectionId) => {
    return (<button className="cursor-pointer text-decoration-underline color-primary text-decoration-none-hover" onClick={e => setFilterSections([sectionId])}>{ cemeterySections.find(section => section.id.toString() === sectionId).title }</button>);
  }

  const removeFilter = (filter) => {
    if (filter.field === 'Eligibility') {
      const newFilters = filterEligibility.filter(eligibility => eligibility !== filter.id.toString());
      setFilterEligibility(newFilters);
    } else if (filter.field === 'cemeterySection') {
      const newFilters = filterSections.filter(section => section !== filter.id.toString());
      setFilterSections(newFilters);
    }
 
  }

  let filtersColumnClass = 'pr-5 position-absolute p-4 right-0 bg-solid-secondary-lightest w-100 z-1 maxw-mobile ';
  if (currTab === 'map') {
    filtersColumnClass +=  (filtersExpanded ? 'd-block' : 'd-none') ;
  }else{
    filtersColumnClass += 'cell px-4 medium-4 d-medium-block ' + (filtersExpanded ? 'd-block' : 'd-none');
  }
  
  const renderFiltersButton = () => {
    return (<button onClick={ e => setFiltersExpanded(!filtersExpanded)} className="bg-solid-gray cursor-pointer color-white p-1">Filters { filtersActive.length ? '(' + filtersActive.length + ')' : '' }</button>);
  }

  // only run once on load
  useEffect(() => {    
    // hash change  
    window.addEventListener('hashchange', () => {  
      if (window.location.hash !== hash) setHash(window.location.hash);
    });

    // when window size is resized update the view
    window.addEventListener('resize', () => {
      if (mapDiv.view) {
        // rotate map 
        const isMobile = checkMobile();
        const baseRotation = isMobile ? -90 : 180;
        const baseZoom = getBaseZoom();
        mapDiv.view.rotation = 68 + baseRotation;
        mapDiv.view.zoom = baseZoom;

      }
    });
  }, []);

  return (<div className="wrapper">


    {/* <button onClick={ e => setFilterValue(!filterValue) }>Filter</button>  */}

    <div className="grid-container w-100">
      <div className="d-flex justify-content-start">
        {tabMenu.map((tab, index) => (<button key={ index } className={`cursor-pointer p-2 ${tab.id === currTab ? 'bg-solid-primary color-white' : ''}`} onClick={e => setCurrTab(tab.id)}>{tab.title}</button>))}

      </div>

    </div>
    <div className={`${currTab !== 'map' ? ' w-100' : ''}`}>
      <div className="grid-x">

        <div className={`cell px-4 ${currTab === 'map' ? 'medium-4 small-12 medium-order-2' : 'pt-4 medium-8'}`}>
          <div className="mb-4 d-flex align-items-center gx-3 ">
            {currTab === 'list' ?
              <div className="w-100" >
                <label htmlFor="searchSearchKeywords">Search by keyword</label>
                <input type="text" id="searchSearchKeywords" onChange={e => { setSearchKeywords(e.target.value); setSearchName('') }} />
              </div>
              : <>
                <div id="search-by-name" className="flex-fill position-relative">
                  <label htmlFor="plotholderName">Search by name</label>
                  <input type="text" id="plotholderName" value={ searchName } className="mb-0" onChange={e => { setSearchName(e.target.value); setSearchKeywords(null) }} />
                  { searchName && currTab === 'map' && 
                    <div className="d-medium-none position-absolute top-100 left-0 z-1 p-3 bg-solid-white shadow">
                      { items.map((item, index) => (<>
                          <button className="text-left lh-2" onClick={e => { selectObject(item.OBJECTID); setSearchName(''); }} key={index}>
                            <span className='d-block fw-bold mb-half text-small'>{item.name}</span>
                            {item.Eligibility && <span className="mb-0 text-smaller">Eligibility: {outputEligibility(item.Eligibility)}</span>}                        
                          </button>
                          { index !== items.length - 1 && <hr className="mt-2 mb-1" />}
                        </>
                      )) }
                    </div>
                    }
                </div>
                { renderFiltersButton() }
              </>}
              
              
          </div>

          <div className={`${currTab === 'map' ? 'd-none d-medium-block' : ''}`}>
            { currTab !== 'map' && <div className="mb-3">{ renderFiltersButton() }</div> }
            {items.map((item, index) => (<div key={index} className="mb-4">

              <h4>{item.name}</h4>
              {item.Eligibility && <p className="mb-0">Eligibility: {outputEligibility(item.Eligibility)}</p>}
              {item.cemeterySection && <p>Section: {outputCemeterySection(item.cemeterySection)}</p>}
              <button className="button" onClick={e => selectObject(item.OBJECTID)}>View on Map</button>
              <hr />
            </div>))}
            <div className="pagination">
              {currPage > 0 && <button onClick={e => { setCurrPage(currPage - 1); }}>Previous</button>}
              {currPage < pagination.totalPages && <button onClick={e => { setCurrPage(currPage + 1); }}>Next</button>}
            </div>
          </div>
          
        
        </div>
        <div className={"cell medium-auto " + (currTab !== 'map' ? 'd-none' : 'medium-order-1')} >
          <div className="position-relative">
            {/* <div id="help-buttons" className="position-absolute z-1 mt-8 pt-8 d-flex flex-column gy-3">
              <button className="cursor-pointer icon--circle text-smaller" onClick={e => setHelpActive(1)}>Help</button>
              <button disabled={ locating } className="cursor-pointer icon--circle text-smaller" id="find-me" onClick={findMe}>{ locating ? 'Finding...' : 'Find Me' }</button>
              <button disabled={!resetActive} id="reset" className="cursor-pointer icon--circle text-smaller" onClick={reset}>Reset</button>
            </div> */}
            <div className="mapDiv" ref={mapDiv}></div>
            {helpActive &&
              <div className="help-info bg-solid-primary color-white p-3 position-relative" style={{ top: helpInfo.top, left: helpInfo.left, width: 300 }}>
                {helpInfo.description}

                <div className="d-block">
                  {helpActive > 1 && <button className="color-inherit" onClick={e => setHelpActive(helpActive - 1)}>Previous</button>}
                  {helpActive === helpStates.length && <button className="color-inherit" onClick={e => setHelpActive(false)}>Get Started</button>}
                  {helpActive < helpStates.length && <button className="color-inherit" onClick={e => setHelpActive(helpActive + 1)}>Next</button>}
                </div>
                <div className="bg-solid-primary-darker d-inline-block p-1 position-absolute right-0 bottom-0" >{helpActive} of {helpStates.length}</div>
              </div>
            }
          </div>
        </div>

        <div className={ filtersColumnClass }>
          
          <h2>Filters</h2>          
          { filtersActive.length > 0 && <div>
            <h3>Active Filters</h3>
            <div className="d-flex flex-wrap gx-1 gy-1 mb-4 w-100">
              { filtersActive.map((filter, index) => (<button className="cursor-pointer bg-solid-gray color-white p-1 text-small fw-bold" key={ index } onClick={ e => removeFilter(filter) } >X { filter.title }</button>)) }
            </div>
          </div> }
          <fieldset>
            <legend>Eligibility Reason</legend>
            { eligibilityOptions.map((item, index) => (<div key={index} >
              <label key={ index } className="fw-normal">
                <input type="checkbox"  checked={ filterEligibility.includes(item.id.toString())} value={ item.id }  name="eligibility" onChange={ updateFilterEligibility } />
                { item.title }
              </label>
            </div>)) }
          </fieldset>     
          <hr />
          <fieldset>
            <legend>Section</legend>
            { cemeterySections.map((item, index) => (<div key={index} >
              <label key={ index } className="fw-normal">
                { filterSections.includes(item.id) }
                <input type="checkbox" checked={ filterSections.includes(item.id.toString()) } value={ item.id } name="section" onChange={ updateFilterSections } />
                { item.title }
              </label>
            </div>)) }
          </fieldset> 
        
          <div className={`mt-3 ${currTab === 'map' ? 'd-block' : 'd-medium-none'}`}>
            <button className="cursor-pointer button d-block mb-0" onClick={ e => setFiltersExpanded(false) }>Close Filters</button>
          </div>    
        

        </div>     
      </div>
    </div>

  </div>)
}


export default App;
