import React from 'react'
import Layout from "../layouts/layout"
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesconfig from "../config/config-particles";
import styles from '../styles/contact.module.css'
import useMensaje from '../hook/useMensaje';

export default function Contact() {

  const { enviarMensaje, setNombre, setEmail, setMensaje, nombre, email, mensaje, enviado } = useMensaje();

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesLoaded = async (container) => {
    // await console.log(container);
  };

  return (
    <div className={styles.fondo}>
      <Layout
        title={'Contact'}
        description={'Contact'}
      >
        <div className={styles.contenedor}>
          <div className={styles.cajaform}>
          <div className={styles.grito}>
            <h2>Trabajemos juntos y creemos algo único.</h2>
            <p>Contactame y haremos tu idea posible.</p>
            </div>
          </div>
          <div className={styles.cajaform}>
            <div className={styles.caja}>
              <p>{enviado ? enviado : ""}</p>
              <h2>Contactame</h2>
            </div>
            <div>
              <form
                className={styles.formulario}
                onSubmit={enviarMensaje}
              >
                <div className={styles.inputc}>
                  <label>Nombre</label>
                  <div className={styles.campo}>
                    <input
                      className={styles.input100}
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                    />
                    <span className={styles.effect}></span>
                  </div>
                </div>
                <div className={styles.inputc}>
                  <label>Email</label>
                  <div className={styles.campo}>
                    <input
                      className={styles.input100}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className={styles.effect}></span>
                  </div>
                </div>
                <div className={styles.mensaje}>
                  <label>Mensaje</label>
                  <div className={styles.campo}>
                    <textarea
                      className={styles.textarea100}
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      required
                    ></textarea>
                    <span className={styles.effect}></span>
                  </div>
                </div>
                <button
                  className={styles.boton}
                  type="submit"
                >Enviar</button>
              </form>
            </div>
          </div>
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
