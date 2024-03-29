import styled from 'styled-components';
import { ChangeAnswer, qs } from '../../data/que_content';
import { useRouter } from "next/router";




const OpCont = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

`;

const OpImage = styled.div `
 img {
  width: 150px;
 } 
 padding-top: 1em;
 padding-bottom: 2em;
`;

const OpQueTitle = styled.h3 `
  font-size: 1.5em;
  text-align: center;
  padding-bottom: 2em;
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

  cursor:pointer;
`;


export default function Options({
  q='What is your favourite food?',
  n=" - Step 1",
  bar="./imgs/progressbar/prog_1.png",
  img=[],
  desc=[],
  background=[],
  leave=[],
  enter=[]
}){

  const r = useRouter();

  var {qnum} = r.query;

  if(qnum === undefined){
    qnum = 0;
  }

  // function nextToFinish({
  //   if (qnum < qs) {
  //     r.push({
  //       pathname:"questions",
  //       query:{
  //         qnum:Number(qnum)+1 >= qs.
  //         length ? qs.length-1 : Number(qnum)+1
  //       }
  //     })
  //   }
  // })
  //hover effect
  const handleMouseEnter = e => {
    e.target.style.background = e.target.dataset.hoverEnter
    e.target.style.color = "#1F1F1F"
    e.target.style.fontWeight= "bold"
    e.target.style.boxShadow = "5px 5px 5px lightgrey"
  }

  const handleMouseLeave = e => {
    e.target.style.background = e.target.dataset.hoverLeave
    e.target.style.color = "black"
    e.target.style.fontWeight= "normal"
    e.target.style.boxShadow = "none"
    
  } 
  
  return <OpCont>
    <OpImage><img src={bar} /></OpImage>
    <OpQueTitle>{q}</OpQueTitle>
    {desc.map((o,i)=><OpQueButton 
      style={{background:background[i]}}
      data-hover-enter={enter[i]}
      data-hover-leave={leave[i]} 
      onClick={()=> 
        [r.push({
            pathname:"questions",
            query:{
            qnum:Number(qnum)+1 >= qs.
            length ? qs.length-1 : Number(qnum)+1,
            opt: Number(i)
            }
          }),
          Number(qnum) === qs.length-1 && r.push("/questions/results"),
          , ChangeAnswer(o, qnum)]
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ><img src={img[i]} /><p>{o}</p></OpQueButton>)}
  </OpCont>
}


// ()=> [r.push({
//   pathname:"questions",
//   query:{
//     qnum :Number(qnum) + 1,
//     opt: Number(i),
//   }
// }), ChangeAnswer(o, qnum) ]