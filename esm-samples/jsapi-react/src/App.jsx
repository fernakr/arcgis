import React, { useRef, useEffect } from "react";
//import Bookmarks from '@arcgis/core/widgets/Bookmarks';
//import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
// import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
// import Graphic from '@arcgis/core/Graphic';
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
      constraints: {
        minZoom: 16,
        maxZoom: 22, // Set the max zoom level to 19
      },
      zoom: 17, // Set your desired zoom level
    });

    

    view.when(() => {


      var layers = map.layers.toArray();

      // Filter feature layers
      var featureLayers = layers.filter(function(layer) {
        return layer instanceof FeatureLayer;
      });

      featureLayers.forEach(function(featureLayer) {

        if (featureLayer.title === 'Graves') {
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

  // useEffect(() => {
  //   // find gravelayer
  //   // 
  //   console.log(graveLayer);
  //   if (graveLayer) {
  //     console.log('filter', filterExpression);
  //     graveLayer.definitionExpression = filterExpression;
  //   }
  // }, [filterValue, graveLayer]);
  return (<div className="wrapper">
     <button onClick={ e => setFilterValue(!filterValue) }>Filter</button> 
    
    <div className="mapDiv" ref={mapDiv}></div>
  </div>)
}

export default App;
