import './profile.css'

import RightBar from '../../components/rightbar/RightBar'
import ProfileLeftbar from '../../components/profile-leftbar/ProfileLeftbar'

import { useParams } from 'react-router-dom';

export default function Profile() {
  
  const { userId } = useParams();

  return (
    <div className="profile-container">

      <div className="profile-left-bar">
        <ProfileLeftbar userId={userId}/>
      </div>

      <div className="profile-right-bar">
        <RightBar />
      </div>
      
    </div>
  )
}
