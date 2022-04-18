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
                    src="/imgs/about/about__kc_jellyfish.png" 
                    alt="KC Jellyfish"
                    width={100}
                    height={100}
                />
            </div>    

            <div className={styles.gridab}>
                <h2>Sarah</h2>
            </div>   

            <div className={styles.gridab}>
                Hi, I am Sarah. I have the ability to evaluate situations and make decisions 
                and time management that support the goals of the team. 
                    
                <br></br><br></br>
                I usually play role in planning, polishing and procedures.  

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