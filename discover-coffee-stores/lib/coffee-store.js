//unsplash--
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,

});





const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`
};


const getListOfCoffeeStorePhoto = async () => {
  const photos = await unsplash.search.getPhotos({
    query: 'coffie shop',
    // page: 1,
    perPage: 30,
  });
  const arrayResults = photos.response.results.map((res) => res.urls["small"]); //showing the particular url here ;
  return arrayResults;
}


export const fetchCoffeeStores = async (
  latLong="38.76391769302142,-104.85806130813452",
  limit=6) => {
  const photo=await getListOfCoffeeStorePhoto();
   const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
    }
  };

  const response = await fetch(getUrlForCoffeeStores(
    latLong,
    "coffee",
    limit
  ), options)
  const data = await response.json();
  return data.results.map((result,idx)=>{
    const neighborhood=result.location.neighborhood;
    return{
    id: result.fsq_id,
    name: result.name,
    address: result.location.address,
    neighborhood: neighborhood?.length>0 ? neighborhood[0]:"",
    imgUrl: photo.length>0 ? photo[idx] : null,
    };
  });

};