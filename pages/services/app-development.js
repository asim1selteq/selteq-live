import Head from 'next/head'
import styles from "../../styles/index.module.css";
import Banner from '../../Components/Appdev/Banner';
import Solutions from '../../Components/Appdev/Solutions';
import Process from '../../Components/Appdev/Process';
import Digital from '../../Components/Appdev/Digital';
import Newheader from '@/Components/Newheader/Newheader';
import Newfooter from '@/Components/Newfooter/Newfooter';
import Businessdev from '@/Components/Appdev/Businessdev';

const Software = () => {
  return (
    <>
      <Head>
        <title>Custom Mobile App Development Services | Selteq</title>
        <meta name="description" content="Want to develop a mobile app that stands out from the competition? Selteq's app development services provide tailor-made solutions for your business requirements." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon icon  */}
        <link rel="icon" href="/favicon.ico" />
        {/* bootstrap v4.0.0 cdn  */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        {/* fontasome V5 cdn  */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
      </Head>
      <main className={styles.main_height}>
        {/* <Header /> */}
        <Newheader />
        <Banner />
        <Solutions />
        <Process />
        <Digital />
        <Businessdev />
        <Newfooter />
      </main>
    </>
  )
}

export default Software
