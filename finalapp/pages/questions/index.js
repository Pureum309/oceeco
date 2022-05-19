import {useRouter} from "next/router";
import styles from '../../styles/Home.module.css';

import Options from '../../comps/Questions/options';
import {GetName, qs} from "../../data/que_content";



export default function Questions() {

    const nm= GetName();
    const r = useRouter();
  
    var {qnum} = r.query;
    var {opt} = r.query;
  
    if (qnum === undefined) {
      qnum = 0;
    }
    if (qnum < 0) {
      qnum = 0;
    }
    if (qnum >= qs.length) {
      qnum = qs.length - 1;
    }

    if (opt === undefined) {
      opt = 0;
    }
    if (opt < 0) {
      opt = 0;
    }
    if (opt >= qs[qnum].options.length) {
      opt = qs[qnum].options.length - 1;
    }
  
  return (
    <div className={styles.container}>
      <div className={styles.main}>

      {/* Start from Heare Sarah */}
        <Options
          q={qs[qnum].title}
          bar={qs[qnum].progress}
          img={qs[qnum].options[opt].pics}
          desc={qs[qnum].options[opt].txts}
          background={qs[qnum].background}
          enter={qs[qnum].enter}
          leave={qs[qnum].leave}
        />
    
      <div className={styles.backbutton}>
        {
          Number(qnum, opt) < qs.length &&
          <button onClick={
            ()=> history.back()
          }>Back</button>
        }
      </div>


    
        
      </div>
    </div>
  )
}
