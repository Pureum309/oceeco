import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import Options from '../../comps/Questions/Options';
import {GetName, qs} from "../../data/que_content";

export default function Questions() {

    const nm= GetName();
    const r = useRouter();
  
    var {qnum} = r.query;
  
    if(qnum === undefined){
      qnum = 0;
    }
  
  return (
    <div className={styles.container}>

    {/* Start from Heare Sarah */}

    <Options 
      q={qs[qnum].title}
      arr={qs[qnum].options}
    />
  
  {/* When reach last question hide the button */}
  {
    Number(qnum) < qs.length-1 &&
    <button onClick={
      ()=> r.push({
        pathname:"questions",
        query:{
          qnum:Number(qnum)+1 >= qs.length ? qs.length -1 : Number(qnum)+1
        }
      })
    }>Next</button>
  }

  {
    Number(qnum) === qs.length -1 &&
    <button onClick={
      ()=>r.push("/questions/result")
    }>Finish!!</button>
  }

      
    </div>
  )
}
