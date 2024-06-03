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

  const [helpActive, setHelpActive] = React.useState(false);
  const [helpInfo, setHelpInfo] = React.useState(0);
  const [currPage, setCurrPage] = React.useState(0);
  
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

  // these will be pulled from Craft     
  const eligibilityOptions = [
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
    const baseZoom = isMobile ? 16 : 17;
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

          legendValues.push(legendValues.concat([{
            layer: featureLayer,
            title: "Legend"
          }]));
        }


      });

      const fullscreen = new Fullscreen({
        label: 'Expand',
        view: view
      });

      var legend = new Legend({
        view: view,
        layerInfos: legendValues
      });

      view.ui.add(fullscreen, "top-right");
      view.ui.add(legend, "bottom-left");

    });


    view.on('drag', (event) => {
      setResetActive(true);
    });

    view.watch('zoom', (event) => {

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

  // when window size is resized update the view
  window.addEventListener('resize', () => {
    if (mapDiv.view) {
      // rotate map 
      const isMobile = checkMobile();
      const baseRotation = isMobile ? -90 : 180;
      const baseZoom = isMobile ? 16 : 17;
      mapDiv.view.rotation = 68 + baseRotation;
      mapDiv.view.zoom = baseZoom;

    }
  });

  const checkMobile = () => {
    return window.innerWidth < 768;
  }

  const findMe = () => {


    navigator.geolocation.getCurrentPosition((position) => {
      // Add a marker for the browser's GPS location
      mapDiv.userPositionLayer.removeAll();


      const userPosition = [position.coords.longitude, position.coords.latitude];
      const points = [userPosition, cemeteryLocation]; // latter to subbed in with currently selected feature if applicable

      const graphics = points.map((point) => {
        return new Graphic({
          geometry: { type: "point", x: point[0], y: point[1] },
          symbol: {
            type: 'simple-marker',
            color: 'red',
            size: '8px'
          }
        });
      });

      mapDiv.view.graphics.addMany(graphics);



      mapDiv.view.when(() => {
        mapDiv.view.goTo({
          target: graphics
        });
      });



    });


  }

  const reset = () => {
    mapDiv.view.goTo({
      target: cemeteryLocation,
      zoom: 17
    });
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



        mapDiv.view.popup.dockEnabled = true;
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


    //return .title)
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

  return (<div className="wrapper">


    {/* <button onClick={ e => setFilterValue(!filterValue) }>Filter</button>  */}

    <div className="grid-container w-100">
      <div className="d-flex justify-content-start">
        {tabMenu.map((tab, index) => (<button className={`p-2 ${tab.id === currTab ? 'bg-solid-primary color-white' : ''}`} onClick={e => setCurrTab(tab.id)}>{tab.title}</button>))}

      </div>

    </div>
    <div className={`${currTab !== 'map' ? ' w-100' : ''}`}>
      <div className="grid-x">

        <div className={"cell medium-auto " + (currTab !== 'map' ? 'd-none' : '')} >
          <div className="position-relative">
            <div className="position-absolute z-1 mt-8 pt-8 d-flex flex-column gy-3">
              <button className="icon--circle text-smaller" onClick={e => setHelpActive(1)}>Help</button>
              <button className="icon--circle text-smaller" id="find-me" onClick={findMe}>Find Me</button>
              <button disabled={!resetActive} id="reset" className="icon--circle text-smaller" onClick={reset}>Reset</button>
            </div>
            <div className="mapDiv" ref={mapDiv}></div>
            {helpActive &&
              <div className="help-info bg-solid-primary color-white p-3 position-relative" style={{ top: helpInfo.top, left: helpInfo.left, width: 300 }}>
                {helpInfo.description}

                <div className="d-block">
                  {helpActive > 1 && <button class="color-inherit" onClick={e => setHelpActive(helpActive - 1)}>Previous</button>}
                  {helpActive === helpStates.length && <button class="color-inherit" onClick={e => setHelpActive(false)}>Get Started</button>}
                  {helpActive < helpStates.length && <button class="color-inherit" onClick={e => setHelpActive(helpActive + 1)}>Next</button>}
                </div>
                <div class="bg-solid-primary-darker d-inline-block p-1 position-absolute right-0 bottom-0" >{helpActive} of {helpStates.length}</div>
              </div>
            }
          </div>
        </div>

        <div className={`cell px-4 ${currTab === 'map' ? 'medium-4 d-none d-medium-block' : 'pt-4 medium-8'}`}>
          <div className="mb-4">
            {currTab === 'list' ?
              <div className="">
                <label htmlFor="searchSearchKeywords">Search by keyword</label>
                <input type="text" id="searchSearchKeywords" onChange={e => { setSearchKeywords(e.target.value); setSearchName(null) }} />
              </div>
              : <div>
                <label htmlFor="plotholderName">Search by name</label>
                <input type="text" id="plotholderName" onChange={e => { setSearchName(e.target.value); setSearchKeywords(null) }} />
              </div>}
          </div>
          <div>

          </div>
          {items.map((item, index) => (<div key={index} className="mb-4">

            <h4>{item.name}</h4>
            {item.Eligibility && <p>Eligibility: {outputEligibility(item.Eligibility)}</p>}
            <button className="button" onClick={e => selectObject(item.OBJECTID)}>View on Map</button>
            <hr />
          </div>))}
          <div className="pagination">
            {currPage > 0 && <button onClick={e => { setCurrPage(currPage - 1); }}>Previous</button>}
            {currPage < pagination.totalPages && <button onClick={e => { setCurrPage(currPage + 1); }}>Next</button>}
          </div>
        </div>
        <div className={`${currTab === 'map' ? 'd-block' : 'cell px-4 medium-4'}`}>
          
          <h2>Filters</h2>          
          { filtersActive.length > 0 && <div>
            <h3>Filters</h3>
            <ul>
              { filtersActive.map((filter, index) => (<button onClick={ e => removeFilter(filter) } key={index}>{ filter.title }</button>)) }
            </ul>
          </div> }
          <fieldset>
            <legend>Eligibility Reason</legend>
            { eligibilityOptions.map((item, index) => (<div key={index} >
              <label>
                <input type="checkbox" value={ item.id } name="eligibility" onChange={ updateFilterEligibility } />
                { item.title }
              </label>
            </div>)) }
          </fieldset>     
          <fieldset>
            <legend>Section</legend>
            { cemeterySections.map((item, index) => (<div key={index} >
              <label>
                <input type="checkbox" value={ item.id } name="section" onChange={ updateFilterSections } />
                { item.title }
              </label>
            </div>)) }
          </fieldset>     

        </div>     
      </div>
    </div>

  </div>)
}


export default App;
