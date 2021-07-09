import { useContext, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from '../contexts/AuthContext';

import '../styles/login.scss';

export function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { setAuth } = useContext(AuthContext);

  const history = useHistory();

  function handleLogin(event: FormEvent) {
    event.preventDefault()
    if (process.env.REACT_APP_LOGIN === login && process.env.REACT_APP_PASSWORD === password) {
      setAuth(true);
      history.push('/Home');
    }
  }

  return (
    <div id="page-login">
      <form onSubmit={handleLogin}>
        <div className="login-title">
          <h1>LOGIN</h1>
        </div>
        <div className="login-content">

          <input
            onChange={event => setLogin(event.target.value)}
            placeholder="Login"
          />
          <input
            onChange={event => setPassword(event.target.value)}
            type="password"
            placeholder="Senha"
          />

          <button type='submit'>Entrar</button>
        </div>
      </form>
    </div>
  );
}