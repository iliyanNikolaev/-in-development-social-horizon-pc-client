import { get, post, put, del } from '../api/request'

const endpoints = {
    fromCurrentUser: '/api/posts/from/',
    firstTen: '/api/posts/news/guest',
    newsFeed: '/api/posts/news/followings',
    likeUnlike: (id) => `/api/posts/${id}/like`
}

export async function getPostsFromCurrentUser(userId) {
    try {
        const posts = await get(endpoints.fromCurrentUser + userId);

        return posts;
    } catch (err) {
        throw err;
    }
}

export async function getFirstTenPosts() {
    try {
        const posts = await get(endpoints.firstTen);

        return posts;
    } catch (err) {
        throw err;
    }
}

export async function getNewsFeedPosts() {
    try {
        const posts = await get(endpoints.newsFeed);

        return posts;
    } catch (err) {
        throw err;
    }
}

export async function likeUnlikePost(postId) {
    try {
        await post(endpoints.likeUnlike(postId));
    } catch (err) {
        throw err;
    }
}