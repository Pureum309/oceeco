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
                <h2>KCWIN</h2>
            </div>      

            <div className={styles.gridab}>
                This is KCWIN - a Saigon-based graphic designer who has been 
                in a complex-long-term relationship with deadlines and coffee. 
                I'm confident in spending days finding inspiration and writing messy codes.
                    
                <br></br><br></br>
                Aside from designing graphics, my role as an exemplary teammate is also not to ruin others' codes.

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