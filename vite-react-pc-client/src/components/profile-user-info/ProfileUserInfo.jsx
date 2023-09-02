import './profile-user-info.css'
import { useState, useEffect, useContext } from 'react'

import { AuthContext } from '../../contexts/authContext'

import { followUnfollowUserById } from '../../services/userService'

export default function ProfileUserInfo({
    user
}) {

    const { authUserData } = useContext(AuthContext);

    const [followUser, setFollowUser] = useState(false);

    useEffect(() => {
        user.followers?.forEach(f => {
            if (f._id == authUserData?._id) {
                setFollowUser(true);
            }
        })
        // не е необходимо да кетчваме, понеже горния компонент в дървото
        // е проверил userId-то, и ако то е невалидно текущият компонент няма да се рендерира
    }, []);

    async function followUnfollowHandler() {
        await followUnfollowUserById(user._id);

        setFollowUser(prev => !prev);
    }

    return (
        <>
            <div className="profile-userinfo">
                <img className="cover-pic" src={user.coverPicture} alt="cover-pic" />
                <img className="profile-pic" src={user.profilePicture} alt="profile-pic" />
                <h2 className="username">{user.username}</h2>
                <div className="userinfo-connections">
                    <span className="userinfo-connections-followers">{user.followers?.length} followers</span>
                    <span className="userinfo-connections-followings">{user.followings?.length} followings</span>
                </div>
            </div>

            {!authUserData?.username || authUserData._id == user._id
                ? null
                : <div className="user-actions">
                    <span className="user-action-link"><i className="fas fa-envelope user-action-link-message"></i> Send Message</span>
                    <button className="user-action-link" onClick={followUnfollowHandler}><i className="fas fa-heart user-action-link-follow"></i> {followUser ? 'Unfollow' : 'Follow'}</button>
                </div>}
        </>
    )
}
