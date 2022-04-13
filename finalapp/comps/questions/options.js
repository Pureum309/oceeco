import styled from 'styled-components';

import { useRouter } from "next/router";
import { ChangeAnswer } from '../../data/que_content';

const OpCont = styled.div ``;

const OpQueTitle = styled.h3 ``;

const OpQueButton = styled.button ``;

export default function Options({
  q='What is your favourite food?',
  arr=[]
}){

  const r = useRouter();

  var {qnum} = r.query;

  if(qnum === undefined){
    qnum = 0;
  }
  
  return <OpCont>
    <OpQueTitle>{q}</OpQueTitle>
    {/* <OpQueButton>Orage</OpQueButton>
    <OpQueButton>Banana</OpQueButton>
    <OpQueButton>Apple</OpQueButton>
    <OpQueButton>Grape</OpQueButton> */}
    {arr.map((o,i)=><OpQueButton onClick={
      ()=>ChangeAnswer(o, qnum)
    }>{o}</OpQueButton>)}
  </OpCont>
}