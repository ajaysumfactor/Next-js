import Head from 'next/head'
import Image from 'next/image';
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Banner from "../components/banner"
const inter = Inter({ subsets: ['latin'] })
import Card from "../components/card"
import coffeeStoresData from '../data/coffee-stores.json';
import { fetchCoffeeStores } from '../lib/coffee-store';
import userTrackLocation from '../hooks/track-location';
import { useState, useEffect } from 'react';

export async function getStaticProps(context) {
  console.log('Hii! i am get static props and i only run on the server side  ');

  const coffeeStores = await fetchCoffeeStores();

  return {
    props: { coffeeStores, }, // will be passed to the page component as props
  };
}


export default function Home(props) {
  console.log("hii! i am a client side code here by default ")
  console.log("props", props);
  const { handleTrackLocation, latLong, locationErrorMessage, isFindingLocation } = userTrackLocation(); //destructring 



//===================================================================================================================

// console.log("latlong :->"+latLong+","+"locationErrorMessage:-> "+locationErrorMessage);
  const [coffeeStores, setCoffeStores] = useState('');
  const [coffeeStoresError, setCoffeStoresError] = useState(null);

  useEffect(() => {
    async function setCoffeeStoreByLocation() {
      if (latLong) {
        try {
          const fetchedCoffeeStores = await fetchCoffeeStores(latLong, 30);
          console.log({ fetchedCoffeeStores });
          setCoffeStores(fetchedCoffeeStores);
        }
        catch (error) {
          console.log({error});
          setCoffeStoresError(error.message);
        }
      }
    }
    setCoffeeStoreByLocation();

  }, [latLong])

//===================================================================================================================
console.log(coffeeStores);
  const handleOnBannerBtnClick = () => {
    console.log("Hi banner button");
    handleTrackLocation();
  };

  return (
    <div className={styles.container}>

      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner buttonText={isFindingLocation ? "Locating..." : "View store nearby"} handleOnClick={handleOnBannerBtnClick} />

        {locationErrorMessage && <p>Something went wrong : {locationErrorMessage}</p>}
        <div className={styles.heroImage}>
        
        {coffeeStoresError && <p>Something went wrong : {coffeeStoresError}</p>}
        <div className={styles.heroImage}></div>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>
{/* ========================================================================================================================================= */}

{coffeeStores.length > 0 && (
          <>
            <div className={styles.sectionWrapper}>
              <h2 className={styles.heading2}>Stores Near Me</h2>
              <div className={styles.cardLayout}>

                {coffeeStores.map((coffeeStore) => {
                  return (
                    <Card
                      key={coffeeStore.id}
                      name={coffeeStore.name}
                      imgUrl={coffeeStore.imgUrl || "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"}
                      href={`/coffee-store/${coffeeStore.id}`}
                      className={styles.card}
                    />);


                })}
              </div>
            </div>
          </>
        )}
{/* ========================================================================================================================================= */}
        {props.coffeeStores.length > 0 && (
          <>
            <div className={styles.sectionWrapper}>
              <h2 className={styles.heading2} style={{color: "green"}}>Toronto stores</h2>
              <div className={styles.cardLayout}>

                {props.coffeeStores.map((coffeeStore) => {
                  return (
                    <Card
                      key={coffeeStore.id}
                      name={coffeeStore.name}
                      imgUrl={coffeeStore.imgUrl || "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"}
                      href={`/coffee-store/${coffeeStore.id}`}
                      className={styles.card}
                    />);


                })}
              </div>
            </div>
          </>
        )}
      </main>

    </div>
  )
}
