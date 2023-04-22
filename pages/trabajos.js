import Administracion from "../layouts/administracion";
import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import styles from '../styles/trabajos.module.css';
import useTrabajo from "../hook/useTrabajo";
import useAuth from "../hook/useAuth";

export default function Trabajos() {

  const { handleChangeModal, eliminarProyecto, trabajos } = useTrabajo();
  const { cargando, auth } = useAuth();

  const {roll} = auth;

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(roll !== "administrador"){
        console.log("holi");
        router.push("/");
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [roll, router]);

  return (
    <Administracion
      title={'Trabajos'}
      description={'Mis trabajoss'}
    >
      {cargando ? <div className={styles.cargando}><h2>Cargando</h2></div> : ""}
      <div className={styles.mainContent}>
        <div className={styles.btnModal}>
          <button className={styles.modal} onClick={handleChangeModal}>+ Trabajo</button>
        </div>
        <div className={styles.proyectos}>
          {trabajos ?
            trabajos.map(proyecto => (
              <div className={styles.card} key={proyecto.id}>
                <button onClick={() => eliminarProyecto(proyecto.id)} className={styles.close}>X</button>
                <Image className={styles.portada} src={proyecto.enlace} width="200" height="100" alt={proyecto.trabajo} priority/>
                <div className={styles.contenido}>
                  <p>{proyecto.descripcion}</p>
                </div>
              </div>
            ))
            : <h2>Cargando Mensajes</h2>}
        </div>
      </div>
    </Administracion>
  )
}