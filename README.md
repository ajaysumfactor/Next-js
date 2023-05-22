# Section_7

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

# Section_10 
## What is AirTable ?
1. It store data in the form of spreadsheet.

# Architecture:--
#### Make API-CreateCoffeeStore which store information of dynamic card in to airtable database .

    1. Sign up on Airtable
    2. Make a table with fields(id,voter,name,neighborhood,address,imgUrl) on airTable.
    3. connect with API 
    4. Now,If user click on dynamic card then i check (on the basis of their id ) weather it is present in database ,  if present then return response,else' store their information in airTable database and return response.
    5. Store coffee table in Airtable.

    

# Section_11

## SWR(Stale while revalidating)
    1. A HTTP Cache validation strategy popularised by SWR is a strategy to first return the data from cache(stale) then send the fetch request(revalidate),and finally come with the up-to-date data..
    2. It is independent framework.

## Made getCoffeeStoreById API
    1. this Api return a respone with related id data, if id is match in the airtable databse.
## Made favouriteCoffeeStoreById API
    1. Check with id if the data is exist .
        1. if(exist)-Then update the store with (currentVoting + 1);
        2. else --return id does not exist
## Design Voting Feature In our App
# Section_12

# Deployment
### [Vercel](https://discover-coffee-stores-ashy.vercel.app/) 
### [Netlify](https://discover-coffee-shop.netlify.app/)

