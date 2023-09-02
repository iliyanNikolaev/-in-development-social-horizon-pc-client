import './profile-leftbar.css'

import PostsList from '../posts-list/PostsList';
import ProfileUserInfo from '../profile-user-info/ProfileUserInfo';

import { useState, useEffect } from 'react';
import { getPostsFromCurrentUser } from '../../services/postService';


export default function ProfileLeftbar({
  user
}) {

  const [posts, setPosts] = useState(false); //сетвам го на false за лесна проверка, aко е false няма да изренди компонента с постс лист, а ще изренди лоадинг...

  useEffect(() => {
    getPostsFromCurrentUser(user._id)
      .then(posts => {
        setPosts(posts);
      });
  }, [user]);
  // не е необходимо да кетчваме, понеже горния компонент в дървото
  // е проверил userId-то, и ако то е невалидно текущият компонент няма да се рендерира

  return (
    <div className="profile-leftbar">
      <div className="profile-leftbar-top">
        <ProfileUserInfo user={user} />
      </div>

      <hr />

      <div className="profile-left-bar-bottom">
        { posts ? 
        <>{posts.length > 0 ? <PostsList posts={posts} /> : <p>This user no have posts yet...</p>}</> 
        : <p>Loading...</p>}
        

      </div>
    </div>
  )
}
