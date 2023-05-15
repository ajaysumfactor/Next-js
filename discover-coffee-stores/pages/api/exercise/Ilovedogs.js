export default function Ilovedogs(req,res)
{
    console.log(req.query);
    const query = req.query.breed;
    console.log(query);
    res.status(200).json({ message: `I love ${query}` });
}



//write like this in browser :----
//http://localhost:3000/api/ilovedogs?breed=Golden%20Doodles
//%20---shows a space character in browser search bar 