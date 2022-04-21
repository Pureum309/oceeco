import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function mainpage() {

    const r = useRouter();
    
    return (
      <div className={styles.container}>
          <main className={styles.main}>

            <h2 className={styles.heading}
            >How Plastics Affect The Ocean</h2>

        <div className={styles.mainpage_content}>
            <p>
                We love ice cream cups and ballons, but did you know that
                if we don't throw them away properly that it can hurt our 
                ocean and the animals in it?
                <br></br>
                <br></br>
                Learn what different plastics can do to our friends under
                the sea.
            </p>
            
        </div>
        <div className={styles.grid}>
                <div className={styles.buttonintro}
                    onClick={
                    ()=>r.push("/questions")
                    }>Let's Learn
                </div>
            </div>
        </main>
    </div>
  )
}