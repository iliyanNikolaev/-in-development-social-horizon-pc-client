import './post-item.css'

import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/authContext'

import { Link } from 'react-router-dom';

import { likeUnlikePost } from '../../services/postService';

export default function PostItem({
    post
}) {

    const { authUserData } = useContext(AuthContext);

    const [postIsLiked, setPostIsLiked] = useState(false);

    const [likesCount, setLikesCount] = useState(post.likes.length);

    useEffect(() => {
        post.likes.forEach(p => {
            if(p._id == authUserData?._id) {
                setPostIsLiked(true);
            } 
        });
    }, [post]);

    async function likeUnlikeHandler() {
        await likeUnlikePost(post._id);

        if(postIsLiked) {
            setPostIsLiked(false);
            setLikesCount(prev => prev - 1);
        } else {
            setPostIsLiked(true);
            setLikesCount(prev => prev + 1);
        }
    }

    return (
        <div className="post-item-container">
            <div className="post-item-userinfo">
                <img className="post-item-profile-pic" src={post.owner.profilePicture} alt="profile-pic" />
                <div className="username-date">
                    <p className="post-item-owner-username"><Link className="postItem-ownerProfile" to={`/profile/${post.owner?._id}`}>{post.owner?.username}</Link></p>
                    <p className="post-item-date">Published: {post.createdAt}</p>
                </div>
            </div>
            <div className="post-item-content">
                <p className="post-item-textcontent">
                    {post?.content}
                </p>
                <img className="post-item-img" src={post.image} alt="post-img" />
            </div>
            <div className="post-item-reactions">
                <div className="likes-container">
                    <i className="fas fa-thumbs-up likes"></i>
                    <span className="likes-count">{likesCount} likes</span>
                </div>

                <div className="likes-container">
                    <i className="fas fa-comment comments"></i>
                    <span className="likes-count">{post.comments.length} comments</span>
                </div>
            </div>
            {authUserData?.username
                ? <>
                    <hr />
                    <div className="post-item-actions">
                        <button className="like-action" onClick={likeUnlikeHandler}>
                            <span>{postIsLiked ? 'Unlike' : 'Like'}</span>
                            <i className="far fa-thumbs-up"></i>
                        </button>

                        <div className="comment-action">
                            <span>Comment</span>
                            <i className="far fa-comment-dots"></i>
                        </div>
                    </div></>
                : null}
        </div>
    )
}
