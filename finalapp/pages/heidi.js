import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function aboutCan() {
    const r = useRouter();

    return (
    <div className={styles.about}>
        <div className={styles.container}>
            <div className={styles.grid}>
                <Image 
                    src="/imgs/about/about__heidi_nemo.png" 
                    alt="Heidi Clownfish"
                    width={100}
                    height={100}
                />
            </div>    

            <div className={styles.gridab}>
                <h2>Heidi</h2>
            </div>      

            <div className={styles.gridab}>
                Hello, This is Heidi. I'm a quiet person who frequently initiates 
                discussions with a question. I get the pleasure of doing research; 
                I spend a lot of time looking for new ideas. 
                    
                <br></br><br></br>
                My role in the team is to provide assistance to the other members.

            <div className={styles.grid}>
                <button onClick={
                ()=>r.push("/aboutus")
                }>Go Back</button>
            </div>
        </div> 
    </div>
    </div>
    





    )
}