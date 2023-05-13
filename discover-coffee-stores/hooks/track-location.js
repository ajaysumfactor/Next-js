import { useContext, useState } from "react";
import {ACTION_TYPES,StoreContext} from '../pages/_app';
 
function userTrackLocation() {
    const [locationErrorMessage, setLocationErrorMessage] = useState("");
    // const [latLong, setLatLong] = useState("");
    const [isFindingLocation,setIsFindingLocation]=useState(false);

const {dispatch}=useContext(StoreContext);

    function success(position) { 
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // setLatLong(`${latitude},${longitude}`);
        dispatch({
            type: ACTION_TYPES.SET_LAT_LONG,
            payload: {latLong: `${latitude},${longitude}`},
        })
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
        handleTrackLocation, locationErrorMessage,isFindingLocation
    };
};







export default userTrackLocation;