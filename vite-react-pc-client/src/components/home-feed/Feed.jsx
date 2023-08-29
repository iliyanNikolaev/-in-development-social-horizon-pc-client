import './feed.css'

import CreatePost from '../create-post/CreatePost'
import PostsList from '../posts-list/PostsList'

import { posts } from '../../dummydata'

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed-upperside">
                <CreatePost />
            </div>

            <div className="feed-lowerside">
                <PostsList posts={posts} />
            </div>
        </div>
    )
}
