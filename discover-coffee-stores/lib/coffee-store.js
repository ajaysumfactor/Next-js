//unsplash--
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,

});





const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`
};


const getListOfCoffeeStorePhoto = async () => {
  const photos = await unsplash.search.getPhotos({
    query: 'coffie shop',
    page: 1,
    perPage: 6,
  });
  const arrayResults = photos.response.results.map((res) => res.urls["small"]); //showing the particular url here ;
  return arrayResults;
}


export const fetchCoffeeStores = async () => {
  const photo=await getListOfCoffeeStorePhoto();
  console.log(photo);
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
  return data.results.map((result,idx)=>{
    return{
    ...result,
    imgUrl: photo[idx],
    };
  });

};