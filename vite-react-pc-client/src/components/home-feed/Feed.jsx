import './feed.css'
import { Link } from 'react-router-dom'

import CreatePost from '../create-post/CreatePost'
import PostsList from '../posts-list/PostsList'

import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/authContext'
import { getFirstTenPosts, getNewsFeedPosts } from '../../services/postService'

export default function Feed() {
    const [posts, setPosts] = useState([]);

    const { authUserData } = useContext(AuthContext);

    if(!authUserData) {
        // ако потребителя не е логнат, сървъра ще му върне първите 10 поста в базата, за да има какво да изрендим във feed-a 
        useEffect(() => {
            getFirstTenPosts()
                .then(data => setPosts(data))
                .catch(err => alert(err.message));
        }, []);
    } else { 
        // ако потребителя е логнат, сървъра му връща постовете на последваните от него хора, 
        // ако постовете са по-малко от 10, сървъра ще ги допълни до 10 със случайни постове
        useEffect(() => {
            getNewsFeedPosts()
                .then(data => setPosts(data))
                .catch(err => alert(err.message));
        }, []);
    }

    return (
        <div className="feed">
            {authUserData?.username
                ? <div className="feed-upperside">
                    <CreatePost />
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
