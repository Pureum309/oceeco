import {useRouter} from "next/router";
import styles from '../styles/Home.module.css';
import Script from 'next/script'
import $ from 'jquery';
export default function tutorial() {
    const r = useRouter();
    if (process.browser) {
        var aScript = document.createElement('script');
        aScript.type = 'text/javascript';
        aScript.src = " https://js.stripe.com/v3/";
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

            <main className={styles.main}>
                
           <div className={styles.grid}>
              <h2>Tutorial</h2>
          </div>     
          <div className="mainpage_content">
              <div className={styles.grid}>
                  <button id="btn">Next</button>
              </div>
            
          </div>
          <div id="group">
          <button id="next">next</button>
    <div id="divs">
    <div id="d1">
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
       
    <div id="d2">
            <button className="buttontutorial2">
            <img  src="imgs/climmates/climate__tropical.png"/>
            <p>Tropical</p>
          </button>
          <button  className="buttontutorial3">
          <img  src="imgs/climmates/climate__temperate.png"/>
            <p>Temperate</p>
          </button>
          <button className="buttontutorial4">
          <img  src="imgs/climmates/climate__cold.png"/>
            <p>Cold</p>
          </button></div>
    <div id="d3">
    <img  src="imgs/tutorials/tutorial_tut_whale.png"/>
    </div>

</div>

<button id="prev">prev</button>
</div>     
          </main>
          <main>
        <h1>Nội dung trang chủ</h1>
      </main>
<style jsx>
    {
    `
    #d1 {
      display: grid;
      place-items:  center;
      width:400px;
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
  margin-right:65px;
}
.buttontutorial2{
  width: 250px;
  height: 80px;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  border: none;
  background: #FFECA8;
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
  with:300px;
  height:250px;
  margin:20px;
}
#prev{
  margin-top:150px;
  with:50px;
  height:50px;
  color: white;
  border-radius: 50%;
}
#next{
  margin-top:150px;
  with:50px;
  height:50px;
  color: white;
  border-radius: 50%;
}

    `
    }
</style>

          <Script  strategy="afterInteractive" >
  {` 
      document.querySelector('#group').style.visibility="hidden";
      document.getElementById("btn").addEventListener("click", remove);
      function remove(){
      document.querySelector('.mainpage_content').style.display="none";;
      document.querySelector('#group').style.visibility="visible";
      };

   
    
  `}
           </Script>
      </div>
      
    )
}