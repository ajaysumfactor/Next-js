import { fetchCoffeeStores } from "../../lib/coffee-store";

const getCoffeeStoreByLocation = async(req,res) =>{

try{
const {latLong,limit}=req.query;
const response = await fetchCoffeeStores(latLong,limit);
// const data=await response.json();
// res.status(200);
// res.json(response);
res.status(200).json(response);
}
catch(err){
    console.error("There is an error",err);
    res.status(500);
    res.json({message: "Oh no! something went wrong",err});
}
  
}

export default getCoffeeStoreByLocation;