import Link from 'next/link';
import { useRouter } from 'next/router';
import coffeeStoreData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps) {
    const params = staticProps.params;
    console.log(params);
    return {
        props: {
            CoffeeStore: coffeeStoreData.find(CoffeeStore => {
                return CoffeeStore.id === 0;
            }),
        },
    };
}


export function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } }
        ]
    };
}







const CoffeeStore = () => {
    const route = useRouter();
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