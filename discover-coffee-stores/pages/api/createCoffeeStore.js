

const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_KEY);
const table = base('coffee-stores');//store reference to a table in airtable websites 
console.log({ table });

const createCoffeStore = async (req, res) => {//by default it is get request 
    console.log(req);//method : GET By default 
    if (req.method == 'POST') {
        try {
            const findCoffeeStoreRecords = await table.select({ filterByFormula: `id="1"` }).firstPage();
            console.log(findCoffeeStoreRecords);//data is in [{preoperty: value,property: value}]
            if (findCoffeeStoreRecords.length !== 0) {
                const records = findCoffeeStoreRecords.map((record) => {
                    return { ...record.fields, };
                });
                res.json(records);
            }
            else {
                res.json({ message: "create a record" });
            }
        }
        catch (err) {
            console.error("Error finding store", err);
            res.status(500);
            res.json({ message: "Error finding store", err });
        }
    }

    else {
        res.json({ message: "Method is GET" })
    }
};

export default createCoffeStore;