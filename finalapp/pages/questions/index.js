import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
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
          img={qs[qnum].options[opt].pics}
          desc={qs[qnum].options[opt].txts}
          background={qs[qnum].background}
        />
    
    {/* When reach last question hide the button */}
    {/* {
      Number(qnum) < qs.length-1 &&
      <button onClick={
        ()=> r.push({
          pathname:"questions",
          query:{
            qnum:Number(qnum)+1 >= qs.length ? qs.length -1 : Number(qnum)+1,
          }
        })
      }>Next</button>
    } */}

    <Options 
      q={qs[qnum].title}
      img={qs[qnum].pics}
      arr={qs[qnum].options}
      background={qs[qnum].background}
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
    </div>
  )
}
