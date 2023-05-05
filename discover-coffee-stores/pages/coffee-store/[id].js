import Link from 'next/link';
import { useRouter } from 'next/router';
import coffeeStoreData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps) {
    const params = staticProps.params;
    console.log("params",params);
    return {
        props: {
            CoffeeStore: coffeeStoreData.find(CoffeeStore => {
                return CoffeeStore.id.toString() === params.id;
            }),
        },
    };
}


export function getStaticPaths() {
    return {
        paths: [
            { params: { id: '0' } },
            { params: { id: '1' } }
        ],
        fallback : false,
    };
}







const CoffeeStore = (props) => {
    const route = useRouter();
    console.log(route);
    console.log("props",props);
    // return <div>Coffee store page</div>
    return <div>
        <p>Post : {route.query.id}</p>
        <Link href="/">
            Back to the home
        </Link>
        <Link href="/coffee-store/dynamic">
            Go to s page dynamic
        </Link>
        <p>{props.CoffeeStore.address}</p>
        <p>{props.CoffeeStore.name}</p>
        
    </div>
}
export default CoffeeStore