import { useRouter } from "next/router";
const dynamicRouter=()=>{
    const route=useRouter();
    console.log(route);
    return <div>
        <h1>This is the dynamic route</h1>;
        <h2>Post : {route.query.dynamic}</h2>
    </div>
}
export default dynamicRouter;
