import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function AboutKaycee() {
    const r = useRouter();

    return (
    <div className={styles.about}>
        <div className={styles.container}>
        <main className={styles.main}>
        <div className={styles.grid}>
                <Image 
                    src="/imgs/about/kc1.png" 
                    alt="KC Jellyfish"
                    width={250}
                    height={250}
                />
        </div>

        <h2 className={styles.heading}
                >KCWIN</h2>
                
            <div className={styles.mainpage_content}>
                    <p className={styles.para1}>
                This is KCWIN - a Saigon-based graphic designer who has been 
                in a complex-long-term relationship with deadlines and coffee. 
                I&apos;m confident in spending days finding inspiration and writing messy codes.
                    
                <br></br><br></br>
                Aside from designing graphics, my role as an exemplary teammate is also not to ruin others&apos; codes.

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

