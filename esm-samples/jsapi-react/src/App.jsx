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

// import * as reactiveUtils from '@arcgis/core/core/ReactiveUtils';

import "./App.css";

function App() {

  
  const [filterValue, setFilterValue] = React.useState(false);
  const [gravesView, setGravesView] = React.useState(null);
  const mapDiv = useRef(null);
  const [searchedName, setSearchedName] = React.useState('');
  const [currTab, setCurrTab] = React.useState('map');
  const [items, setItems] = React.useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const selectedObjectId = urlParams.get('objectId');
  const [resetActive, setResetActive] = React.useState(false);
  
  let graveLayer;
  const cemeteryLocation = [-97.726293, 30.266041];
  


  useEffect(() => {
   // Create a map and view
   esriConfig.apiKey = "AAPK1603870d3538472fb7f6c4d1accdec01rx8QfJvj3jb-IW_qiJR_dYdKvNMFUSvt1HQOWd7OjMFMiuUtCVBmUwyLHuDAxRkx";
   
    const map = new WebMap({
      portalItem: {
        id: 'b8fbdd2f710e4414844565206609892e'
      },
      basemap: 'arcgis-navigation',
      
    });


  

    


    const view = new MapView({
      container: mapDiv.current,
      map: map,
      center: cemeteryLocation,
      rotation: 68 + 180, // Rotate the view to 0 degrees
      // constraints: {
      //   // minZoom: 16,
      //   // maxZoom: 22, // Set the max zoom level to 19
      // },
      zoom: 17, // Set your desired zoom level
    });

    const userPositionLayer = new GraphicsLayer();
    map.add(userPositionLayer);

    mapDiv.view = view;
    mapDiv.map = map;
    mapDiv.userPositionLayer = userPositionLayer;
   

    view.when(() => {


      var layers = map.layers.toArray();

      // Filter feature layers
      var featureLayers = layers.filter(function(layer) {
        return layer instanceof FeatureLayer;
      });

      let legendValues = [];
      featureLayers.forEach(function(featureLayer) {
        //console.log('featureLayer', featureLayer.title);
        if (featureLayer.title.includes('Graves')) {
          graveLayer = featureLayer;
          // update rendererer - set opacity based off value

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
         
        
          view.whenLayerView(graveLayer).then((layerView) => {            
            setGravesView(layerView);            

          });
      
          // add images to the feature layer
          graveLayer.popupTemplate = {
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
            },  {
            
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
          
          

        }else{
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

      // min/max zoom
      // view.constraints.minZoom = 16;
      // view.constraints.maxZoom = 20;

      //view.ui.add(compass, "top-left");
      view.ui.add(fullscreen, "top-right");
      // Add the legend to the view

      view.ui.add(legend, "bottom-left");
    

      


   
    });
    
    view.on('drag', (event) => {
      setResetActive(true);
    });

    view.watch('zoom', (event) => {
      setResetActive(true);
    });

    view.on('pointer-leave', (event) => {
      document.body.style.cursor = "auto";
    });




    

    
  }, [mapDiv]);


  useEffect(() => {
    let filterExpression = filterValue ? "status = 'occupied'" : null;    
    if (gravesView){      
      gravesView.filter = {
        where: filterExpression
      };

      gravesView.queryFeatures({
        where: filterExpression,
      }).then((response) => {

        //console.log('results', response.features.map(feature => feature.attributes));
        setItems(response.features.map(feature => feature.attributes));
        // output results to list view

      });
      //console.log('view', gravesView);
    }    
  }, [filterValue, gravesView]);

  useEffect(() => {
    ///console.log('selectedObjectId', selectedObjectId);
    if (gravesView){
      
      if (selectedObjectId){
        
        selectObject(selectedObjectId);
      }
    }
  }, [gravesView]);

  

  const createListView = () => {
    // create a list view of the features
  }

  const findMe = () => {
    

      navigator.geolocation.getCurrentPosition((position) => {
        // Add a marker for the browser's GPS location
         mapDiv.userPositionLayer.removeAll();

        // create a marker with a person icon




        // const marker = new Graphic({
        //   geometry: {
        //     type: 'point',
        //     x: position.coords.longitude,
        //     y: position.coords.latitude,
        //   },
        //   symbol: {
        //   type: "text", // autocasts as new TextSymbol()
        //   color: "#ebab34",
        //   text: "\ue675", // esri-icon-user
        //   font: {
        //     // autocasts as new Font()
        //     size: 36,
        //     family: "CalciteWebCoreIcons" // Esri Icon Font
        //   }
        // },
        // });

        const userPosition = [position.coords.longitude, position.coords.latitude];
        const points = [userPosition, cemeteryLocation]; // latter to subbed in with currently selected feature if applicable

        //console.log('points', points);
        //mapDiv.userPositionLayer.add(marker);

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

  const selectObject = (objectId) => {
      if (currTab !== 'map') setCurrTab('map');
      gravesView.queryFeatures({  
        where: "OBJECTID = " + objectId,
          outFields: ["*"],
          returnGeometry: true
      }).then(function (results) {

        if (results.features.length > 0) {
          var feature = results.features[0];
          

          // Trigger the popup
          mapDiv.view.popup.open({
              features: [feature]            
          });

          // Optionally zoom to the feature
          
          mapDiv.view.goTo({              
              target: feature,
              zoom: 20
          });              
        }
    })
  };

    

  const tabMenu = [
    {
      title: 'Map View',
      id: 'map'
    },
    {
      title: 'List View',
      id: 'list'
    }
  ]
  return (<div className="wrapper">
    
    
     {/* <button onClick={ e => setFilterValue(!filterValue) }>Filter</button>  */}
     
      <div className="grid-container">        
        <div className="d-flex w-100">          
          { tabMenu.map((tab, index) => (<button className={tab.id === currTab ? 'bg-solid-primary color-white' : ''} onClick={ e => setCurrTab(tab.id)}>{ tab.title }</button>))}
                  
        </div>          
        {/* <input type="text" onChange={ e => setSearchedName(e.target.value) } /> */}
        {/* <span>{ searchedName }</span>      
        <button onClick={findMe}>Find Me</button>   */}
      </div>    
      <div className="grid-x grid-margin-x">
  
      <div className={"cell medium-auto " + (currTab !== 'map' ? 'd-none': '')} >
        <div className="position-relative">
          <div className="position-absolute z-1 mt-8 pt-8 d-flex flex-column gy-3">
            <button class="icon--circle text-smaller" onClick={ e => setFilterValue(!filterValue) }>Filter</button>
            <button class="icon--circle text-smaller" onClick={findMe}>Find Me</button>
            <button disabled={!resetActive} class="icon--circle text-smaller" onClick={reset}>Reset</button>
          </div>            
          <div className="mapDiv"  ref={mapDiv}></div>
        </div>
      </div>
  
      <div className="cell medium-4">
        { items.map((item, index) => (<div key={index} className="card">
          <div className="card-section">            
            <h4>{ item.OBJECTID }</h4>
            <p>{ item.birthdate }</p>
            <img src={item.headshot} alt={item.name} />
            <button className="button" onClick={e => selectObject(item.OBJECTID)}>View on Map</button>
          </div></div>)) }
      </div>
    </div>
  </div>)
}


export default App;
