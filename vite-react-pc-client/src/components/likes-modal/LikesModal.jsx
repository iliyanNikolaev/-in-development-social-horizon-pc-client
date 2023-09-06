import './likes-modal.css'
import { Link } from 'react-router-dom'
export default function LikesModal({
    setLikesIsOpen,
    likes
}) {
    return (
        <div className="likes-modal-container">
            <div className="overlay" onClick={() => setLikesIsOpen(false)}></div>
            
            <div className="likes-modal-wrapper">
                <button className="close-button" onClick={() => setLikesIsOpen(false)}>close</button>
                <h2 className="likes-heading">Likes</h2>
                { likes.length > 0 ?
                <ul className="likes-list">
                    {likes.map((u) => 
                    <li className="like-user-item" 
                    key={u._id}> 
                    <img className="like-profile-pic" src={u.profilePicture} alt="profile-pic" /> 
                    <Link className="like-profile-link" to={`/profile/${u._id}`}>{u.username}</Link>
                    </li>)}
                </ul> 
                : <p className="no-likes-msg"> This post no have likes yet </p> }

            </div>

        </div>
    )
}
