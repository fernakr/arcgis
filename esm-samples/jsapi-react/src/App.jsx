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


import "./App.css";

function App() {

  const mapDiv = useRef(null);

  useEffect(() => {
   // Create a map and view
   const map = new WebMap({
      basemap: 'streets',
    });

    const cemeteryLocation = [-97.726203, 30.266041];

    const view = new MapView({
      container: mapDiv.current,
      map: map,
      center: cemeteryLocation,
      rotation: 67 - 90, // Rotate the view to 0 degrees
      constraints: {
        minZoom: 16,
        maxZoom: 22, // Set the max zoom level to 19
      },
      zoom: 17, // Set your desired zoom level
    });

    // Create a graphics layer to hold the boundary boxes
    const userPositionLayer = new GraphicsLayer();
    map.add(userPositionLayer);

    const boundaryBoxLayer = new GraphicsLayer();
    boundaryBoxLayer.opacity = 0.3;
    map.add(boundaryBoxLayer);

    const gravesLayer = new GraphicsLayer();
    map.add(gravesLayer);

    // Function to create and add a graphic representing a boundary box
    // const addBoundaryBox = (centerPoint) => {
    //   const halfWidth = 0.05; // Adjust the width of the boundary box
    //   const halfHeight = 0.03; // Adjust the height of the boundary box

    //   const boundaryBox = {
    //     type: 'polygon',
    //     rings: [
    //       [centerPoint.x - halfWidth, centerPoint.y - halfHeight],
    //       [centerPoint.x + halfWidth, centerPoint.y - halfHeight * 2],
    //       [centerPoint.x + halfWidth, centerPoint.y + halfHeight],
    //       [centerPoint.x - halfWidth, centerPoint.y + halfHeight],
    //       [centerPoint.x - halfWidth, centerPoint.y - halfHeight],
    //     ],
    //   };

    //   const graphic = new Graphic({
    //     geometry: boundaryBox,
    //     symbol: {
    //       type: 'simple-fill',
    //       color: [255, 0, 0, 0.5], // Red with 50% transparency
    //       outline: {
    //         color: [255, 0, 0, 1], // Red with 100% transparency
    //         width: 2,
    //       },
    //     },
    //   });
    //   boundaryBoxLayer.opacity = 0.3;
    //   boundaryBoxLayer.add(graphic);
    // };

    const calculateImageSizeFactor = (zoom) => {
      // Adjust this function based on your preference
      return Math.pow(2, zoom) * 0.00001;
    };  

    const calculateDistance = (point1, point2) => {

      const join = geodesicUtils.geodesicDistance(
        new Point({ x: point1.longitude, y: point1.latitude }),
        new Point({ x: point2.longitude, y: point2.latitude }),
        "meters"
      );


      const imageSizeFactor = calculateImageSizeFactor(view.zoom); // Adjust this factor based on your preference

      return join.distance * imageSizeFactor * 1.38;
    }

    const addMapImage = () => {

      boundaryBoxLayer.removeAll();
      // Define two points for distance calculation
      const pointTopLeft = { longitude: -97.726299, latitude: 30.268062 };
      const pointTopRight = { longitude: -97.724537, latitude: 30.267431 };

      // Calculate the geodesic distance between the two points in meters
      const distanceWidthMeters = calculateDistance(pointTopLeft, pointTopRight)

      
      const pointBottomLeft = { type: 'point', longitude: -97.726299, latitude: 30.265062 };
      const distanceHeightMeters = calculateDistance(pointTopLeft, pointBottomLeft)


      const imageSymbol = new PictureMarkerSymbol({
        url: mapImage,
        width: distanceWidthMeters, // Set the width of the image
        height: distanceHeightMeters, // Set the height of the image
      });

      const imageGraphic = new Graphic({
        geometry: {
          type: 'point',
          longitude: cemeteryLocation[0],
          latitude: cemeteryLocation[1],
        },
        symbol: imageSymbol,
      });
      boundaryBoxLayer.add(imageGraphic);
    }

    const graves = [
      {
        latitude: 30.265680622085423,
        longitude: -97.72714671338717,
        name: 'John Connally',
      },
      {
        latitude: 30.266352438846273, 
        longitude: -97.72629913533466,
        name: 'Chris Kyle Grave',
      },
      {
        latitude: 30.266607619664864, 
        longitude: -97.72526443263861,
        name: 'Harry Taylor Bradley'
      },
      {
        latitude: 30.267125377412793, 
        longitude: -97.72661492488268,
        name: 'Tomb of Chris Kyle'
      }
    ]



    const popupTemplate = new PopupTemplate({
      title: '{name}',
      content: '<a href="https://www.google.com/maps/dir/?api=1&destination={latitude},{longitude}">Navigate to this grave with Google Maps</a>',

    });


    const markerGraphics = [];
    const addGraves = () => {
      graves.forEach(grave => {
        const marker = new Graphic({
          popupTemplate: popupTemplate, // Associate the popup template with the marker
          geometry: {
            type: 'point',
            x: grave.longitude,
            y: grave.latitude,
          },          
          symbol: {
            type: 'simple-marker',
            color: [255, 0, 0],
            outline: {
              color: [0, 0, 0],
              width: 2,
            },
          },
          attributes: {
            name: grave.name,
            latitude: grave.latitude,
            longitude: grave.longitude,
          },
        });
        markerGraphics.push(marker);
        // add click on marker
   
        gravesLayer.add(marker);
      }
      )
    }

    addMapImage();
    addGraves();


    //[-97.7885, 30.2308]
    // Use a fake center point
    // const fakeCenterPoint = {
    //   x: -97.7885,
    //   y: 30.2308,
    // };


    


    // Function to add a marker for the browser's GPS location
    const addGPSMarker = (position) => {
      // Clear previous GPS marker
      userPositionLayer.removeAll();

      const marker = new Graphic({
        geometry: {
          type: 'point',
          x: position.coords.longitude,
          y: position.coords.latitude,
        },
        symbol: {
          type: 'simple-marker',
          color: [0, 255, 0],
          outline: {
            color: [0, 0, 0],
            width: 2,
          },
        },
      });

      userPositionLayer.add(marker);
    };

    view.watch('zoom', (event) => {
      addMapImage();
    });

    view.on('pointer-leave', (event) => {
      document.body.style.cursor = "auto";
    });
    view.on('pointer-move', (event) => {

      view.hitTest(event).then((response) => {
        if (response.results && response.results.length > 0) {
          const clickedGraphic = response.results[0]?.graphic;
          document.body.style.cursor = clickedGraphic && markerGraphics.includes(clickedGraphic) ? "pointer" : "auto";
          
        } else{
          document.body.style.cursor = "auto";
        }
      });
    });

    view.on('click', (event) => {
      // Get the clicked location's coordinates
      const clickedPoint = view.toMap({ x: event.x, y: event.y });
      const latitude = clickedPoint.latitude.toFixed(6);
      const longitude = clickedPoint.longitude.toFixed(6);      

      // Log the coordinates to the console
      view.hitTest(event).then((response) => {
        const clickedGraphic = response.results[0]?.graphic;

        if (clickedGraphic && markerGraphics.includes(clickedGraphic)) {
          // The clicked graphic is one of the markers
          // Open the popup for the clicked marker
          view.popup.open({
            features: [clickedGraphic],
            location: event.mapPoint,
          });
        }
      });

      console.log([
        longitude,
        latitude
      ]);
      
    });


    //addBoundaryBox(fakeCenterPoint);

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

  return (<div className="wrapper">
    {/* <div className="toolbar">
      <div>You are looking for: <strong>Section 1 &rdquo; Row 3 &rdquo; Plot 2</strong></div>
      <div>Currently navigating to: Section 1</div>
      <button>I found section 1, let's find the</button>
    </div> */}
    <div className="mapDiv" ref={mapDiv}></div>
  </div>)
}

export default App;
