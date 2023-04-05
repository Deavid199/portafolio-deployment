import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const autenticarUsuario = async () => {
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
                const response = await axios.get(`${process.env.API_URL}/api/user-perfil`, config)
                setAuth(response.data.user);
            } catch (error) {
                setAuth({})
            }
            setCargando(false);
        }
        autenticarUsuario();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                setAuth,
                cargando,
                auth,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}
export default AuthContext
