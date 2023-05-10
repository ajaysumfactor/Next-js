import { useState } from "react";




function userTrackLocation() {
    const [locationErrorMessage, setLocationErrorMessage] = useState("");
    const [latLong, setLatLong] = useState("");
    const [isFindingLocation,setIsFindingLocation]=useState(false);
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatLong(`"lattitude: "${latitude}, "longitude: "${longitude}`);
        setLocationErrorMessage("");

        setIsFindingLocation(false);

    };

    function error() {
        setIsFindingLocation(false);
        setLocationErrorMessage("Unable to retrieve your location");
    };
    function handleTrackLocation() {
        setIsFindingLocation(true);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
        else {
            setIsFindingLocation(false);
            setLocationErrorMessage("Geolocation is not supported by your browser");
        }
    }
    return {
        handleTrackLocation, latLong, locationErrorMessage,isFindingLocation
    };
};







export default userTrackLocation;