import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hamburger from "./burger";
import { useState } from "react";

export default function Nav(){

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const r = useRouter();

    return(
        <div className={styles.navigation}>
            <div className="navigation">
                <div className="hamburger" onClick={toggleHamburger}>
                            <Hamburger isOpen={hamburgerOpen} />
                </div>

                <ul>
                    <li className="burger_el" 
                    onClick={
                        ()=>r.push("/")
                        }>
                            <Image 
                                src="/imgs/menu/menu__home.png"
                                alt="Home Icon"
                                width={20}
                                height={20}
                             />
                            
                        Home</li>

                    <li className="burger_el" 
                    onClick={
                        ()=>r.push("/questions")
                        }>
                            <Image 
                                src="/imgs/menu/menu__start.png"
                                alt="Home Icon"
                                width={20}
                                height={20}
                             />
                        
                        Play</li>

                    <li className="burger_el" 
                    onClick={
                        ()=>r.push("/tutorial")
                    }>
                        <Image 
                                src="/imgs/menu/menu__tutorial.png"
                                alt="Home Icon"
                                width={20}
                                height={20}
                             />
                        
                        Tutorial</li>

                    <li className="burger_el" 
                    onClick={
                        ()=>r.push("/aboutus")
                    }>
                        
                        <Image 
                                src="/imgs/menu/menu__aboutus.png"
                                alt="Home Icon"
                                width={20}
                                height={20}
                             />
                        
                        About Us</li>
                </ul>
                   
            </div>


            <style jsx>{`

                // Image {
                //     float: left;
                // }

                .navigation {
                    position: relative;
                    margin-top: 0;
                    z-index: 1;
                    height: 100vh;
                    width: -50vw;
                    position: relative;
                  }
                  
                  .navigation ul {
                    display: flex;
                    flex-wrap: wrap;
                    float: right;
                    position: relative;
                    margin: 0 2em;
                    padding: 5rem;
                    height: 100vh;
                    margin-right: -50px;
                    margin-left: auto;
                    color: black;
                    background-color: white;
                    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
                    z-index: 9;
                
                  }
                  
                  .navigation ul li {
                    list-style-type: none;
                    padding: 25px;
                    
                  }

                  .hamburger {
                      display: absolute;
                      margin-right: 10px;
                      z-index: -1;

                  }


                .navigation ul {
                    display: ${hamburgerOpen ? 'flex' : 'none'}
                    // background-color: blue;
                    // height: 100vh;
                    // width: 50vw;
                    // margin-top: 50px;
                    // position: absolute;
                  }
            
            `}

            </style>
        </div>
    )
}