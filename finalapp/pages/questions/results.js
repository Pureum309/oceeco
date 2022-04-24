import styles from '../../styles/Home.module.css';
import { GetAnswer, GetName } from "../../data/que_content";

export default function Qresults(){

    const an = GetAnswer();
    const nm = GetName();

    return <div className={styles.container}>
    <div className={styles.main}>
{/* CLOWNFISH */}
    {
        an[1] === "clownfish" && an[2] === "plastic bottle" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__bottle_nemo.png" />
            
            <h3 className={styles.heading}><span className={styles.firstcap}>{an[2]}s</span> poke the insides of a {an[1]}'s stomach</h3>
            
            <div>
                <p className={styles.resultsdesc}>
                Swallowing plastics like bottle caps can hurt the {an[1]} by poking some of their internal organs and not allow them to breathe.
                </p>
            </div>
        </div>
    }

    {
        an[1] === "clownfish" && an[2] === "plastic bag" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__garbage_nemo.png" />
            
            <h3 className={styles.heading}><span className={styles.firstcap}>{an[2]}s</span> traps them and causes them to drown</h3>
            
            <div>
                <p className={styles.resultsdesc}>
                    <span className={styles.firstcap}>{an[1]}</span> can get trapped in plastic nets or large pile of plastic bags. 
                    <br></br>
                    <br></br>
                    Getting trapped takes them away from their home and family. It can also hurt them badly.
                </p>
            </div>
        </div>
    }

    {
        an[1] === "clownfish" && an[2] === "plastic straw" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__straw_nemo.png" />
            
            <h3 className={styles.heading}><span className={styles.firstcap}>{an[2]}s</span> can cause them to starve</h3>
            
            <div>
                <p className={styles.resultsdesc}>
                Floating plastics like straws easily get cut into small pieces. These might be eaten by the {an[1]}.
                <br></br>
                <br></br>
                They think they're full from eating plastic so they do not get to eat real food then they starve or get hurt inside.
                </p>
            </div>
        </div>
    }
{/* TURTLE */}
    {
        an[1] === "green turtle" && an[2] === "plastic bottle" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__bottle_turtle.png" />
            
            <h3 className={styles.heading}><span className={styles.firstcap}>{an[2]}s</span> poke the insides of a {an[1]}'s stomach</h3>
            
            <div>
                <p className={styles.resultsdesc}>
                Swallowing plastics like bottle caps can hurt the {an[1]} by poking some of their internal organs and not allow them to breathe.
                </p>
            </div>
        </div>
    }

    {
        an[1] === "green turtle" && an[2] === "plastic bag" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__garbage_turtle.png" />
            
            <h3 className={styles.heading}><span className={styles.firstcap}>{an[2]}s</span> traps them and causes them to drown</h3>
            
            <div>
                <p className={styles.resultsdesc}>
                    <span className={styles.firstcap}>{an[1]+"s"}</span> can get trapped in plastic nets or large pile of plastic bags. 
                    <br></br>
                    <br></br>
                    Getting trapped takes them away from their home and family. It can also hurt them badly.
                </p>
            </div>
        </div>
    }

    {
        an[1] === "green turtle" && an[2] === "plastic straw" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__straw_turtle.png" />
            
            <h3 className={styles.heading}><span className={styles.firstcap}>{an[2]}s</span> can cause them to starve</h3>
            
            <div>
                <p className={styles.resultsdesc}>
                Floating plastics like straws easily get cut into small pieces. These might be eaten by the {an[1]}.
                <br></br>
                <br></br>
                They think they're full from eating plastic so they do not get to eat real food then they starve or get hurt inside.
                </p>
            </div>
        </div>
    }

{/* SHARK */}

    {
        an[1] === "shark" && an[2] === "plastic bottle" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__bottle_shark.png" />
            
            <h3 className={styles.heading}><span className={styles.firstcap}>{an[2]}s</span> poke the insides of a {an[1]}'s stomach</h3>
            
            <div>
                <p className={styles.resultsdesc}>
                Swallowing plastics like bottle caps can hurt the {an[1]} by poking some of their internal organs and not allow them to breathe.
                </p>
            </div>
        </div>
    }

    {
        an[1] === "shark" && an[2] === "plastic bag" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__garbage_shark.png" />
            
            <h3 className={styles.heading}><span className={styles.firstcap}>{an[2]}s</span> traps them and causes them to drown</h3>
            
            <div>
                <p className={styles.resultsdesc}>
                    <span className={styles.firstcap}>{an[1]+"s"}</span> can get trapped in plastic nets or large pile of plastic bags. 
                    <br></br>
                    <br></br>
                    Getting trapped takes them away from their home and family. It can also hurt them badly.
                </p>
            </div>
        </div>
    }

    {
        an[1] === "shark" && an[2] === "plastic straw" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__straw_shark.png" />
            
            <h3 className={styles.heading}><span className={styles.firstcap}>{an[2]}s</span> can cause them to starve</h3>
            
            <div>
                <p className={styles.resultsdesc}>
                Floating plastics like straws easily get cut into small pieces. These might be eaten by the {an[1]}.
                <br></br>
                <br></br>
                They think they're full from eating plastic so they do not get to eat real food then they starve or get hurt inside.
                </p>
            </div>
        </div>
    }

  
    
    <div className={styles.buttonintro}
          onClick={
            ()=>r.push("/mainpage")
          }>
            Learn How to Help
          </div>
    </div>
    </div>
}