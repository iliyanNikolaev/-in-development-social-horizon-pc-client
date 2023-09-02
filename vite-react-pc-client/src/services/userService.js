import { get, post } from "../api/request.js";

const endpoints = {
    byId: '/api/users/',
    followUnfollow: (id) => `/api/users/${id}/follow`,
}

export async function getUserById(userId) {
    try {
        const user = await get(endpoints.byId + userId);

        return user;
    } catch (err) {
        throw err;
    }
}

export async function followUnfollowUserById(id) {
    try {
        await post(endpoints.followUnfollow(id));
    } catch (err) {
        throw err;
    }
}