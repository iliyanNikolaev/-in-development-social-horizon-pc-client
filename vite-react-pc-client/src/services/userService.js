import { get } from "../api/request.js";

const endpoints = {
    byId: '/api/users/'
}

export async function getUserById(userId) {
    try {
        const user = await get(endpoints.byId + userId);

        return user;
    } catch (err) {
        throw err;
    }
}