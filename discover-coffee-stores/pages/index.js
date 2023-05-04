import Head from 'next/head'
import Image from 'next/image';
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Banner from "../components/banner"
const inter = Inter({ subsets: ['latin'] })
import Card from "../components/card"
import coffeeStoresData from '../data/coffee-stores.json'

export async function getStaticProps(context) {
  console.log('Hii! i am get static props and i only run on the server side  ');
  return {
    props: { coffeeStores: coffeeStoresData }, // will be passed to the page component as props
  };
}











export default function Home(props) {
  console.log("hii! i am a client side code here by default ")
  console.log("props", props);

  const handleOnBannerBtnClick = () => {
    console.log("Hi banner button");
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
        <Banner buttonText="View store nearby" handleOnClick={handleOnBannerBtnClick} />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>



        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto stores</h2>
            <div className={styles.cardLayout}>

              {props.coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    imgUrl={coffeeStore.imgUrl}
                    href={`/coffee-store/${coffeeStore.id}`}
                    className={styles.card}
                  />);

              })}
            </div>
          </>
        )}
      </main>

    </div>
  )
}
