import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';
import '../index.css';

function Login() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleLogin = () => {
    setLoading(true);
    createUser({ name }).then(() => {
      setLoading(false);
      navigate('/search');
    });
  };

  return (
    <div>
      <input
        type="text"
        value={ name }
        onChange={ handleChange }
        data-testid="login-name-input"
      />
      <button
        type="submit"
        data-testid="login-submit-button"
        disabled={ name.length < 3 }
        onClick={ handleLogin }
      >
        Entrar
      </button>
      {loading && <Loading />}
    </div>
  );
}

export default Login;
