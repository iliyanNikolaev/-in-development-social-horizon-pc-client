import './likes-modal.css'
export default function LikesModal({
    likes
}) {
    return (
        <div className="likes-modal-container">
            <div className="likes-modal-wrapper">
                { likes.length > 0 ?
                <ul className="likes-list">
                    {likes.map((u) => <li className="like-user-item" key={u._id}> <img className="like-profile-pic" src={u.profilePicture} alt="profile-pic" /> {u.username} </li>)}
                </ul> 
                : <p> This post no have likes yet </p> }
            </div>
        </div>
    )
}
