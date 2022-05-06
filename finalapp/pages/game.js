import {useRouter} from "next/router";
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  const r = useRouter();
  
  return (

    <div className={styles.container}>
       <Head />
        
        <div className={styles.iframe}>
            <iframe src="https://cansanchez.ca/recyclinggame/" />
        </div>

    </div>
  )
}
