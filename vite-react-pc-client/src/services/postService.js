import { get, post, put, del } from '../api/request'

const endpoints = {
    fromCurrentUser: '/api/posts/from/',
    firstTen: '/api/posts/news/guest',
    newsFeed: '/api/posts/news/followings',
    likeUnlike: (id) => `/api/posts/${id}/like`,
    create: '/api/posts/create',
    comments: (postId) => `/api/posts/${postId}/comments`
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

export async function createPost(postData) {
    try {
        const createdPost = await post(endpoints.create, postData);

        return createdPost;
    } catch (err) {
        throw err;
    }
}

export async function getPostComments(postId) {
    try {
        const comments = await get(endpoints.comments(postId));

        return comments;
    } catch (err) {
        throw err;
    }
}