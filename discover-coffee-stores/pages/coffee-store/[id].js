import Link from 'next/link';
import Head from 'next/head';
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
    const paths=coffeeStoreData.map(CoffeeStore=>{
        return {
            params : {
                id: CoffeeStore.id.toString(),
            },
        };
    });
    return {
        paths,
        fallback : true,
    };
}







const CoffeeStore = (props) => {
    const route = useRouter();
    console.log(route);

    if(route.isFallback){
        return <div>Loading...</div>
    }

    const {address,name,neighbourhood}=props.CoffeeStore;

    console.log("props",props);
    // return <div>Coffee store page</div>
    return <div>
        <Head>
            <title>{name}</title>
        </Head>
         <Link href="/">
            Back to the home
        </Link>
         
        <p>{address}</p>
        <p>{name}</p>
        <p>{neighbourhood}</p>
        
    </div>
}
export default CoffeeStore