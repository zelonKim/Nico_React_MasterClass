/* 
export default function NavBar() {
    return (
        <nav>
           <a href="/"> Home </a>
           <a href="/about"> About </a> 
        </nav>
    ) 
} 
*/

//////////////


/* 
import Link from "next/link"
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    console.log(router) 
    // URL이 http://localhost:3000/일 경우 -> 콘솔창에 {pathname: '/', route: '/', query: {…}, asPath: '/', components: {…}, …}가 출력됨.
    // URL이 http://localhost:3000/about일 경우 -> 콘솔창에 {pathname: '/about', route: '/about', query: {…}, asPath: '/about', components: {…}, …}가 출력됨.
    
    return (
        <nav>
            <Link href="/" style={{color: router.pathname === "/" ? "red" : "blue"}}> Home </Link>
            <Link href="/about" style={{color: router.pathname === "/about" ? "red" : "blue"}}> About </Link>
        </nav>
    ) 
} 
*/

////////////////////


/* 
import Link from "next/link"
import { useRouter } from "next/router";
import styles from "./NavBar.module.css"

export default function NavBar() {
    const router = useRouter();
    return (
        <nav className={styles.active}>
            <Link href="/" className={router.pathname === "/" ? styles.active : styles.inactive}> Home </Link>
            <Link href="/about" className={router.pathname === "/about" ? styles.active : styles.inactive}> About </Link>
        </nav>
    ) 
} 
*/

////////////////////////

/* import Link from "next/link"
import { useRouter } from "next/router";
import styles from "./NavBar.module.css"

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <span>
                <Link href="/" className={router.pathname === "/" ? "active": ""}> Home </Link>
                <Link href="/about" className={router.pathname === "/about" ? "active": ""}> About </Link>
            </span>

            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                span {
                    text-decoration: none;
                }
                .active {
                    color: yellow;
                }
            `}</style>
            
        </nav>
    ) 
}  */

/////////////////


import Link from "next/link"
import { useRouter } from "next/router";
import styles from "./NavBar.module.css"

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <img src="/vercel.svg" />
            <span>
                <Link href="/"> Home </Link>
                <Link href="/about"> About </Link>
            </span>

            <style jsx>{`
                nav {
                    background-color: red;
                }
                span {
                    text-decoration: none;
                }
            `}</style>
            
        </nav>
    ) 
} 



