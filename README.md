# Coffee store by location
## Overview
    1. Render store based on their location

## Geolocation API
    The geolocation API allows the users to provide their location to web applications .
    based on condition---
        1. If they allow, then retreave the data.
        2. else we would not be able to retreave the        data/location.
    
## [Link to Geolocation API Docs](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)

## React Hookss

### useState Hooks
    step:---
    1. import { useState } from "react";
    2. useState accepts an initial state and returns two values:
        1. The current state.
        2. Afunction that update the state.
        3. To update the state, we can call the function returned by useState.
        4. 

### useEffect Hooks
   #### [useEffect Hooks](https://www.w3schools.com/react/react_useeffectasp#:~:text=The%20useEffect%20Hook%20allows%20you,function%3E%2C%20)

    1. useEffect Hook allows us to perform side effects in my components.
    2. example:-fetching data.
    3. It accepts two arguments ,second argument is optional.
        useEffect(<function>, <dependency>)

        In my project useEffect Hook is dependent on (latLong) minute i click on the view store nearby button it will fetch the current location of user and (latLong has now some different value ) so our function will run and render data on UI.