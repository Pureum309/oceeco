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

            <div className={styles.grid}>
                <img 
                className={styles.animatedwastes}
                src="./imgs/waste/balloon-dog.png" />
            </div>

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
                    <div className={styles.buttonlink}
                        onClick={
                            () => r.push("/questions")
                        }>Let's take a Quiz
                    </div>

                    <div className={styles.buttonlink}
                        onClick={
                            () => r.push("/bimo")
                        }>
                        Check out Bimo's Story
                    </div>
                    <div className={styles.buttonlink}
                        onClick={
                            () => r.push("/game")
                        }>
                        Play Recycling Game
                    </div>
                    <div className={styles.buttonlink}>
                        <a href="https://plasticbank.com/" target="_blank">Visit Plastic Bank</a>
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