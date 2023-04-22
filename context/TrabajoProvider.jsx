import { useState, useEffect, createContext } from "react";
import axios from "axios";

const TrabajoContext = createContext();

const TrabajoProvider = ({ children }) => {

    const [cargando, setCargando] = useState(false);
    const [trabajos, setTrabajos] = useState([]);
    const [modal, setModal] = useState(false);

    const [trabajo, setTrabajo] = useState('');
    const [imagen, setImagen] = useState(null);
    const [descripcion, setDescripcion] = useState('');
    // console.log(imagen)

    useEffect(() => {
        const obtenerTrabajos = async () => {
            setCargando(true);
            try {
                setTimeout(async () => {
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

    const selectImg = (event) => {
        setImagen(event.target.files[0]);
    }

    const enviarProyecto = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')

        if (!token) {
            setCargando(false);
            return
        }
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
                "Cache-Control": "no-cache",
            }
        }

        const data = { imagen, trabajo, descripcion };
        try {
            const response = await axios.post(`${process.env.API_URL}/api/trabajo/submit`, data, config);
            console.log(response);
            setTrabajos([...trabajos, response.data]);
            setModal(false);
            setTrabajo('');
            setImagen(null);
            setDescripcion('');
        } catch (error) {
            console.log(error);
        }
        setCargando(false);
    }

    const eliminarProyecto = async (id) => {
        // e.preventDefault();

        const token = localStorage.getItem('token');

        if (!token) {
            setCargando(false);
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await axios.delete(`${process.env.API_URL}/api/trabajo/delete/${id}`, config);
            const trabajosPut = trabajos.filter(item => item.id != id);
                setTrabajos(trabajosPut);
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
