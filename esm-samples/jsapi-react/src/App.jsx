import React, { useRef, useEffect } from "react";
//import Bookmarks from '@arcgis/core/widgets/Bookmarks';
//import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
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
import Compass from '@arcgis/core/widgets/Compass';
// import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
// import Color from '@arcgis/core/Color';

// import * as reactiveUtils from '@arcgis/core/core/ReactiveUtils';

import "./App.css";

function App() {

  const [filterValue, setFilterValue] = React.useState(false);
  const [gravesView, setGravesView] = React.useState(null);
  const mapDiv = useRef(null);
  
  let graveLayer, activeLayer;
  let map;
  //let filterExpression = null;

  /* The commented out `updateFilter` function is intended to toggle the visibility of a layer on the
  map based on a filter condition. Here's a breakdown of what the function does: */
  



  useEffect(() => {
   // Create a map and view
   esriConfig.apiKey = "AAPK1603870d3538472fb7f6c4d1accdec01rx8QfJvj3jb-IW_qiJR_dYdKvNMFUSvt1HQOWd7OjMFMiuUtCVBmUwyLHuDAxRkx";
   
   map = new WebMap({
      portalItem: {
        id: 'b8fbdd2f710e4414844565206609892e'
      },
      basemap: 'arcgis-navigation',
      
    });

    // get the feature layer
    // const featureLayer = map.layers.items[0];
    
  

    const cemeteryLocation = [-97.726293, 30.266041];


    const view = new MapView({
      container: mapDiv.current,
      map: map,
      center: cemeteryLocation,
      rotation: 68 - 90, // Rotate the view to 0 degrees
      // constraints: {
      //   // minZoom: 16,
      //   // maxZoom: 22, // Set the max zoom level to 19
      // },
      zoom: 17, // Set your desired zoom level
    });

    
    const userPositionLayer = new GraphicsLayer();
    map.add(userPositionLayer);

    view.when(() => {


      var layers = map.layers.toArray();

      // Filter feature layers
      var featureLayers = layers.filter(function(layer) {
        return layer instanceof FeatureLayer;
      });

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

          // Set the renderer to the feature layer
          featureLayer.renderer = renderer;
          var legend = new Legend({
            view: view,
            layerInfos: [{
              layer: featureLayer,
              title: "Legend"
            }]
          });
        
          const fullscreen = new Fullscreen({
            label: 'Expand',
            view: view
          });
          
          const compass = new Compass({
            view: view
          });

          // min/max zoom
          view.constraints.minZoom = 16;
          view.constraints.maxZoom = 20;

          view.ui.add(compass, "top-left");
          view.ui.add(fullscreen, "top-right");
          // Add the legend to the view
          view.ui.add(legend, "bottom-right");
        
          view.whenLayerView(graveLayer).then((layerView) => {
            // flash flood warnings layer loaded
            // get a reference to the flood warnings layerview
            //console.log('layerView', layerView);
            setGravesView(layerView);
            //gravesView = layerView;
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

        }
        

        
      });
      

      


   
    });
    

    view.watch('zoom', (event) => {
      //addMapImage();
    });

    view.on('pointer-leave', (event) => {
      document.body.style.cursor = "auto";
    });


    // Function to add a marker for the browser's GPS location
    const addGPSMarker = (position) => {
      // Clear previous GPS marker
      userPositionLayer.removeAll();

      // create a marker with a person icon




      const marker = new Graphic({
        geometry: {
          type: 'point',
          x: position.coords.longitude,
          y: position.coords.latitude,
        },
        symbol: {
        type: "text", // autocasts as new TextSymbol()
        color: "#ebab34",
        text: "\ue675", // esri-icon-user
        font: {
          // autocasts as new Font()
          size: 36,
          family: "CalciteWebCoreIcons" // Esri Icon Font
        }
      },
      });

      userPositionLayer.add(marker);

      // center map on user location
      //view.center = [position.coords.longitude, position.coords.latitude];
      
    };

    // Use the browser's Geolocation API to continuously watch for changes in position
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        // Add a marker for the browser's GPS location
        addGPSMarker(position);
        
  
        // Center the view on the updated GPS location
        //view.center = [position.coords.longitude, position.coords.latitude];
      },
      (error) => {
        console.error('Error getting GPS location:', error.message);
      }
    );
  
    // Clean up the watchPosition when the component is unmounted
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
    
    
  }, [mapDiv]);

  useEffect(() => {
    let filterExpression = filterValue ? "status = 'occupied'" : null;
    //console.log(gravesView);
    if (gravesView){      
      gravesView.filter = {
        where: filterExpression
      };
      //console.log('view', gravesView);
    }    
  }, [filterValue, gravesView]);


  return (<div className="wrapper">
    <h1>Search the Map</h1>
     <button onClick={ e => setFilterValue(!filterValue) }>Filter</button> 
    
    <div className="mapDiv" ref={mapDiv}></div>
  </div>)
}

export default App;
