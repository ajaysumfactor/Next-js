# Sction_7

## Overview

    1. classnames
    2. getstaticprops
    3. getstaticPath
    4. implement static site generation
    5. Fallback
    6. Set Foursquare API
    
    

# Section_8   
## Coffee store by location
    Render store based on their location  
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

### NEXT_PUBLIC_--PREFIX
    By default all environment variables loaded through (.env.local) ,And that is only available in the node.js environment ,To access token on client side i use NEXT_PUBLIC_ Prefix in variable name in env.local file.

    In my project i used = (useEffect hoook ) --perform side effect(fetching data).And react component is rendered on client side . 
# Section:--9
## API(Application Programming Interface):---
#### A way to one website to talk with Anoher website but in the form of Data.
#### Aspecial kind of Url that do not return HTML but return data in the form of json;
## REST API(Representational State Transfer)
    It is architectural style for an application programm interface that uses (HTTP) Requests to access and use data.
    It is not a programming Language.
## Serverless function
    Api routes are essentially deployed as a serverless function ,they also known as Lambda function,
    In serverless function you need not worry about the setting up or managing the server infrastructure.
## API Route
### Rules for the API Routes
1. File need to be a function.
2. Function needs to be exported by default.
3. Evey function should have its own file.
## Catch all route
    1. It is special type of routes that allows us to handle dynamic routes with varrying parameter.
    2. Denotes by---[...slug].js/tsx
    3. It is used when I have Pages or API Routes with dynamic Paths that can have any number of segment.
        for example:--/api/posts/2023/05/15/my-blog-post/
        ['2023','05','15','my-blog-post']---->using this array i can perform necessary operations.

## Make a serverless function for "getcoffeeStore".
