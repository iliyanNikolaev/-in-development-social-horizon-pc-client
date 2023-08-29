import './profile.css'

import RightBar from '../../components/rightbar/RightBar'
import ProfileLeftbar from '../../components/profile-leftbar/ProfileLeftbar'

export default function Profile() {
  return (
    <div className="profile-container">

      <div className="profile-left-bar">
        <ProfileLeftbar />
      </div>

      <div className="profile-right-bar">
        <RightBar />
      </div>
      
    </div>
  )
}
