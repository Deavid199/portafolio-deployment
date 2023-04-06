import Layout from "../components/layout"
import Image from 'next/image'
import Link from "next/link"
import useTrabajo from "../hook/useTrabajo"
import styles from "../styles/jobs.module.css"

export default function Jobs() {

  const { trabajos } = useTrabajo();

  return (
    <div className={styles.container}>
      <Layout
        title={'Trabajos'}
        description={'Proyectos realizados'}
      >
        <div className={styles.proyectos}>
          {trabajos ?
            trabajos.map(proyecto => (
              <div className={styles.card} key={proyecto.id}>
                <Image className={styles.portada} src={proyecto.enlace} width={200} height={100} alt="portada" priority />
                <div className={styles.contenido}>
                  <a href={proyecto.trabajo} target="_blank">
                    {proyecto.descripcion}
                  </a>
                </div>
              </div>
            ))
            : <h2>Cargando Mensajes</h2>}
        </div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={styles.buble}><span className={styles.dot}></span></div>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
        <div className={`${styles.wave} ${styles.wave4}`}></div>
      </Layout>
    </div>
  )
}
