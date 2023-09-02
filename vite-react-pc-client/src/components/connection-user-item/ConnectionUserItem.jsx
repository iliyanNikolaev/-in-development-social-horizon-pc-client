import "./connection-user-item.css"

import { Link } from "react-router-dom"

export default function ConnectionUserItem({
  user
}) {
  return (
    <div className="connection-user-item-container">
        <img className="connection-profile-pic" src={user.profilePicture} alt="profile-pic" />
        <span className="connection-username"><Link to={`/profile/${user._id}`} className="connection-link">{user.username}</Link></span>
    </div>
  )
}
