import {useRouter} from "next/router";
import styles from '../styles/Home.module.css';
import $ from 'jquery';
import Head from 'next/head';
export default function tutorial() {
    const r = useRouter();
    if (process.browser) {
        var aScript = document.createElement('script');
        aScript.type = 'text/javascript';
        aScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        document.head.appendChild(aScript);
        aScript.onload = () => {
            $(document).ready(function(){
                $("#divs div").each(function(e) {
                    if (e != 0)
                        $(this).hide();
                });
                $("#next").click(function(){
                    if ($("#divs div:visible").next().length != 0)
                        $("#divs div:visible").next().show().prev().hide();
                    else {
                        $("#divs div:visible").hide();
                        $("#divs div:first").show();
                    }
                    return false;
                });
                $("#prev").click(function(){
                  if ($("#divs div:visible").prev().length != 0)
                      $("#divs div:visible").prev().show().next().hide();
                  else {
                      $("#divs div:visible").hide();
                      $("#divs div:last").show();
                  }
                  return false;
              });
            });
        };
    }
    
    return (


        <div className={styles.container}>
        <Head>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'/>
          </Head>
            <main className={styles.main}>

          <div id="group">
          <button id="prev"><i className="fi fi-rr-angle-left"></i></button>
    <div id="divs">
    <div id="d1">
    
    <h2>Tap Start</h2>
              <a>to start answering questions</a>
    
    <img  src="imgs/logo/mainlogo.png" />
            <button className="buttontutorial">
            Let's Go
          </button>
          <button  className="buttontutorial">
            Tutorial
          </button>
          <button className="buttontutorial">
            About Us
          </button>
        </div>
       
        <div id="d3">
        
              <c>See the result on how it can affect</c>
              <h2>the ocean and the living things in it:</h2>
   
    <img  src="imgs/tutorials/tutorial_tut_whale.png"/>
    </div>

    <div id="d2">
    
              <h2>Tap your choice on</h2>
              <b>each of the 3 questions:</b>
              
            <button className="buttontutorial2">
            <img  src="imgs/climmates/climate__tropical.png"/>
            <p>Tropical</p>
          </button>
          <button  className="buttontutorial3">
          <img  src="imgs/climmates/climate__temperate.png"/>
            <p>Temperate</p>
            <img id="tut__click" src="imgs/tutorials/tut__click.png"/>
          </button>
          <button className="buttontutorial4">
          <img  src="imgs/climmates/climate__cold.png"/>
            <p>Cold</p>
          </button></div>

</div>

<button id="next"><i className="fi fi-rr-angle-right"/></button>
</div>     
          </main>
          <main>
        <h1>Homepage Content</h1>
      </main>
<style jsx>
    {
    `
#tut__click{
  position: absolute;
  top: 305px;
  left: 300px;
}
    #d1 {
      display: grid;
      place-items:  center;
      width:400px;
      margin-right: -20px;
      }
      #d1 img{
        width:40%;
        margin-bottom:10px;
      }
#group{
    display:flex;
    position: relative;
    margin:0;
}
.buttontutorial{
  height: 40px;
  width: 150px;
  margin: .5em;
  display:block;
  line-height: 40px; 
  text-align: center;
  background-color: #CAEBFC;
  border-radius: 8px;
  border:0px;
  box-shadow: 0px 2px 4px rgb(173, 173, 173);
}
#d2{
  display:grid;
  margin-left: 65px;
  margin-right:45px;
  place-items:  center;
  
}
#d2 h2{
  margin-top: 100px;
}
.buttontutorial2{
  width: 250px;
  height: 80px;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  border: none;
  background: #FFECA8;
  position: relative;
}
.buttontutorial2 img {
  float:left;
  height: 60px;
  margin-left:10px;
}
.buttontutorial2 p{
  text-align: center;
  font-size: 1.5em;
  margin-right:50px;
}

.buttontutorial3{
  width: 250px;
  height: 80px;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  border: none;
  background: #91DEA6;
}
.buttontutorial3 img {
  float:left;
  height: 60px;
  margin-left:10px;
}
.buttontutorial3 p{
  text-align: center;
  font-size: 1.5em;

}
.buttontutorial4{
  width: 250px;
  height: 80px;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  border: none;
  background: #86D4FD;
}
.buttontutorial4 img {
  float:left;
  height: 60px;
  margin-left:10px;
}
.buttontutorial4 p{
  text-align: center;
  font-size: 1.5em;
  margin-right:70px;
}
#d3 img {
  width:300px;
  height:250px;
  margin:50px;
}
#d3{
  margin-right: -20px;
  place-items:  center;
  display:grid;
}
#prev{
  margin-top:250px;
  width:50px;
  height:50px;
  color: #3C99DC ;
  background-color: white;
  border: 0px;
  
}
#next{
  margin-top:250px;
  width:50px;
  height:50px;
  color: #3C99DC;
  background-color: white;
  border: 0px;

  
}

#next i{
  font-size:50px;

}

#prev i{
  font-size:50px;
  
}

#d1 a{
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin: 0px;
}

#d3 c{
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin: 0px;
}

#d2 b{
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin: 0px;
}
    `
    }
</style>

      </div>
      
    )
}