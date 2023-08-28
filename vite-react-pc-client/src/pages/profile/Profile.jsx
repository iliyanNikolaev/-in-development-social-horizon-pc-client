import PostItem from '../../components/post-item/PostItem'
import RightBar from '../../components/rightbar/RightBar'
import './profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-left-bar">
        left
      </div>

      <div className="profile-right-bar">
        <RightBar />
      </div>
    </div>
  )
}
