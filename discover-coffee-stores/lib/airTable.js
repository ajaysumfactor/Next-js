const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_KEY);
const table = base('coffee-stores');//store reference to a table in airtable websites 

const getMinifiedRecord = (record) => {
    return {
        ...record.fields,


    };
};

const getMinifiedRecords = (records) => {
    return records.map((record) => getMinifiedRecord(record));
}


export { table, getMinifiedRecords };