import "./connection-user-item.css"

export default function ConnectionUserItem() {
  return (
    <div className="connection-user-item-container">
        <img className="connection-profile-pic" src="/assets/profile-pic.png" alt="profile-pic" />
        <span className="connection-username">Iliyan Nikolaev</span>
    </div>
  )
}
