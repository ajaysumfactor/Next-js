import { useRouter } from "next/router";
import Head from "next/head";
const dynamicRouter=()=>{
    const route=useRouter();
    console.log(route);
    return <div>
        <Head>
            <title>
                {route.query.dynamic}
            </title>
        </Head>
        <h1>This is the dynamic route</h1>;
        <h2>Post : {route.query.dynamic}</h2>
    </div>
}
export default dynamicRouter;
