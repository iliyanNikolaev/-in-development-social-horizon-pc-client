import './profile-leftbar.css'

export default function ProfileLeftbar() {
  return (
    <div className="profile-leftbar">

      <div className="profile-leftbar-top">
        <div className="profile-userinfo">
          <img className="cover-pic" src="/assets/surf.avif" alt="cover-pic" />
          <img className="profile-pic" src="/assets/people/mila-kunis.jpg" alt="profile-pic" />
          <h2 className="username">Mila Kunis</h2>
        </div>

        <div className="user-actions">
          <span className="user-action-link"><i className="fas fa-envelope user-action-link-message"></i> Send Message</span>
          <span className="user-action-link"><i className="fas fa-heart user-action-link-follow"></i> Follow</span>
        </div>
      </div>
      <hr />
    </div>
  )
}
