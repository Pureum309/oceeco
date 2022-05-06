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
          src="./../../imgs/results/learnmore_childrens.png" />
        </div>

        <div>
          <div className={styles.buttonlink}>
            <a href="https://cansanchez.ca/bimostory/">Check out Bimo's Story</a>
          </div>
          <div className={styles.buttonlink}>
            <a href="https://cansanchez.ca/recyclinggame/">Play Recycling Game</a>
          </div>
          <div className={styles.buttonlink}>
           <a href="https://plasticbank.com/">Visit Plastic Bank</a>
          </div>
          <div className={styles.backbutton}>
                        <button onClick={
                        ()=> history.back()
                        }>Back</button>
          </div>
        </div>
      </main>
    </div>
  )
}
