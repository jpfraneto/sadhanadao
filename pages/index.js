import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sadhana DAO | Do The Work</title>
        <meta
          name='description'
          content='It is time to get out of the void of depression, and realize who you truly are.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>Sadhana DAO</h1>
        <p>
          This is a place for Doing The Work. The next transformational journey
          will start the 6th of January.
        </p>
        <p>It is time to wake up. </p>
      </main>
    </div>
  );
}
