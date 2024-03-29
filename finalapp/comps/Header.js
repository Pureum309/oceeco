// import {useRouter} from "next/router";
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import Nav from "./nav";
// import { useState } from "react";
// import Hamburger from "./burger";

// function Header() {

//   const r = useRouter();

//   const [hamburgerOpen, setHamburgerOpen] = useState(false)

//   const toggleHamburger = () => {
//       setHamburgerOpen(!hamburgerOpen)
//   }

//     return <div className='layout-header'>
       
//        <Head>
//         <title>Oceeco</title>
//         <meta name="Oceeco is a webapp that teaches the impacts of plastics to the ocean and its inhabitants" content="Generated by create next app" />
//         <link rel="icon" href="/logomarkgradient.png" />
// 	     </Head>
     

//       <div className="navbar">
//         <div className={styles.navlogo}
//         onClick={
//           ()=>r.push("/")
//         }>
//             <img
//               className="navlogo" 
//               src ="logomarkgradient.png"
//             />
//         </div>
//           <div className="navmenu">
//           {/* <img
//               className="navmenu" 
//               src ="menu.png"
//           /> */}
//             <Nav />
//           </div>
//       </div>
//     </div>
// }

// export default Header

import Link from 'next/link';
import { useState } from "react";
import styles from "../styles/Layout.module.css";
import Head from 'next/head'

export default function Layout({children}) {

const [isOpen, setIsOpen] = useState(false);
const openMenu = () => setIsOpen(!isOpen);


    return <>
  <div className='layout-header'>
      <Head>
        <title>Oceeco</title>
        <meta name="Oceeco is a webapp that teaches the impacts of plastics to the ocean and its inhabitants" content="Generated by create next app" />
        <link rel="icon" href="/logomarkgradient.png" />
      </Head>
      <header className={styles.header}>
          <nav className={styles.navbar}>
              <Link href='/'>
              <a className={styles.navlogo}><img src="logomarkgradient.png"/></a>
              </Link>
            <ul className={isOpen === false ? styles.navmenu : styles.navmenu + ' ' + styles.active}>
              <li className={styles.navitem}>
                  <Link href='/'>
                      <a className={styles.navlink}><img src="/imgs/menu/menu__home.png"/>Home</a>
                  </Link>
              </li>
              <li className={styles.navitem}>
                  <Link href='/questions'>
                      <a className={styles.navlink}> <img src="/imgs/menu/menu__start.png"/> Quiz</a>
                  </Link>
              </li>
              <li className={styles.navitem}>
                  <Link href='/tutorial'>
                      <a className={styles.navlink}> <img src="/imgs/menu/menu__tutorial.png"/> Tutorial</a>
                  </Link>
              </li>
              <li className={styles.navitem}>
                  <Link href='/aboutus'>
                      <a className={styles.navlink}> <img src="/imgs/menu/menu__aboutus.png"/> About Us</a>
                  </Link>
              </li>
            </ul>
            <button className={isOpen === false ? 
                              styles.hamburger : styles.hamburger + ' ' + styles.active}
                              onClick={openMenu}
                              >

              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </nav>
        </header>
      </div>
      {children}
    </>
}