import { useState } from 'react';
import { useAuth } from '../model/context';


export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useAuth();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Вход в систему</h2>

            {error && <div className="error">{error}</div>}

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
            />

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Загрузка...' : 'Войти'}
            </button>
        </form>
    );
};