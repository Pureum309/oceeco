import styled from 'styled-components';

import { useRouter } from "next/router";
import { ChangeAnswer } from '../../data/que_content';



const OpCont = styled.div `
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const OpQueTitle = styled.h3 ``;

const OpQueButton = styled.button `
    img {
        width: 100px;
    }
    padding: 50px;
    text-align: center;
    margin: 10px;
`;

export default function Options({
  q='What is your favourite food?',
  img=[],
  desc=[]
}){

  const r = useRouter();

  var {qnum} = r.query;

  if(qnum === undefined){
    qnum = 0;
  }
  
  return <OpCont>
    <OpQueTitle>{q}</OpQueTitle>
    {desc.map((o,i)=><OpQueButton onClick={
      ()=> r.push({
        pathname:"questions",
        query:{
          qnum :Number(qnum) + 1,
          opt: Number(i),
        }
      })
    }><img src={img[i]} />{o}</OpQueButton>)}
  </OpCont>
}