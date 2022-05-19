import {useRouter} from "next/router";
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function GameRecycle() {
  const r = useRouter();
  
  function refreshPage() {
    window.location.reload(false);
  }

  return (

    <div className={styles.container}>
       <Head />
       <h2 className={styles.heading}
                >Enjoy the recycling game</h2>
        <div className={styles.iframe}>
            <iframe src="https://cansanchez.ca/recyclinggame/" />
        </div>
            
        <div className={styles.backbutton_1}>
            <div className={styles.again}>
                <button
                    onClick={refreshPage}>Play Again</button>
            </div>
            <button onClick={
                () => history.back()
            }>Back</button>
        </div>

    </div>
  )
}
