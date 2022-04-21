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
    // img {
    //   width: 60px;
    // }
    // p {
    //   text-align: center;

    // }
    // height: 10em;
    // width: 20em;
    // margin: 20px;
    // text-align: center;
    // vertical-align: middle;
    // line-height: 40px; 
    // text-align: center;
    // background-color: #CAEBFC;
    // border: none;
    // border-radius: 8px;
    // box-shadow: 0px 2px 4px rgb(173, 173, 173);

    img {
      width: 60px;
      padding-left: 5px;
    }

    font-size: 1.10em;
    display: flex;
    align-items: center;
    width: 20em;
    height: 8em;
    padding: 10px; 
    margin: 10px;
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