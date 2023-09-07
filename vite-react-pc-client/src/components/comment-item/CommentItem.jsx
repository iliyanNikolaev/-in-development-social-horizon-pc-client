import { Link } from 'react-router-dom'
import './comment-item.css'

export default function CommentItem({
    comment
}) {
  return (
    <div className="comment-item-container">
        <img className="comment-owner-profile-pic" src={comment.owner.profilePicture} alt="profile-pic" />

        <div className="comment-content">
            <Link to={`/profile/${comment.owner._id}`} className="comment-owner-username">{comment.owner.username}</Link>    
            <p className="comment-text">{comment.comment}</p>    
        </div>        
    </div>
  )
}
