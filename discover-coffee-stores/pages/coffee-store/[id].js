import { useRouter } from 'next/router'
const CoffeeStore=()=>{
    const route=useRouter();
    console.log(route);
    // return <div>Coffee store page</div>
    return <div>
        <p>Post : {route.query.id}</p>
    </div>
}
export default CoffeeStore