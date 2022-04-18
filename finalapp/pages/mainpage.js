import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function mainpage() {

    const r = useRouter();
    
    return (
      <div className={styles.container}>
         <div className={styles.grid}>
            <h2>How Plastics Affect The Ocean</h2>
        </div>     
       

        <div classname="mainpage_content">
            We love ice cream cups and ballons, but did you know that
            if we don't throw them away properly that it can hurt our 
            ocean and the animal in it?
            <br></br>
            <br></br>
            Learn what different plastics can do to our friends under
            the sea.

            <div className={styles.grid}>
                <button onClick={
                ()=>r.push("/questions")
                }>Let's Learn</button>
            </div>
            
       
    </div>

      



      </div>
  )
}