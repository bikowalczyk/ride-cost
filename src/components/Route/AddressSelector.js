import React, { useEffect } from "react";

/*global google*/

const AddressSelector = props => {
  const {
    setCurrentLocation,
    setDestinationLocation,
    setIsInput,
    setRouteStops,
    RouteStops,
    WaypointIndicator
  } = props;

  useEffect(() => {
    var input = document.getElementById("searchTextField");

    // Copied straight from Google

    let geolocation;

    function geolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          });
          autocomplete.setBounds(circle.getBounds());
        });
      }
    }

    // I have to figure how to store the address - as 3 sepreate states :)

    // eslint-disable-next-line no-unused-vars
    const autocomplete = new google.maps.places.Autocomplete(input);
    geolocate();
    autocomplete.setFields(["formatted_address"]);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace().formatted_address;

      // SWITCH FOR RECOGNIZING WHICH STATE TO CHANGE

      switch (WaypointIndicator) {
        case "Current":
          // console.log(place);
          setCurrentLocation(place);
          setIsInput(false);
          break;
        case "Destination":
          // console.log(place);
          setDestinationLocation(place);
          setIsInput(false);
          break;
        case "routeAdd":
          // console.log(place);
          const updatedRoutes = RouteStops;
          updatedRoutes.push(place);
          setRouteStops(updatedRoutes);
          setIsInput(false);
          break;
        default:
          console.log("Wrong type");
          console.log(WaypointIndicator);
          break;
      }
    });
  });

  return (
    <input
      autoFocus
      style={{
        zIndex: 3,
        position: "absolute",
        top: "20%",
        transform: "translateX(-50%)",
        left: "50%"
      }}
      id="searchTextField"
      type="text"
    ></input>
  );
};

export default AddressSelector;
