import {useRouter} from "next/router";
import styles from '../styles/Home.module.css'

export default function tutorial() {

    const r = useRouter();

    return (
        <div className={styles.container}>
            <main className={styles.main}>
  
           <div className={styles.grid}>
              <h2>Tutorial</h2>
          </div>     
         
  
          <div classname="mainpage_content">
              
  
              <div className={styles.grid}>
                  <button onClick={
                  ()=>r.push("/tutorial")
                  }>Next</button>
              </div>
          </div>
  
        
  
  
          </main>
      </div>
    )
}