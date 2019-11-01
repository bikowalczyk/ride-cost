import React, { useEffect } from "react";

/*global google*/

const AddressSelector = props => {
  const { setCurrentLocation, setIsInput } = props;

  useEffect(() => {
    var input = document.getElementById("searchTextField");

    // Copied straight from Google

    function geolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var geolocation = {
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
    // I have to figure how to store the address

    // eslint-disable-next-line no-unused-vars
    const autocomplete = new google.maps.places.Autocomplete(input);
    geolocate();
    autocomplete.setFields(["adr_address"]);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace().adr_address;

      console.log(place);
      setCurrentLocation(place);
      setIsInput(false);
    });
  });

  return (
    <input
      style={{
        zIndex: 3,
        position: "absolute",
        top: "20%",
        transform: "translateX(-50%)"
      }}
      id="searchTextField"
      type="text"
    ></input>
  );
};

export default AddressSelector;
