import { useState } from 'react'
import Layout from "../components/layout";
import { useRouter } from "next/router";
import useAuth from "../hook/useAuth";
import axios from "axios";
import styles from "../styles/dregister.module.css";

export default function Dregister() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setAuth } = useAuth();
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.API_URL}/api/register`, { email, password });
      localStorage.setItem('token', response.data.token);
      setAuth(response.data.user);

      setEmail('');
      setPassword('');
      if (response.data.user.roll == "administrador") {
        router.push("/mensajes");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.fondo}>
      <Layout
        title={'Registro'}
        description={'Solo Dev'}
      >
        <div className={styles.contenedor}>
          <h2>Registro solo Dev</h2>
          <form onSubmit={handleRegister}>
            <div>
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Registrarse</button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  )
}
