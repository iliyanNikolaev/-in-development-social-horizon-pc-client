import './feed.css'
import { Link, useNavigate } from 'react-router-dom'

import CreatePost from '../create-post/CreatePost'
import PostsList from '../posts-list/PostsList'

import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/authContext'
import { createPost, getFirstTenPosts, getNewsFeedPosts } from '../../services/postService'

export default function Feed() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    const { authUserData } = useContext(AuthContext);

    if(!authUserData?.username) {
        // ако потребителя не е логнат, сървъра ще му върне първите 10 поста в базата, за да има какво да изрендим във feed-a 
        useEffect(() => {
            getFirstTenPosts()
                .then(data => setPosts(data.reverse()))
                .catch(err => navigate('/') /* todo... show error message with error component */);
        }, []);
    } else { 
        // ако потребителя е логнат, сървъра му връща постовете на последваните от него хора, 
        // ако постовете са по-малко от 10, сървъра ще ги допълни до 10 със случайни постове
        useEffect(() => {
            getNewsFeedPosts()
                .then(data => setPosts(data.reverse()))
                .catch(err => navigate('/') /* todo... show error message with error component */);
        }, []);
    }

    async function createPostHandler(postData) {
        
        try {
            const post = await createPost(postData);
            
            setPosts(prev => [post, ...prev]);
        } catch (err) {
            throw err;
        }
    }

    return (
        <div className="feed">
            {authUserData?.username // ако има потребител компонента за създаване на пост се рендерира
                ? <div className="feed-upperside">
                    <CreatePost createPostHandler={createPostHandler} />
                </div>
                : <p className='guest-warning'> 
                    <Link className="warning-link" to="/login">Log in </Link>
                    or
                    <Link className="warning-link" to="/register"> register </Link>
                    to see the all features of Social Horizon :)
                </p>}

            <div className="feed-lowerside">
                <PostsList posts={posts} />
            </div>
        </div>
    )
}
