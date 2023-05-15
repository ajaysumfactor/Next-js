

const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_KEY);
const table=base('coffee-stores');
console.log({table});

const createCoffeStore = (req,res) => {//by default it is get request 
    console.log(req);//method : GET By default 
    if(req.method=='POST'){
        res.json({message: "hii! buddy"});

    }
    else{
        res.json({message: "Method is GET"})
    }
};

export default createCoffeStore;