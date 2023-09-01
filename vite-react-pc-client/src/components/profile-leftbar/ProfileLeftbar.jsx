import './profile-leftbar.css'

import PostsList from '../posts-list/PostsList';
import ProfileUserInfo from '../profile-user-info/ProfileUserInfo';

import { useState, useEffect } from 'react';
import { getPostsFromCurrentUser } from '../../services/postService';

import { useNavigate } from 'react-router-dom';


export default function ProfileLeftbar({
  userId
}) {

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsFromCurrentUser(userId)
      .then(posts =>{
        setPosts(posts);
      })
      .catch(err => { return navigate('/') });
      /* todo... show error message with error component, 
      ако в url-a е написано нарочно нещо различно от валидно userId, това е компонента, който ще получи първи грешката
      от сървъра, и като ретърнне navigate tо ... спира изпълнението на всичко надолу и ренди грешката*/
  }, [userId])

  return (
    <div className="profile-leftbar">
      <div className="profile-leftbar-top">
        <ProfileUserInfo userId={userId}/>
      </div>

      <hr />

      <div className="profile-left-bar-bottom">
        { posts.length > 0 ? <PostsList posts={posts} /> : <p>This user no have posts yet...</p>}

      </div>
    </div>
  )
}
