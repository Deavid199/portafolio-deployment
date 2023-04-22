import useTrabajo from '../hook/useTrabajo'
import styles from '../styles/modalTrabajo.module.css'

export default function ModalTrabajo() {

    const { handleChangeModal, setTrabajo, setDescripcion, enviarProyecto, selectImg, trabajo, descripcion } = useTrabajo();

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
            <form className={styles.form} onSubmit={enviarProyecto}>
                <div className={styles.details}>
                    <label htmlFor='titulo'>Titulo</label>
                    <input
                        id='titulo'
                        type='text'
                        value={trabajo}
                        onChange={(e) => setTrabajo(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.details}>
                    <label htmlFor='descripcion'>Descripción</label>
                    <input
                        id='descripcion'
                        type='text'
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.details}>
                    <label htmlFor='imagen'>Imagen</label>
                    <input
                        id='imagen'
                        type='file'
                        accept="image/*"
                        onChange={selectImg}
                        required
                    />
                </div>
                <div className={styles.action}>
                    <button onClick={handleChangeModal}>Cerrar</button>
                    <button type='submit'>Crear</button>
                </div>
            </form>
        </div>
    )
}
