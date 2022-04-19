import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function aboutUs() {

    const r = useRouter();

    
    return (
    <div className={styles.about}>
      <div className={styles.container}>

        <div className={styles.gridab}>
            <Head>About Us</Head>
        </div>     
       

        <div className="aboutus_content">
        <div className={styles.grid}>
            
        </div>

            <div className={styles.gridcontainer}>
                <div className={styles.box}>
                    <button onClick={
                    ()=>r.push("/can")
                    }>
                        <Image 
                            src="/imgs/about/about__can_seahorse.png" 
                            alt="Can Seahorse"
                            width={100}
                            height={100}
                        />
                    </button>

                    <button onClick={
                    ()=>r.push("/sarah")
                    }>
                        <Image 
                            src="/imgs/about/about__sarah_whale.png" 
                            alt="Sarah Whale"
                            width={100}
                            height={100}
                        />
                    </button>

                </div>
            </div>


            <div className={styles.gridcontainer}>
                <div className={styles.box}>
                    <button onClick={
                    ()=>r.push("/kc")
                    }>
                        <Image 
                            src="/imgs/about/about__kc_jellyfish.png" 
                            alt="KC Jellyfish"
                            width={100}
                            height={100}
                        />
                    </button>

                    <button onClick={
                    ()=>r.push("/heidi")
                    }>
                        <Image 
                            src="/imgs/about/about__heidi_nemo.png" 
                            alt="Heidi Clownfish"
                            width={100}
                            height={100}
                        />
                    </button>
                </div>
            </div>

            
       
    </div>


      </div>
    
    </div>
  )
}