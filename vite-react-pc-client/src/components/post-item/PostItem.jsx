import './post-item.css'

import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/authContext'

import { Link } from 'react-router-dom';

import { likeUnlikePost } from '../../services/postService';

import LikesModal from '../likes-modal/LikesModal';
import CommentsModal from '../comments-modal/CommentsModal';

export default function PostItem({
    post
}) {

    const { authUserData } = useContext(AuthContext);

    const [postIsLiked, setPostIsLiked] = useState(false);

    const [likes, setLikes] = useState(post.likes);

    const [likesIsOpen, setLikesIsOpen] = useState(false);

    const [commentsIsOpen, setCommentsIsOpen] = useState(false);

    useEffect(() => {
        post.likes.forEach(p => {
            if (p._id == authUserData?._id) {
                setPostIsLiked(true);
            }
        });
    }, [post]);

    async function likeUnlikeHandler() {
        await likeUnlikePost(post._id);
        if (postIsLiked) {
            setPostIsLiked(false);
            setLikes(prev => prev.filter(x => x.username != authUserData.username));
        } else {
            setPostIsLiked(true);
            setLikes(prev => [...prev, { _id: authUserData._id, username: authUserData.username, profilePicture: authUserData.profilePicture }]);
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
                {post.image != '' ? <img className="post-item-img" src={post.image} alt="post-img" /> : null}
            </div>
            <div className="post-item-reactions">

                <div className="likes-container">
                    <div className="likes-show-button" onClick={() => setLikesIsOpen(!likesIsOpen)}>
                        <i className="fas fa-thumbs-up likes"></i>
                        <span className="likes-count">{likes.length} likes</span>
                    </div>
                </div>

                <div className="comments-container">

                    <div className="comments-show-button" onClick={() => setCommentsIsOpen(true)}>
                        <i className="fas fa-comment comments"></i>
                        <span className="comments-count">{post.comments.length} comments</span>
                    </div>
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

                {/* modals */}
                {likesIsOpen && <LikesModal likes={likes} setLikesIsOpen={setLikesIsOpen}/>}
                {commentsIsOpen && <CommentsModal setCommentsIsOpen={setCommentsIsOpen} postId={post._id}/> }
        </div>
    )
}
