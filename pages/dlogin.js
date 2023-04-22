import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../layouts/layout";
import styles from "../styles/dlogin.module.css";
import axios from "axios";
import useAuth from "../hook/useAuth";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.API_URL}/api/login`, { email, password });
      localStorage.setItem('token', response.data.token)
      setAuth(response.data.user);

      if (response.data.user.roll == "administrador") {
        router.push("/mensajes");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.fondo}>
      <Layout
        title={'Solo Dueño'}
        description={'Loguin del Dev'}
      >
        <div className={styles.contenedor}>
          <h2>Login solo Dev</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
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
