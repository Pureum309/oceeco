import { useRouter } from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function MainPage() {
    
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
                        if we don&apos;t throw them away properly that it can hurt our
                        ocean and the animals in it?
                        <br></br>
                        <br></br>
                        Learn what different plastics can do to our friends under
                        the sea.
                    </p>
                </div>
                
                <div className={styles.grid}>
                    <div className={styles.mainpagebuttonlink}
                        onClick={
                            () => r.push("/questions")
                        }>
                    <img 
                    className={styles.animatedbuttons}
                    src="./imgs/buttons/quiz.png" />
                        <p className={styles.parabuttons}>Find out how plastics affect the animals in the ocean.</p>
                        Let&apos;s take a Quiz
                    </div>

                    <div className={styles.mainpagebuttonlink}
                        onClick={
                            () => r.push("/bimo")
                        }>
                    <img 
                        className={styles.animatedbuttons}
                        src="./imgs/buttons/bimostory.png" />
                        <p className={styles.parabuttons}>Help Bimo clean the ocean and save their friends!</p>
                        Check out Bimo&apos;s Story
                    </div>
                    <div className={styles.mainpagebuttonlink}
                        onClick={
                            () => r.push("/game")
                        }>
                        <img 
                            className={styles.animatedbuttons}
                            src="./imgs/buttons/game.png" />
                            <p className={styles.parabuttons}>Collect the plastics in the ocean and recycle them. Try to beat your highest score!</p>
                        Play Recycling Game
                    </div>
                    <div className={styles.mainpagebuttonlink}
                    onClick={
                        () => r.push("/pb")}>
                        {/* <a href="https://plasticbank.com/" target="_blank"> */}
                        <img 
                            className={styles.animatedbuttons}
                            src="./imgs/buttons/plasticbank.png" />
                            <p className={styles.parabuttons}>Become an ocean steward.</p>
                            Visit Plastic Bank
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