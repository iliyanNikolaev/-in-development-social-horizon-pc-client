import "./connection-user-item.css"

export default function ConnectionUserItem({
  user
}) {
  return (
    <div className="connection-user-item-container">
        <img className="connection-profile-pic" src={user.profilePicture} alt="profile-pic" />
        <span className="connection-username">{user.username}</span>
    </div>
  )
}
