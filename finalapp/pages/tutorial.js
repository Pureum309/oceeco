import {useRouter} from "next/router";
import styles from '../styles/Home.module.css'

export default function tutorial() {

    const r = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <h2>Tutorial</h2>
            </div>    
        </div>
    )

}