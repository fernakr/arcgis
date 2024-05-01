import React, { useRef, useEffect } from "react";
//import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import mapImage from './map.jpg';
import * as geodesicUtils from "@arcgis/core/geometry/support/geodesicUtils.js";
import Point from '@arcgis/core/geometry/Point';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import RouteParameters from "@arcgis/core/rest/support/RouteParameters.js";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet.js";
import * as route from "@arcgis/core/rest/route.js";
import esriConfig from '@arcgis/core/config.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import Color from '@arcgis/core/Color';

import * as reactiveUtils from '@arcgis/core/core/ReactiveUtils';

import "./App.css";

function App() {

  //const [overlay, setOverlay] = React.useState(true);
  const mapDiv = useRef(null);

  useEffect(() => {
   // Create a map and view
   esriConfig.apiKey = "AAPK1603870d3538472fb7f6c4d1accdec01rx8QfJvj3jb-IW_qiJR_dYdKvNMFUSvt1HQOWd7OjMFMiuUtCVBmUwyLHuDAxRkx";
  
   const map = new WebMap({
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

      const plotholders = [
        {
          objectId: 1,
          name: 'Firstname Lastname',
          birthdate: '03/11/1959',
          description: 'This is a description of the plot holder',
        },
        {
          objectId: 2,
          name: 'Kristine Fernandez',
          birthdate: '03/11/1959',
          description: 'This is a description of the plot holder',
        }
      ]

      // reactiveUtils.watch(() => view.popup.selectedFeature, (selectedFeature) => {
      //   //alert('test');
      //   if (selectedFeature) {
      //     const objectId = selectedFeature.attributes.OBJECTID;
      //     const plotholder = plotholders.find(plotholder => plotholder.objectId === objectId);
      //     if (plotholder) {
      //       //alert('test');
      //       selectedFeature.popupTemplate = {
      //         title: 'test' + plotholder.name,
      //         content: "Content{name}{birthdate}"
      //       };
      //     }
      //   }
      // });
  
      let graveLayer;

      
      const getPlotTitle = (feature) => {        
        const objectId = feature.graphic.attributes.OBJECTID;
        const plotholder = plotholders.find(plotholder => plotholder.objectId === objectId);
        return plotholder ? plotholder.name : 'Vacant Plot';
      }

      const getPlotContent = (feature) => {
        const objectId = feature.graphic.attributes.OBJECTID;        
        const plotholder = plotholders.find(plotholder => plotholder.objectId === objectId);
        return plotholder ? plotholder.birthdate : 'Vacant Plot';
      }
      // Query each feature layer
      featureLayers.forEach(function(featureLayer) {
        graveLayer = featureLayer;
        graveLayer.popupTemplate = {
          title: getPlotTitle,
          content: getPlotContent,
          fieldInfos: [
            {
              fieldName: 'OBJECTID',
              visible: false
            }
          ]
        };
           

        
      });

   
    });
    

    view.watch('zoom', (event) => {
      //addMapImage();
    });

    view.on('pointer-leave', (event) => {
      document.body.style.cursor = "auto";
    });
    // view.on('pointer-move', (event) => {

    //   view.hitTest(event).then((response) => {
    //     if (response.results && response.results.length > 0) {
    //       const clickedGraphic = response.results[0]?.graphic;
    //       console.log(clickedGraphic);
    //       //document.body.style.cursor = clickedGraphic && markerGraphics.includes(clickedGraphic) ? "pointer" : "auto";
          
    //     } else{
    //       document.body.style.cursor = "auto";
    //     }
    //   });
    // });

    view.on('click', (event) => {

      view.hitTest(event).then((response) => {
        //console.log(response.results);
        // const clickedGraphic = response.results[0]?.graphic;

        // console.log(clickedGraphic);

        // if (clickedGraphic) {
        //   // The clicked graphic is one of the markers
        //   // Open the popup for the clicked marker
        //   view.popup.open({
        //     //content: 'test',
        //     features: [clickedGraphic],
        //     location: event.mapPoint,
        //   });
        // }
      });


      
    });



    // Use the browser's Geolocation API to continuously watch for changes in position
    const watchId = navigator.geolocation.watchPosition(
    (position) => {
      
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

  return (<div className="wrapper">
    {/* <button onClick={ e => setOverlay(!overlay) }>Overlay Toggle</button> */}
    {/* <div className="toolbar">
      <div>You are looking for: <strong>Section 1 &rdquo; Row 3 &rdquo; Plot 2</strong></div>
      <div>Currently navigating to: Section 1</div>
      <button>I found section 1, let's find the</button>
    </div> */}
    <div className="mapDiv" ref={mapDiv}></div>
  </div>)
}

export default App;
