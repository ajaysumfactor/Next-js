import Link from 'next/link';
import styles from '../../styles/coffee-store.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import coffeeStoreData from '../../data/coffee-stores.json';
import Image from 'next/image';
export function getStaticProps(staticProps) {
    const params = staticProps.params;
    console.log("params", params);
    return {
        props: {
            CoffeeStore: coffeeStoreData.find(CoffeeStore => {
                return CoffeeStore.id.toString() === params.id;
            }),
        },
    };
}


export function getStaticPaths() {
    const paths = coffeeStoreData.map(CoffeeStore => {
        return {
            params: {
                id: CoffeeStore.id.toString(),
            },
        };
    });
    return {
        paths,
        fallback: true,
    };
}







const CoffeeStore = (props) => {
    const route = useRouter();
    console.log(route);

    if (route.isFallback) {
        return <div>Loading...</div>
    }

    const { address, name, neighbourhood, imgUrl } = props.CoffeeStore;

    // console.log("props",props);
    // return <div>Coffee store page</div>
    return (
            <div className={styles.layout}>
                <Head>
                    <title>{name}</title>
                </Head>



                <div className={styles.container}>

                    <div className={styles.col1}>
                        <div className={styles.backToHomeLink}>
                            <Link href="/">
                                Back to the home
                            </Link>
                        </div>
                        <div className={styles.nameWrapper}>
                            <h1 className={styles.name}>{name}</h1>
                        </div>

                        <Image
                            src={imgUrl}
                            width={600}
                            height={360}
                            className={styles.storeImg}
                            alt={name}
                        ></Image>



                    </div>
                    <div className={styles.col2}>
                        <p>{address}</p>
                        <p>{neighbourhood}</p>
                    </div>
                </div>
            </div>
    );
};
export default CoffeeStore