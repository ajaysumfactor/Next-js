import Link from 'next/link';
import styles from '../../styles/coffee-store.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import coffeeStoreData from '../../data/coffee-stores.json';
import Image from 'next/image';
import { fetchCoffeeStores } from '../../lib/coffee-store.js';
import cls from "classnames";
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../Store/store-context';
import useSWR from 'swr';
import { fetcher, isEmpty } from '../../utils/';
export async function getStaticPaths() {
    const coffeeStores = await fetchCoffeeStores();
    const paths = coffeeStores.map(CoffeeStore => {
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





export async function getStaticProps(staticProps) {
    const params = staticProps.params;

    const coffeeStores = await fetchCoffeeStores();
    const findCoffeeStoreById = coffeeStores.find(CoffeeStore => {
        return CoffeeStore.id.toString() === params.id;
    });
    return {
        props: {
            coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {},
        },
    };
}


const CoffeeStore = (initialprops) => {
    const route = useRouter();

    const id = route.query.id;

    const [coffeeStore, setCoffeStore] = useState(initialprops.coffeeStore || {});
    const [votingCount, setVotingCount] = useState(0);


    const { state: { coffeeStores }, } = useContext(StoreContext);

    const handleCreateCoffeeStore = async (coffeeStore) => {
        try {
            const { id, name, voting, imgUrl, neighborhood, address } = coffeeStore;

            const response = await fetch("/api/createCoffeeStore", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    name,
                    voting: 0,
                    imgUrl,
                    neighborhood: neighborhood || "",
                    address: address || "",
                }),
            });
            const dbCoffeeStore = await response.json();
        } catch (error) {
            console.error("Error creating coffee store", error);
        }

    };

    useEffect(() => {
        if (isEmpty(initialprops.coffeeStore)) {
            if (coffeeStores.length > 0) {
                const findCoffeeStoreById = coffeeStores.find((CoffeeStore) => {
                    return CoffeeStore.id.toString() === id;
                });
                if (findCoffeeStoreById) {
                    setCoffeStore(findCoffeeStoreById);
                    handleCreateCoffeeStore(findCoffeeStoreById);
                }

            }
        }
        else {
            handleCreateCoffeeStore(initialprops.coffeeStore);
        }

    }, [id, initialprops, coffeeStores, initialprops.coffeeStore]);

    const { data, error } = useSWR(`/api/getCoffeeStoreById?id=${id}`, fetcher);
    useEffect(() => {
        if (data && data.length > 0) {
            setCoffeStore(data[0]);
            setVotingCount(data[0].voting);
        }
    }, [data])

    if (route.isFallback) {
        return <div>Loading...</div>
    }






    const { address = "", neighborhood = "", name = "", imgUrl = "" } = coffeeStore;
    //==================================================================================================================
    //Here get the data from the id of dynamic page render voting value from the data extrating from database


    if (route.isFallback) {
        return <div>Loading...</div>
    }

    const handleUpvoteButton = async () => {
        try {

            const response = await fetch("/api/favouriteCoffeeStoreById", {
                method: "PUT", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                }),
            });
            const dbCoffeeStore = await response.json();
            if (dbCoffeeStore && dbCoffeeStore.length > 0) {
                const count = votingCount + 1;
                setVotingCount(count);
            }
        } catch (error) {
            console.error("Error creating coffee store", error);
        }


    };
    if (error) {
        return <div>Something went wrong retrieving coffee store page</div>;
    }
    //=======================================================================================================================    
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
                        src={
                            imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                        }
                        width={600}
                        height={360}
                        className={styles.storeImg}
                        alt={name}
                    ></Image>



                </div>


                <div className={styles.col2}>
                    <div className={cls("glass", styles.col2)}>
                        {address && (
                            <div className={styles.iconWrapper}>
                                <Image src="/static/icons/places.svg" width="24" height="24" alt="places icon" />
                                <p className={styles.text}>{address}</p>
                            </div>
                        )}
                        {neighborhood && (
                            <div className={styles.iconWrapper}>
                                <Image src="/static/icons/nearMe.svg" width="24" height="24" alt="near me icon" />
                                <p className={styles.text}>{neighborhood}</p>
                            </div>
                        )}
                        <div className={styles.iconWrapper}>
                            <Image src="/static/icons/star.svg" width="24" height="24" alt="rate icon" />
                            <p className={styles.text}>{votingCount}</p>
                        </div>

                        <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
                            Up vote!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CoffeeStore