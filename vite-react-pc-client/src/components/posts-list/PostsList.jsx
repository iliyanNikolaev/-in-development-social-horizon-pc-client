import './posts-list.css'

import PostItem from '../post-item/PostItem'

export default function PostsList({
    posts
}) {
  return (
    <div className="posts-list-container">
        { posts.map(p => <PostItem key={p.id} post={p} />) }
    </div>
  )
}
