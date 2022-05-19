import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

export default function tutorial() {

    const r = useRouter();

    
    return (
    <div className={styles.about}>
      <div className={styles.main}>

        <h2 className={styles.heading}>
            Tutorials
        </h2>

        <div className={styles.grid}>

          <video autoPlay loop className={styles.video}>         
              <source src="/tutorial_quiz.mp4" type="video/mp4"/>       
          </video>

          <div className={styles.vbackbutton}>
              <button onClick={
                  ()=> history.back()
              }>Back</button>
          </div>
        </div>
      </div>
    </div>


  )
}

