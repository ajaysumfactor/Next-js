import Link from 'next/link';
import { useRouter } from 'next/router'
const CoffeeStore=()=>{
    const route=useRouter();
    console.log(route);
    // return <div>Coffee store page</div>
    return <div>
        <p>Post : {route.query.id}</p> 
        <Link href="/">
            Back to the home
        </Link>
        <Link href="/coffee-store/dynamic">
            Go to s page dynamic 
        </Link>
    </div>
}
export default CoffeeStore