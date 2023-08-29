import './feed.css'

import CreatePost from '../create-post/CreatePost'
import PostItem from '../post-item/PostItem'

import { posts } from '../../dummydata'

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed-upperside">
                <CreatePost />
            </div>

            <div className="feed-lowerside">
                { posts.map(p => <PostItem key={p.id} post={p} />)}
            </div>
        </div>
    )
}
