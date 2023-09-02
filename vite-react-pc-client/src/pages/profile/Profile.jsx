import './profile.css'

import RightBar from '../../components/rightbar/RightBar'
import ProfileLeftbar from '../../components/profile-leftbar/ProfileLeftbar'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserById } from '../../services/userService';

import { useNavigate } from 'react-router-dom';

export default function Profile() {

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});

  const { userId } = useParams();

  useEffect(() => {
    getUserById(userId)
      .then(data => setCurrentUser(data))
      .catch(err => { return navigate('/') });
  }, [userId])
  /* todo... show error message with error component, 
  ако в url-a е написано нарочно нещо различно от валидно userId, това е компонента, който ще получи първи грешката
  от сървъра, и като ретърнне navigate tо ... спира изпълнението на всичко надолу и ренди грешката*/


  return (
    <div className="profile-container">

      <div className="profile-left-bar">
        { currentUser._id ? <ProfileLeftbar user={currentUser} /> : <p>Loading...</p>}
        
      </div>

      <div className="profile-right-bar">
        <RightBar />
      </div>

    </div>
  )
}
