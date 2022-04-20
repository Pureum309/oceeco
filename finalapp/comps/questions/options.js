import styled from 'styled-components';

import { useRouter } from "next/router";
import { ChangeAnswer } from '../../data/que_content';



const OpCont = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const OpQueTitle = styled.h3 ``;

const OpQueButton = styled.div `
    img {
        width: 60px;
        padding-left: 5px;
    }
    p {
      text-align: center;
      padding-left: 20px;
    }
    display: flex;
    align-items: center;
    width: 250px;
    height:80px;
    padding: 10px; 
    margin: 10px;
    border-radius: 8px;
`;

export default function Options({
  q='What is your favourite food?',
  arr=[],
  img=[],
  background=[]
}){

  const r = useRouter();

  var {qnum} = r.query;

  if(qnum === undefined){
    qnum = 0;
  }
  
  return <OpCont>
    <OpQueTitle>{q}</OpQueTitle>
    {arr.map((o,i)=><OpQueButton style={{background:background[i]}} onClick={
      ()=>ChangeAnswer(o, qnum)
    }><img src={img[i]} /><p>{o}</p></OpQueButton>)}
  </OpCont>
}