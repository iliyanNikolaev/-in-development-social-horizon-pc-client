import './profile-user-info.css'
import { useState, useEffect } from 'react'

import { getUserById } from '../../services/userService'

export default function ProfileUserInfo({
    userId
}) {

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        getUserById(userId)
            .then(user => {
                setCurrentUser(user);
            })
    }, [userId]);

    return (
        <>
            <div className="profile-userinfo">
                <img className="cover-pic" src={currentUser.coverPicture} alt="cover-pic" />
                <img className="profile-pic" src={currentUser.profilePicture} alt="profile-pic" />
                <h2 className="username">{currentUser.username}</h2>
                <div className="userinfo-connections">
                    <span className="userinfo-connections-followers">{currentUser.followers?.length} followers</span>
                    <span className="userinfo-connections-followings">{currentUser.followings?.length} followings</span>
                </div>
            </div>

            <div className="user-actions">
                <span className="user-action-link"><i className="fas fa-envelope user-action-link-message"></i> Send Message</span>
                <span className="user-action-link"><i className="fas fa-heart user-action-link-follow"></i> Follow</span>
            </div>

    </>
  )
}
