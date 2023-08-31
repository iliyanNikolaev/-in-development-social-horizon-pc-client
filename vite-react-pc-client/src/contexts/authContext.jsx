import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { register, login, logout } from '../services/authService'

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [authUserData, setAuthUserData] = useState({});
    const navigate = useNavigate();

    async function registerHandler(username, password) {
        try {
            const userData = await register(username, password);

            setAuthUserData(prevState => userData);

            navigate('/');
        } catch (err) {
            throw err;
        }
    }

    async function loginHandler(username, password) {
        try {
            const userData = await login(username, password);

            setAuthUserData(prevState => userData);

            navigate('/');
        } catch (err) {
            throw err;
        }
    }

    async function logoutHandler() {
        try {
            await logout();

            setAuthUserData(prevState => {});

            navigate('/');
        } catch (err) {
            throw err;
        }
    }

    const ctx = {
        authUserData,
        registerHandler,
        loginHandler,
        logoutHandler
    }
    
    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    )
}