import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const TrabajoContext = createContext();

const TrabajoProvider = ({children}) => {

    const [cargando, setCargando] = useState(false);
    const [ trabajos, setTrabajos ] = useState([]);
    const [ modal, setModal ] = useState(false);

    const [ trabajo, setTrabajo ] = useState('');
    const [ imagen, setImagen ] = useState(null);
    const [ descripcion, setDescripcion ] = useState('');

    useEffect(() => {
        const obtenerTrabajos = async () => {
            setCargando(true);
            try {
                setTimeout( async() => {
                    const response = await axios.get(`${process.env.API_URL}/api/trabajos/all`);
                    setTrabajos(response.data);
                    
                }, 1000);
                setCargando(false);
            } catch (error) {
                console.log(error);
            }
        }
        obtenerTrabajos();
    }, []);

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const selectImg = (e) => {
        setImagen(e.target.files[0])
    }

    const enviarProyecto = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("imagen", imagen);
        formData.append("trabajo", trabajo);
        formData.append("descripcion", descripcion);

        try {
            const response = await axios.post(`${process.env.API_URL}/api/trabajo/submit`, formData);
            setTrabajos([...trabajos, response.data])
            setModal(false);
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarProyecto = async (id) => {
        // e.preventDefault();

        try {
            const response = await axios.delete(`${process.env.API_URL}/api/trabajo/delete/${id}`);
            const original = [...trabajos];
            setTrabajos(original.splice(1, id));
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TrabajoContext.Provider
            value={{
                selectImg,
                handleChangeModal,
                setTrabajo,
                setImagen,
                setDescripcion,
                enviarProyecto,
                eliminarProyecto,
                modal,
                trabajos,
                trabajo,
                imagen,
                descripcion,
            }}
        >
            {children}
        </TrabajoContext.Provider>
    )
}

export {
    TrabajoProvider
}
export default TrabajoContext
