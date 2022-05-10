import {useRouter} from "next/router";
import styles from '../../styles/Home.module.css';
import { GetAnswer, GetName } from "../../data/que_content";

export default function Qresults(){

    const an = GetAnswer();
    const nm = GetName();

    const r = useRouter();

    return <div className={styles.container}>
    <div className={styles.main}>
{/* CLOWNFISH */}
    {
        an[1] === "Clownfish" && an[2] === "Plastic bottle" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__bottle_nemo.png" />
            
            <h3 className={styles.heading}>{an[2]}s poke the insides of a {an[1]}'s stomach</h3>
            <p className={styles.resultsdesc}>
            Swallowing plastics like bottle caps can hurt the <span className={styles.lcase}>{an[1]}</span> by poking some of their internal organs and not allow them to breathe.
            </p>
        </div>
    }

    {
        an[1] === "Clownfish" && an[2] === "Plastic bag" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__garbage_nemo.png" />
            
            <h3 className={styles.heading}>{an[2]}s traps them and causes them to drown</h3>
            
            <p className={styles.resultsdesc}>
                {an[1]} can get trapped in plastic nets or large pile of plastic bags. 
                <br></br>
                <br></br>
                Getting trapped takes them away from their home and family. It can also hurt them badly.
            </p>
        </div>
    }

    {
        an[1] === "Clownfish" && an[2] === "Plastic straw" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__straw_nemo.png" />
            
            <h3 className={styles.heading}>{an[2]}s can cause them to starve</h3>
            
            <p className={styles.resultsdesc}>
            Floating plastics like straws easily get cut into small pieces. These might be eaten by the <span className={styles.lcase}>{an[1]}</span>.
            <br></br>
            <br></br>
            They think they're full from eating plastic so they do not get to eat real food then they starve or get hurt inside.
            </p>
        </div>
    }
{/* TURTLE */}
{
        an[1] === "Green turtle" && an[2] === "Plastic bottle" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__bottle_turtle.png" />
            
            <h3 className={styles.heading}>{an[2]}s poke the insides of a {an[1]}'s stomach</h3>
            
            <p className={styles.resultsdesc}>
            Swallowing plastics like bottle caps can hurt the <span className={styles.lcase}>{an[1]}</span> by poking some of their internal organs and not allow them to breathe.
            </p>
        </div>
    }

    {
        an[1] === "Green turtle" && an[2] === "Plastic bag" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__garbage_turtle.png" />
            
            <h3 className={styles.heading}>{an[2]}s traps them and causes them to drown</h3>
            

            <p className={styles.resultsdesc}>
                {an[1]+"s"} can get trapped in plastic nets or large pile of plastic bags. 
                <br></br>
                <br></br>
                Getting trapped takes them away from their home and family. It can also hurt them badly.
            </p>
        </div>
    }

    {
        an[1] === "Green turtle" && an[2] === "Plastic straw" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__straw_turtle.png" />
            
            <h3 className={styles.heading}>{an[2]}s can cause them to starve</h3>

            <p className={styles.resultsdesc}>
            Floating plastics like straws easily get cut into small pieces. These might be eaten by the <span className={styles.lcase}>{an[1]}</span>.
            <br></br>
            <br></br>
            They think they're full from eating plastic so they do not get to eat real food then they starve or get hurt inside.
            </p>
        </div>
    }

{/* SHARK */}

    {
        an[1] === "Shark" && an[2] === "Plastic bottle" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__bottle_shark.png" />
            
            <h3 className={styles.heading}>{an[2]}s poke the insides of a {an[1]}'s stomach</h3>
            
            <p className={styles.resultsdesc}>
            Swallowing plastics like bottle caps can hurt the <span className={styles.lcase}>{an[1]}</span> by poking some of their internal organs and not allow them to breathe.
            </p>
        </div>
    }

    {
        an[1] === "Shark" && an[2] === "Plastic bag" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__garbage_shark.png" />
            
            <h3 className={styles.heading}>{an[2]}s traps them and causes them to drown</h3>
            
            <p className={styles.resultsdesc}>
                {an[1]+"s"} can get trapped in plastic nets or large pile of plastic bags. 
                <br></br>
                <br></br>
                Getting trapped takes them away from their home and family. It can also hurt them badly.
            </p>
        </div>
    }

    {
        an[1] === "Shark" && an[2] === "Plastic straw" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__straw_shark.png" />
            
            <h3 className={styles.heading}>{an[2]}s can cause them to starve</h3>
            
            <p className={styles.resultsdesc}>
                Floating plastics like straws easily get cut into small pieces. These might be eaten by the <span className={styles.lcase}>{an[1]}</span>.
                <br></br>
                <br></br>
                They think they're full from eating plastic so they do not get to eat real food then they starve or get hurt inside.
            </p>
        </div>
    }
{/*DOLPHIN*/}
    {
        an[1] === "Dolphin" && an[2] === "Plastic bottle" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__bottle_dolphin.png" />
            
            <h3 className={styles.heading}>{an[2]}s poke the insides of a {an[1]}'s stomach</h3>
            
            <p className={styles.resultsdesc}>
            Swallowing plastics like bottle caps can hurt the <span className={styles.lcase}>{an[1]}</span> by poking some of their internal organs and not allow them to breathe.
            </p>
        </div>
    }

    {
        an[1] === "Dolphin" && an[2] === "Plastic bag" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__garbage_dolphin.png" />
            
            <h3 className={styles.heading}>{an[2]}s traps them and causes them to drown</h3>
            
            <p className={styles.resultsdesc}>
                {an[1]+"s"} can get trapped in plastic nets or large pile of plastic bags. 
                <br></br>
                <br></br>
                Getting trapped takes them away from their home and family. It can also hurt them badly.
            </p>
        </div>
    }

    {
        an[1] === "Dolphin" && an[2] === "Plastic straw" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result__straw_dolphin.png" />
            
            <h3 className={styles.heading}>{an[2]}s can cause them to starve</h3>
            
            <p className={styles.resultsdesc}>
                Floating plastics like straws easily get cut into small pieces. These might be eaten by the <span className={styles.lcase}>{an[1]}</span>.
                <br></br>
                <br></br>
                They think they're full from eating plastic so they do not get to eat real food then they starve or get hurt inside.
            </p>
        </div>
    }
    
    {/*PENGUIN*/}
    {
        an[1] === "Penguin" && an[2] === "Plastic bottle" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result_bottle_penguin.png" />
            
            <h3 className={styles.heading}>{an[2]}s poke the insides of a {an[1]}'s stomach</h3>
            
            <p className={styles.resultsdesc}>
            Swallowing plastics like bottle caps can hurt the <span className={styles.lcase}>{an[1]}</span> by poking some of their internal organs and not allow them to breathe.
            </p>
        </div>
    }

    {
        an[1] === "Penguin" && an[2] === "Plastic bag" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result_garbage_penguin.png" />
            
            <h3 className={styles.heading}>{an[2]}s traps them and causes them to drown</h3>
            
            <p className={styles.resultsdesc}>
                {an[1]+"s"} can get trapped in plastic nets or large pile of plastic bags. 
                <br></br>
                <br></br>
                Getting trapped takes them away from their home and family. It can also hurt them badly.
            </p>
        </div>
    }

    {
        an[1] === "Penguin" && an[2] === "Plastic straw" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result_straw_penguin.png" />
            
            <h3 className={styles.heading}>{an[2]}s can cause them to starve</h3>
            
            <p className={styles.resultsdesc}>
                Floating plastics like straws easily get cut into small pieces. These might be eaten by the <span className={styles.lcase}>{an[1]}</span>.
                <br></br>
                <br></br>
                They think they're full from eating plastic so they do not get to eat real food then they starve or get hurt inside.
            </p>
        </div>
    }

    {/*POLAR BEAR*/}
    {
        an[1] === "Polar bear" && an[2] === "Plastic bottle" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result_bottle_polar.png" />
            
            <h3 className={styles.heading}>{an[2]}s poke the insides of a {an[1]}'s stomach</h3>
            
            <p className={styles.resultsdesc}>
            Swallowing plastics like bottle caps can hurt the <span className={styles.lcase}>{an[1]}</span> by poking some of their internal organs and not allow them to breathe.
            </p>
        </div>
    }

    {
        an[1] === "Polar bear" && an[2] === "Plastic bag" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result_garbage_polar.png" />
            
            <h3 className={styles.heading}>{an[2]}s traps them and causes them to drown</h3>
            
            <p className={styles.resultsdesc}>
                {an[1]+"s"} can get trapped in plastic nets or large pile of plastic bags. 
                <br></br>
                <br></br>
                Getting trapped takes them away from their home and family. It can also hurt them badly.
            </p>
        </div>
    }

    {
        an[1] === "Polar bear" && an[2] === "Plastic straw" &&
        <div className={styles.grid}>
            <img className={styles.mainlogo} src="./../../imgs/results/result_straw_polar.png" />
            
            <h3 className={styles.heading}>{an[2]}s can cause them to starve</h3>
            
            <div>
                <p className={styles.resultsdesc}>
                    Floating plastics like straws easily get cut into small pieces. These might be eaten by the <span className={styles.lcase}>{an[1]}</span>.
                    <br></br>
                    <br></br>
                    They think they're full from eating plastic so they do not get to eat real food then they starve or get hurt inside.
                </p>
            </div>
        </div>
    }

    <div className={styles.buttonintro}
          onClick={
            ()=>r.push("/learnmore")
          }>
            Learn How to Help
    </div>
        <div className={styles.backbutton}>
                        <button onClick={
                        ()=> history.back()
                        }>Back</button>
        </div>

    </div>
    </div>
}