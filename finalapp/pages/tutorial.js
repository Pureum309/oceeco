import {useRouter} from "next/router";
import styles from '../styles/Home.module.css';
import Script from 'next/script'
export default function tutorial() {

    const r = useRouter();
 
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
          <div id="tutorial">
              <img id="imgg" width="300px" height="300px" ></img>
             </div>
          </main>
          
          <Script  strategy="lazyOnload">
  {` 
   document.querySelector('#tutorial').style.display="none";
  var arr = new collection(['../backgrounds/oceecobg_dark.jpg','../animals/animal__cold_penguine.png','../backgrounds/oceecobg_light.jpg']);

function collection(imgs) {
  this.imgs = imgs;
  this.i = 0;

  this.next = function(element) {
    var img = document.getElementById("imgg");
    
    this.i++;
    if (this.i >= imgs.length) {
      this.i = 0;
    }

    img.src = imgs[this.i];
  };
 
  this.prev = function(element) {
    var img = document.getElementById("imgg");
  
    this.i--;
    if (this.i < 0) {
      this.i = imgs.length - 1;
    }
  
    img.src = imgs[this.i];
  };
  
  this.next("mainImg"); // to initialize with some image
}
      var xDown = null;                                                        
      var yDown = null;
      function getTouches(evt) {
        return evt.touches ||            
               evt.originalEvent.touches; 
      }                                                     
                                                                               
      function handleTouchStart(evt) {
          const firstTouch = getTouches(evt)[0];                                      
          xDown = firstTouch.clientX;                                      
          yDown = firstTouch.clientY;                                      
      };                                                
                                                                               
      function handleTouchMove(evt) {
          if ( ! xDown || ! yDown ) {
              return;
          }
          var xUp = evt.touches[0].clientX;                                    
          var yUp = evt.touches[0].clientY;
          var xDiff = xDown - xUp;
          var yDiff = yDown - yUp;                                                      
          if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
              if ( xDiff > 0 ) {
               arr.next('imgg');
              } else {
                arr.prev('imgg')
              }                       
          } else {
              if ( yDiff > 0 ) {
              } else { 
              }                                                                 
          }
          xDown = null;
          yDown = null;                                             
      };
      function remove(){
      document.querySelector('.mainpage_content').style.display="none";;
      document.querySelector('#tutorial').style.display="block";
        document.addEventListener('touchstart', handleTouchStart, false);        
        document.addEventListener('touchmove', handleTouchMove, false);
      };
      document.getElementById("btn").addEventListener("click", remove);
  `}
           </Script>
      </div>
      
    )
}