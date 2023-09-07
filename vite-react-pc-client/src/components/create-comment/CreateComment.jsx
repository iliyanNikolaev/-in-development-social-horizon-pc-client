import './create-comment.css'

import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';

export default function CreateComment({
    createCommentHandler
}) {

    const [comment, setComment] = useState('');

    const { authUserData } = useContext(AuthContext);

    async function onComment() {
        try {
            await createCommentHandler({ comment });
            setComment('');
        } catch (err) {
            alert(err.message)
        }

    }

    return (
        <div className="create-comment-container">
            <h2 className="create-comment-heading">Create Comment</h2>

            <div className="create-comment-form">
                <img className="create-comment-profilePic" src={authUserData.profilePicture} alt="profile-pic" />
                <input className="comment-input"
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)} />
                <div className="post-comment-button" onClick={onComment}><i className="fas fa-share"></i></div>
            </div>
        </div>
    )
}
