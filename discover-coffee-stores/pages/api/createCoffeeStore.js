import { table, getMinifiedRecords } from "../../lib/airTable";


// console.log({ table });

const createCoffeStore = async (req, res) => {//by default it is get request 
    // console.log(req);//method : GET By default 
    if (req.method == 'POST') {
        const { id, name, address, neighborhood, voting, imgUrl } = req.body;
        try {
            if (id) {
                const findCoffeeStoreRecords = await table.select({ filterByFormula: `id=${id}` }).firstPage();
                // console.log(findCoffeeStoreRecords);//data is in [{preoperty: value,property: value}]
                if (findCoffeeStoreRecords.length !== 0) {
                    const records = getMinifiedRecords(findCoffeeStoreRecords);
                    res.json(records);
                }
                else {
                    if (name) {
                        const createRecords = await table.create([
                            {
                                fields: {
                                    id,
                                    name,
                                    address,
                                    neighborhood,
                                    voting,
                                    imgUrl,
                                },
                            },
                        ]);
                        console.log(createRecords);
                        // res.json({ message: "create a record" });
                        const records = getMinifiedRecords(createRecords);
                        res.json(records);
                    }
                    else {
                        res.status(400);
                        res.json({ message: "Id or name is missing" });
                    }
                }
            }

            else {
                res.status(400);
                res.json({ message: "Id is missing" });
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