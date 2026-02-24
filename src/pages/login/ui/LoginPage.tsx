import { LoginForm } from "features/auth";

export const LoginPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <aside>
                <h1> Добро пожаловать! </h1>
            </aside>
            <main style={{ marginTop: '20px' }}>
                <LoginForm />
            </main>
        </div>
    )
}

// import { useEffect, useState } from 'react';
// import { useUser } from 'entities/user';
// import { Button, Input } from 'shared';
// import { api } from 'shared/api';

// export const LoginPage = () => {
//     const [status, setStatus] = useState<'checking' | 'invalid' | 'valid'>('checking');
//     const [name, setName] = useState('');
//     const { login } = useUser();

//     useEffect(() => {
//         const params = new URLSearchParams(window.location.search);
//         const token = params.get('invite') ?? '';

//         if (!token) {
//             setStatus('invalid');
//             return;
//         }

//         const checkInvite = async () => {
//             try {
//                 const isValid = await api.checkInvite(token);
//                 setStatus(isValid ? 'valid' : 'invalid');
//             } catch (error) {
//                 setStatus('invalid');
//             } finally {

//             }
//         }

//         checkInvite();
//     }, []);

//     if (status === 'checking') {
//         return <div>Проверка приглашения...</div>;
//     }

//     if (status === 'invalid') {
//         return (
//             <div style={{ textAlign: 'center', marginTop: '50px' }}>
//                 <h2>Доступ закрыт</h2>
//                 <p>У вас нет дуйствующего приглашения.</p>
//                 <small>Попробуйте перейти по ссылке: ?invite=secret-invire-123</small>
//             </div>
//         );
//     }

//     const handleEnter = () => {
//         if (!name.trim()) return;
//         login(name);

//         window.history.replaceState({}, '', window.location.pathname);
//     };

//     return (
//         <div style={{ textAlign: 'center', marginTop: '50px' }}>
//             <h2>Добро пожаловать!</h2>
//             <p>Вы приглашены в закрытый чат.</p>
//             <div style={{ marginTop: '20px' }}>
//                 <Input
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Введите ваше имя"
//                 />
//                 <Button onClick={handleEnter} style={{ marginLeft: '10px' }}>
//                     Войти
//                 </Button>
//             </div>
//         </div>
//     );
// };