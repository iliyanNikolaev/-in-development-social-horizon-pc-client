import { post, get } from '../api/request.js';
import { setUserData, clearUserData } from '../utils/localStorageUserData.js';

const endpoints = {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout'
}

export async function login(username, password) {
    try {
        const userData = await post(endpoints.login, { username, password });

        setUserData(userData);

        return userData;
    } catch (err) {
        throw err;
    }
}

export async function register(username, password) {
    try {
        const userData = await post(endpoints.register, { username, password });

        setUserData(userData);

        return userData;
    } catch (err) {
        throw err;
    }
}

export async function logout() {
    try {
        await get(endpoints.logout);

        clearUserData();
    } catch (err) {
        throw err;
    }
}