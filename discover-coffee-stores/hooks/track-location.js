import { useState } from "react";




function userTrackLocation() {
    const [locationErrorMessage, setLocationErrorMessage] = useState("");
    const [latLong, setLatLong] = useState("");
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatLong(`"lattitude: "${latitude}, "longitude: "${longitude}`);
    };

    function error() {
        setLocationErrorMessage("Unable to retrieve your location");
    };
    function handleTrackLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
            setLocationErrorMessage("");
        }
        else {
            setLocationErrorMessage("Geolocation is not supported by your browser");
        }
    }
    return {
        handleTrackLocation, latLong, locationErrorMessage
    };
};







export default userTrackLocation;