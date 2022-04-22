import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
    const r = useRouter();
    
    return (
  
  
      <div className={styles.container}>
  
        <main className={styles.main}>
          <div className={styles.grid}>
            <img 
            className={styles.mainlogo}
            src="imgs/logo/mainlogo.png" />
          </div>
  
          <div>
            <div className={styles.buttonintro}
            onClick={
              ()=>r.push("/mainpage")
            }>
              Let's Go
            </div>
            <div className={styles.buttonintro}
            onClick={
              ()=>r.push("/tutorial")
            }>
              Tutorial
            </div>
            <div className={styles.buttonintro}
            onClick={
              ()=>r.push("/aboutus")
            }>
              About Us
            </div>
          </div>
        </main>
      </div>
    )
  }
  