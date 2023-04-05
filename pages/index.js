import Layout from "../components/layout"
import Image from 'next/image'
import styles from "../styles/index.module.css"

export default function Home() {
  return (
    <div className={styles.index}>
      <Layout
        title={'Inicio'}
        description={'Servicios Digitales y mas'}
      >
        <div>
          <div className={styles.titulo}>
              <p>Yo soy</p>
              <h2>DAVID</h2>
              <h3>Programador Web Full Stack</h3>
          </div>
          <Image className={styles.hand} src="/img/hand.png" width={400} height={400} alt="Fondo" priority />
        </div>
      </Layout>
    </div>
  )
}
