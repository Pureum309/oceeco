import { useRouter } from "next/router";
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
                    <p className={styles.para1}>
                        We love ice cream cups and balloons, but did you know that
                        if we don't throw them away properly that it can hurt our
                        ocean and the animals in it?
                        <br></br>
                        <br></br>
                        Learn what different plastics can do to our friends under
                        the sea.
                    </p>
                </div>

                <div className={styles.grid}>
                    <img
                        className={styles.mainlogo}
                        src="./imgs/logo/mainlogo.png" />
                </div>
                
                <div>
                    <h2 className={styles.heading}
                    >What is Oceeco?</h2>
                    <p className={styles.para1}>Worldwide, one million plastic bottles are bought every minute and a whopping 
                    2 million plastic bags are used every minute. Meet our sustainability educational app</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.buttonintro}
                        onClick={
                            () => r.push("/questions")
                        }>Let's take a Quiz
                    </div>

                    <div className={styles.buttonintro}>
                        <a href="https://cansanchez.ca/bimostory/">Check out Bimo's Story</a>
                    </div>
                    <div className={styles.buttonintro}>
                        <a href="https://cansanchez.ca/recyclinggame/">Play Recycling Game</a>
                    </div>
                    <div className={styles.buttonintro}>
                        <a href="https://plasticbank.com/">Visit Plastic Bank</a>
                    </div>

                    <div className={styles.backbutton}>
                        <button onClick={
                            () => history.back()
                        }>Back</button>
                    </div>

                </div>
            </main>
        </div>
    )
}