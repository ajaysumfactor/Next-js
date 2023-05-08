//unsplash--
import { createApi } from 'unsplash-js';
 
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  
});





const getUrlForCoffeeStores=(latLong,query,limit)=>{
return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`
};

export const fetchCoffeeStores=async()=>{
  unsplash.search.getPhotos({
    query: 'cat',
    page: 1,
    perPage: 10,
    color: 'green',
    orientation: 'portrait',
  });





const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.FOURSQUARE_API_KEY,
    }
  };
  
  const response = await fetch(getUrlForCoffeeStores(
    "19.084124283768357,72.88391149751224",
    "coffee",
    6
  ), options)
  const data = await response.json();
  return data.results;

};