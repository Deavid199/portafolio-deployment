import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/sidebar.module.css'

import {IoMdSpeedometer} from 'react-icons/io';

export default function Sidebar() {

  const router = useRouter();
  return (
    <div className={`${styles.sideBar} ${styles.grid}`}>
        <div className={`${styles.flex}`}>
            <h2>DD</h2>
        </div>

        <div className={styles.menuDiv}>
            <h4>Portafolio</h4>
            <ul className={`${styles.grid}`}>
                <li className={styles.listItem}>
                    <Link href="/" className={`${styles.flex}`}>
                        <IoMdSpeedometer className={styles.icon}/>
                        <span>Inicio</span>
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="trabajos" className={`${styles.flex}`}>
                        <IoMdSpeedometer className={styles.icon}/>
                        <span>Trabajos</span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className={styles.settingsDiv}>
            <h4>Clientes</h4>
            <ul className={`${styles.grid}`}>
                <li className={styles.listItem}>
                    <Link href="mensajes" className={`${styles.flex}`}>
                        <IoMdSpeedometer className={styles.icon}/>
                        <span>Mensajes</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
