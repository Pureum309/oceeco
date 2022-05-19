import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

export default function TutorialVideo() {

    const r = useRouter();

    
    return (
    <div className={styles.about}>
      <div className={styles.main}>

        <h2 className={styles.heading}>
            Learn about Plastic Bank
        </h2>

        <div className={styles.grid}>

          <video autoPlay controls className={styles.video}>         
              <source src="/pb.mp4" type="video/mp4"/>       
          </video>

          <p className={styles.para1}>
                        Learn how Plastic Bank helps the the ocean, the economy, and the community.
          </p>
        </div>
        
        <a href="https://plasticbank.com/" target="_blank" rel="noopener noreferrer">
            <div className={styles.buttonintro}>
                Go to Plastic Bank
            </div>
        </a>

          <div className={styles.vbackbutton}>
              <button onClick={
                  ()=> history.back()
              }>Back</button>
          </div>
        
      </div>
    </div>


  )
}

