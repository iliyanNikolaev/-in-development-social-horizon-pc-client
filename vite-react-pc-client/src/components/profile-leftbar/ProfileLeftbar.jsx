import './profile-leftbar.css'

import PostsList from '../posts-list/PostsList';
import ProfileUserInfo from '../profile-user-info/ProfileUserInfo';

import { useState, useEffect } from 'react';
import { getPostsFromCurrentUser } from '../../services/postService';


export default function ProfileLeftbar({
  userId
}) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsFromCurrentUser(userId)
      .then(posts =>{
        setPosts(posts);
      })
      .catch(err => alert(err.message));
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
