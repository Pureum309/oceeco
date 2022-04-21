import styled from 'styled-components';

import { useRouter } from "next/router";




const OpCont = styled.div `
    min-height: 100vh;
    padding-top: 5em;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const OpQueTitle = styled.h3 ``;

const OpQueButton = styled.button `
    img {
      width: 80px;
    }
    height: 10em;
    width: 20em;
    margin: 20px;
    text-align: center;
    vertical-align: middle;
    line-height: 40px; 
    text-align: center;
    background-color: #CAEBFC;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgb(173, 173, 173);
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