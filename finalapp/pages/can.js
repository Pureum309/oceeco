import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function AboutCan() {
    const r = useRouter();

    return (
    <div className={styles.about}>
        <div className={styles.container}>
        <main className={styles.main}>
        <div className={styles.grid}>
                <Image 
                    src="/imgs/about/can.png" 
                    alt="Can Sanchez"
                    width={250}
                    height={250}
                />
        </div>

        <h2 className={styles.heading}
                >Can</h2>
                
            <div className={styles.mainpage_content}>
                    <p className={styles.para1}>
                Hi, Can here. I am a glass half-full kind of person and 
                that is why I always shoot for the stars. Although, I also 
                like to prepare to land on the moon as a plan B. 
                
                <br></br><br></br>
                My role in the team is often the devil's advocate. I contribute in both coding 
                and design aspects.
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