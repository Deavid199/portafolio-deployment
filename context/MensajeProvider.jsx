import { useState, useEffect, createContext } from "react";
import axios from "axios";

const MensajeContext = createContext();

const MensajeProvider = ({children}) => {
    const [cargando, setCargando] = useState(true);
    const [ nombre, setNombre ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ mensaje, setMensaje ] = useState('');
    const [ mensajes, setMensajes ] = useState([]);
    const [modalMensaje, setModalMensaje] = useState(false);

    const [cliente, setCliente] = useState({});

    const [ enviado, setEnviado ] = useState('');

    useEffect(() => {
        const obtenerMensajes = async () => {

            const token = localStorage.getItem('token')

            if(!token){
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
                setTimeout( async() => {
                    const response = await axios.get(`${process.env.API_URL}/api/mensajes`, config);
                    setMensajes(response.data);
                }, 1000);

            } catch (error) {
                console.log(error.data);
            }
            setCargando(false);
        }
        obtenerMensajes();
    }, []);

    const enviarMensaje = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`${process.env.API_URL}/api/enviar`, {nombre, email, mensaje})
            setEnviado(response.data.message);

            setNombre('')
            setEmail('')
            setMensaje('')

            setTimeout( async() => {
                setEnviado('');
            }, 5000);
        } catch (error) {
            console.log(error)
        }
    }

    const eliminarMsj = async(id) => {
        const token = localStorage.getItem('token');
        if(!token){
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
            const response = await axios.delete(`${process.env.API_URL}/api/elminarMsj/${id}`, config)
            const updateMensajes = mensajes.filter(item => item.id != id);
            setMensajes(updateMensajes);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeModal = () => {
        setModalMensaje(!modalMensaje)
    }

    return (
        <MensajeContext.Provider
            value={{
                enviarMensaje,
                setNombre,
                setEmail,
                setMensaje,
                handleChangeModal,
                setCliente,
                eliminarMsj,
                nombre,
                email,
                mensaje,
                mensajes,
                enviado,
                modalMensaje,
                cliente,
            }}
        >
            {children}
        </MensajeContext.Provider>
    )
}

export {
    MensajeProvider
}
export default MensajeContext
