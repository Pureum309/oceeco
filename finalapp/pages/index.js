import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const r = useRouter();
  
  return (


    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.grid}>
          <img 
          className={styles.mainlogo}
          src="/logo/mainlogo.png" />
        </div>

        <div>
          <div className={styles.buttonintro}>
            <p>Let's Go</p>
          </div>
          <div className={styles.buttonintro}>
            <p>Tutorial</p>
          </div>
          <div className={styles.buttonintro}>
            <p>About Us</p>
          </div>
        </div>

<Image 
  src="/imgs/logo/logotransparent.png"
  alt="Oceeco Logo"
  width={185}
  height={235}
  />
      {/* <img src="./imgs/logo/logotransparent.png" /> */}

         <button onClick={
              ()=>r.push("/mainpage")
            }>Let's Go</button>

        <button onClick={
              ()=>r.push("/tutorial")
            }>Tutorial</button>

        <button onClick={
              ()=>r.push("/aboutus")
            }>About Us</button>

     

        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}

          <a
            href="/questions"
            className={styles.card}
          >
            <h2>Questions &rarr;</h2>
            <p>
              link through question / Sarah
            </p>
            <button onClick={
              ()=>r.push("/questions")
            }>Go to question</button>
          </a>

        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}