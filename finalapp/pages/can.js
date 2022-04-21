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
                    src="/imgs/about/about__can_seahorse.png" 
                    alt="Can Seahorse"
                    width={100}
                    height={100}
                />
            </div>    

            <div className={styles.gridab}>
                <h2>Can</h2>
            </div>    

            <div className={styles.gridab}>
                Hi, Can here. I am a glass half-full kind of person and 
                that is why I always shoot for the stars. Although, I also 
                like to prepare to land on the moon as a plan B. 
                
                <br></br><br></br>
                My role in the team is often the devil's advocate, I also help in coding 
                and some design aspects.

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