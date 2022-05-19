import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function AboutSarah() {
    const r = useRouter();

    return (
    <div className={styles.about}>
        <div className={styles.container}>
        <main className={styles.main}>
        <div className={styles.grid}>
                <Image 
                    src="/imgs/about/sarah.png" 
                    alt="Can Sanchez"
                    width={250}
                    height={250}
                />
        </div>

        <h2 className={styles.heading}
                >Sarah</h2>
                
            <div className={styles.mainpage_content}>
                    <p className={styles.para1}>
                    Hi, I am Sarah. I have the ability to evaluate situations and make decisions 
                and time management that support the goals of the team. 
                    
                <br></br><br></br>
                I usually play role in planning, polishing and procedures.  

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
