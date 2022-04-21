import styled from 'styled-components';

import { useRouter } from "next/router";




const OpCont = styled.div `
  min-height: 100vh;
  padding-top: 4em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const OpQueTitle = styled.h3 `
  font-size: 1.5em;
`;

const OpQueButton = styled.button `
  img {
    width: 70px;
    padding-left: 5px;
  }
  p {
  text-align: center;
  padding-left: 100px;
  }
  display: flex;
  align-items: center;
  width: 15em;
  height:9em;
  padding: 10px; 
  margin: 10px;

  font-size: 1.1em;
  border: none;
  border-radius: 8px;
`;

export default function Options({
  q='What is your favourite food?',
  img=[],
  desc=[],
  background=[]
}){

  const r = useRouter();

  var {qnum} = r.query;

  if(qnum === undefined){
    qnum = 0;
  }
  
  return <OpCont>
    <OpQueTitle>{q}</OpQueTitle>
    {desc.map((o,i)=><OpQueButton style={{background:background[i]}} onClick={
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