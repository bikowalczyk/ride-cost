import React, { useEffect } from "react";

/*global google*/

const AddressSelector = () => {
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
    autocomplete.addListener("place_changed", () => {
      autocomplete.setFields(["adr_address"]);
      const place = autocomplete.getPlace();

      console.log(place);
    });
  });

  return <input id="searchTextField" type="text"></input>;
};

export default AddressSelector;
