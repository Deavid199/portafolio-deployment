import useMensaje from "../hook/useMensaje";
import styles from "../styles/modalMensaje.module.css";


export default function ModalMensaje() {

  const { handleChangeModal, cliente } = useMensaje();

  return (
    <div className={styles.c}>
      <div className={styles.d}>
        <button
          className={styles.close}
          onClick={handleChangeModal}
        >
          X
        </button>
      </div>
      <div className={styles.mensaje}>
        <div className={styles.details}>
          <div>
            <h2>Cliente</h2>
            <p>{cliente.nombre}</p>
          </div>
          <div>
            <h2>Correo</h2>
            <p>{cliente.correo}</p>
          </div>
        </div>
        <div className={styles.mensaje}>
          <div>
            <h2>Mensaje</h2>
            <p>{cliente.mensaje}</p>
          </div>
        </div>
        <div className={styles.action}>
          <button onClick={handleChangeModal}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}
