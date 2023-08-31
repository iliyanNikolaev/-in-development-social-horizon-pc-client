import './feed.css'
import { Link } from 'react-router-dom'

import CreatePost from '../create-post/CreatePost'
import PostsList from '../posts-list/PostsList'

import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'

import { posts } from '../../dummydata'

export default function Feed() {

    const { authUserData } = useContext(AuthContext);

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
