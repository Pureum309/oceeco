import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function AboutUs() {

    const r = useRouter();

    
    return (
    <div className={styles.about}>
      <div className={styles.main}>

        <h2 className={styles.heading}>
            About Us
        </h2>

        <div className={styles.grid}>
            <div className={styles.aboutbox}
            onClick={
            ()=>r.push("/can")
            }>
                <Image 
                    src="/imgs/about/about__can_seahorse.png" 
                    alt="Can Seahorse"
                    width={100}
                    height={100}
                />
                <h3 className={styles.aboutname}>Can</h3>
                <span className={styles.shadowx}></span>
            </div>

            <div className={styles.aboutbox}
            onClick={
            ()=>r.push("/sarah")
            }>
                <Image
                    src="/imgs/about/about__sarah_whale.png" 
                    alt="Sarah Whale"
                    width={100}
                    height={100}
                />
                <h3 className={styles.aboutname}>Sarah</h3>
                <span className={styles.shadowx}></span>
            </div>

            <div className={styles.aboutbox}
            onClick={
            ()=>r.push("/kc")
            }>
                <Image 
                    src="/imgs/about/about__kc_jellyfish.png" 
                    alt="KC Jellyfish"
                    width={100}
                    height={100}
                />
                <h3 className={styles.aboutname}>Kaycee</h3>
                <span className={styles.shadowx}></span>
            </div>

            <div className={styles.aboutbox} 
            onClick={
            ()=>r.push("/heidi")
            }>
                <Image 
                    src="/imgs/about/about__heidi_nemo.png" 
                    alt="Heidi Clownfish"
                    width={100}
                    height={100}
                />
                <h3 className={styles.aboutname}>Heidi</h3>
                <span className={styles.shadowx}></span>
            </div>

            <div className={styles.backbutton}>
                <button onClick={
                    ()=> history.back()
                }>Back</button>
            </div>
        </div>
    </div>
    </div>

  )
}

