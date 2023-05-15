
//catch all route 

export default function catchAllRoute(req,res){
     const params=req.query.slug;
    console.log(params);
    res.status(200).json(`${params}`);
}