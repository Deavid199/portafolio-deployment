import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

export default function Header() {

  const router = useRouter();
  return (
    <header className={`contenedor ${styles.barra}`}>
      <nav className={styles.nav}>
        <Link className={styles.logo} href={'/'} >
          <h3>D<span>avid</span>D<span>eveloping</span></h3>
        </Link>

        <ul>
          <li><Link href="/" className={styles.navsito}>Inicio<div className={styles.liquid}></div></Link ></li>
          <li><Link href="/about" className={styles.navsito}>Acerca De<div className={styles.liquid}></div></Link ></li>
          <li><Link href="/jobs" className={styles.navsito}>Trabajos<div className={styles.liquid}></div></Link ></li>
          <li><Link href="/contact" className={styles.navsito}>Contacto<div className={styles.liquid}></div></Link ></li>
        </ul>
      </nav>
    </header>
    //   <Link className={styles.logo} href={'/'} >
    //     <h3>D<span>avid</span>D<span>eveloping</span></h3>
    //   </Link>

    //   <nav className={styles.navegacion}>
    //     <Link href="/">
    //       <p className={router.pathname === '/' ? styles.active : ''}>Inicio</p>
    //     </Link>
    //     <Link href="/about">
    //       <p className={router.pathname === '/about' ? styles.active : ''}>About</p>
    //     </Link>
    //     <Link href="/jobs">
    //       <p className={router.pathname === '/jobs' ? styles.active : ''}>Jobs</p>
    //     </Link>
    //     <Link href="/contact">
    //       <p className={router.pathname === '/contact' ? styles.active : ''}>Contact</p>
    //     </Link>
    //   </nav>
    // </header>
  )
}
