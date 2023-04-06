import { useEffect } from 'react';
import Administracion from "../components/administracion";
import styles from '../styles/mensajes.module.css';
import { useRouter } from "next/router";
import useMensaje from "../hook/useMensaje";
import { FaSearch, FaSkull } from "react-icons/fa";
import useAuth from "../hook/useAuth";

export default function Mensajes() {

  const { mensajes } = useMensaje();

  const { cargando, auth } = useAuth();
  const {roll} = auth;

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(roll !== "administrador"){
        router.push("/");
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  function limitarTexto(texto, maxCaracteres) {
    if (texto.length > maxCaracteres) {
      return texto.slice(0, maxCaracteres) + '...';
    } else {
      return texto;
    }
  }
  return (
    <div>
      <Administracion
        title={'Mensajes'}
        description={'Mensajes clientes'}
      >
        {cargando ? <div className={styles.cargando}><h2>Cargando</h2></div> : ""}
        <div className={styles.mainContent}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.dato}>ID</th>
                <th className={styles.dato}>Nombre</th>
                <th className={styles.dato}>Correo</th>
                <th className={styles.dato}>Mensaje</th>
                <th className={styles.dato}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mensajes ?
                mensajes.map(mensaje => (
                  <tr key={mensaje.id}>
                    <td className={styles.dato}>{mensaje.id}</td>
                    <td className={styles.dato}>{mensaje.nombre}</td>
                    <td className={styles.dato}>{mensaje.correo}</td>
                    <td className={styles.dato}>{limitarTexto(mensaje.mensaje, 10)}</td>
                    <td className={`${styles.actions}`}>
                      <button>
                        <FaSearch />
                      </button>
                      <button>
                        <FaSkull />
                      </button>
                    </td>
                  </tr>
                ))
                : <h2>Cargando Mensajes</h2>}
            </tbody>
          </table>
        </div>
      </Administracion>
    </div>
  )
}