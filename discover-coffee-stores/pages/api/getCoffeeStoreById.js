import { table, getMinifiedRecords } from "../../lib/airTable";

const getCoffeeStoreById = async (req, res) => {
    const { id } = req.query;
    try {
        if (id) {
            const findCoffeeStoreRecords = await table.select({ filterByFormula: `id="${id}"` }).firstPage();
            // console.log(findCoffeeStoreRecords);//data is in [{preoperty: value,property: value}]
            if (findCoffeeStoreRecords.length !== 0) {
                const records = getMinifiedRecords(findCoffeeStoreRecords);
                res.json(records);
            }
            else {
                res.json({ message: "Id could not be found " });
            }

        }
        else {
            res.status(400);
            res.json({ message: "Id is missing" });
        }
    }
    catch (err) {
        res.status(500);
        res.json({ message: "Something went wrong ", err });
    }
}
export default getCoffeeStoreById;