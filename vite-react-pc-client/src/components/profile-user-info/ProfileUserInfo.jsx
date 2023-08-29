import './profile-user-info.css'

export default function ProfileUserInfo() {
    return (
        <>
            <div className="profile-userinfo">
                <img className="cover-pic" src="/assets/surf.avif" alt="cover-pic" />
                <img className="profile-pic" src="/assets/people/mila-kunis.jpg" alt="profile-pic" />
                <h2 className="username">Mila Kunis</h2>
                <div className="userinfo-connections">
                    <span className="userinfo-connections-followers">12 followers</span>
                    <span className="userinfo-connections-followings">6 followings</span>
                </div>
            </div>

            <div className="user-actions">
                <span className="user-action-link"><i className="fas fa-envelope user-action-link-message"></i> Send Message</span>
                <span className="user-action-link"><i className="fas fa-heart user-action-link-follow"></i> Follow</span>
            </div>

    </>
  )
}
