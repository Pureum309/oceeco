import styles from '../../styles/Home.module.css';
import { GetAnswer, GetName } from "../../data/que_content";

export default function Qresults(){

    const an = GetAnswer();
    const nm = GetName();

    return <div className={styles.container}>
    <div className={styles.main}>

        
    <div className={styles.grid}>
                 
    {
        an[1] === "Clown Fish" && 
        <img className={styles.mainlogo} src="./../../imgs/results/result__bottle_nemo.png" />
    }
    {
        an[0] === "Good" && 
        <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/12/30151747/Pembroke-Welsh-Corgi-smiling-and-happy-outdoors.jpeg
        " />
    }
    {
        an[0] === "Great" && 
        <img src= {result1}/>
    }
 </div>
<h3 className={styles.heading}>{an[2]} pokes the insides of {an[1]+"'s"} stomach</h3>
    <div>
    Swallowing plastics like {an[2]} caps can hurt the clownfish by poking some of their internal organs and not allow them to breathe.
        {/* I see that you are doing {an[0]} and feeling {an[1]}.
        That's why you are planning to {an[2]}. */}
    </div>

    <div className={styles.buttonintro}
          onClick={
            ()=>r.push("/mainpage")
          }>
            Learn How to Help
          </div>
    </div>
    </div>
}