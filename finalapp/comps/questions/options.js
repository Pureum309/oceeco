import styled from 'styled-components';
import { ChangeAnswer } from '../../data/que_content';
import { useRouter } from "next/router";




const OpCont = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const OpQueTitle = styled.h3 `
  font-size: 1.5em;
  text-align: center;
`;

const OpQueButton = styled.button `
img {
  height: 60px;
  padding-left: 5px;
}
p {
text-align: center;
padding-left: 1em;
font-size: 1.5em;
}
display: flex;
align-items: center;
width: 250px;
height:80px;
padding: 10px; 
margin: 10px;
border-radius: 8px;
border: none;
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
      ()=> [r.push({
        pathname:"questions",
        query:{
          qnum :Number(qnum) + 1,
          opt: Number(i),
        }
      }), ChangeAnswer(o, qnum) ]
    }><img src={img[i]} /><p>{o}</p></OpQueButton>)}
  </OpCont>
}
