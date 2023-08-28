import './feed.css'

import CreatePost from '../create-post/CreatePost'
import PostItem from '../post-item/PostItem'

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed-upperside">
                <CreatePost />
            </div>

            <div className="feed-lowerside">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    )
}
