import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function AboutHeidi() {
    const r = useRouter();

    return (
    <div className={styles.about}>
        <div className={styles.container}>
        <main className={styles.main}>
        <div className={styles.grid}>
                <Image 
                    src="/imgs/about/heidi.png" 
                    alt="Heidi Nguyen"
                    width={250}
                    height={250}
                />
        </div>

        <h2 className={styles.heading}
                >Heidi</h2>
                
            <div className={styles.mainpage_content}>
                    <p className={styles.para1}>
                    Hello, This is Heidi. I'm a quiet person who frequently initiates 
                discussions with a question. I get the pleasure of doing research; 
                I spend a lot of time looking for new ideas. 
                    
                <br></br><br></br>
                My role in the team is to provide assistance to the other members.
                </p>

                <div className={styles.backbutton}>
                        <button onClick={
                            () => history.back()
                        }>Back</button>
                    </div>
                    
        </div>
        </main> 
        </div>
    </div>
    





    )
}

