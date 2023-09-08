import './profile-user-info.css'
import { useState, useEffect, useContext, useRef } from 'react'

import { AuthContext } from '../../contexts/authContext'

import { followUnfollowUserById } from '../../services/userService'

export default function ProfileUserInfo({
    user,
    setCurrentUser
}) {

    const { authUserData } = useContext(AuthContext);

    const [userIsFollowed, setUserIsFollowed] = useState(false);

    useEffect(() => {
        user.followers.forEach(f => {
            if (f._id == authUserData?._id) {
                setUserIsFollowed(true);
            } else {
                setUserIsFollowed(false);
            }
        })
        // не е необходимо да кетчваме, понеже горния компонент в дървото
        // е проверил userId-то, и ако то е невалидно текущият компонент няма да се рендерира
    }, [user]);

    async function followUnfollowHandler() {
        await followUnfollowUserById(user._id);

        if(userIsFollowed) {
            setUserIsFollowed(false);
            setCurrentUser(state => ({ ...state, followers: user.followers.filter( f => f._id != authUserData?._id)}));
        } else {
            setUserIsFollowed(true);
            setCurrentUser(state => ({...state, followers: [...user.followers, authUserData]}))
        }
    }

    return (
        <>
            <div className="profile-userinfo">
                <img className="cover-pic" src={user.coverPicture} alt="cover-pic" />
                <img className="profile-pic" src={user.profilePicture} alt="profile-pic" />
                <h2 className="username">{user.username}</h2>
                <div className="userinfo-connections">
                    <span className="userinfo-connections-followers">{user.followers.length} followers</span>
                    <span className="userinfo-connections-followings">{user.followings.length} followings</span>
                </div>
            </div>

            {!authUserData?.username || authUserData._id == user._id
                ? null
                : <div className="user-actions">
                    <span className="user-action-link"><i className="fas fa-envelope user-action-link-message"></i> Send Message</span>
                    <button className="user-action-link" onClick={followUnfollowHandler}><i className="fas fa-heart user-action-link-follow"></i> {userIsFollowed ? 'Unfollow' : 'Follow'}</button>
                </div>}
        </>
    )
}
