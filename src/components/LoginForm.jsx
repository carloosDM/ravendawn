import React, { useState } from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para lidar com o envio do formulário
        // Aqui você pode fazer uma chamada para a API para autenticar o usuário, por exemplo
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Bem Vindo Denovo!</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
