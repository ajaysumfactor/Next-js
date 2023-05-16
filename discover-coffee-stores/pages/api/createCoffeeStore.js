

const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_KEY);
const table=base('coffee-stores');//store reference to a table in airtable websites 
console.log({table});

const createCoffeStore = async(req,res) => {//by default it is get request 
    console.log(req);//method : GET By default 
    if(req.method=='POST'){
        const findCoffeeStoreRecords=await table.select({maxRecords: 1,}).firstPage();
        console.log(findCoffeeStoreRecords);//data is in [{preoperty: value,property: value}]
        if(findCoffeeStoreRecords.length!==0){
            res.json(findCoffeeStoreRecords);
        }
        else{
            res.json({message: "create a record"});
        }
    }
    else{
        res.json({message: "Method is GET"})
    }
};

export default createCoffeStore;