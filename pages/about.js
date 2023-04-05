import Layout from "../components/layout";
import styles from "../styles/about.module.css";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import particlesconfig from "../config/particles-config";
import Image from 'next/image'
import Tecnology from "../components/tecnology";

export default function about() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // await console.log(container);
  }, []);

  return (
    <div className={styles.cover}>
      <Layout
        title={'About'}
        description={'About'}
      >
        <div className={styles.miyo}>
          <div className={styles.miti}>
            <h2>Sobre mí</h2>
            <p className={styles.about}>Hola a todos, soy <span>David Garcia</span> con mas de 2 años de experiencia en la creación de Sitios Web a medida. Asi como tambien he diseñado y desarrollado estrategias digitales para poder ofrecer un mejor servicio y una experiencia de usuario unica.</p>
            <div className={styles.atc}>
              <p><span>"Si puedes puedes imaginarlo puedes programarlo."</span></p>
              <p><span>— Programación ATC</span></p>
            </div>
          </div>
          <div className={styles.miti}>
            <Image src="/img/time.png" width={400} height={400} alt="Imagen comun" />
          </div>
        </div>
        <div>
          <Tecnology />
        </div>
      </Layout>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesconfig}
      />
    </div>
  )
}