import { commentPostById, getPostComments } from '../../services/postService';
import CommentItem from '../comment-item/CommentItem';
import CreateComment from '../create-comment/CreateComment'; 
import './comments-modal.css';

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

export default function CommentsModal({
    setCommentsIsOpen,
    postId,
    setCommentsCount
}) {

    const { authUserData } = useContext(AuthContext);

    const [comments, setComments] = useState(false);

    useEffect(() => {
        getPostComments(postId)
            .then(data => setComments(data))
            .catch(err => alert(err.message));
    }, []);

    async function createCommentHandler(commentData) {
        const comment = await commentPostById(postId, commentData);

        setComments(prev => [...prev, comment]);
        setCommentsCount(prev => prev + 1);
    }

    return (
        <div className="comments-modal-container">
            <div className="overlay" onClick={() => setCommentsIsOpen(false)}></div>

            <div className="comments-modal-wrapper">
                <button className="close-button" onClick={() => setCommentsIsOpen(false)}>close</button>
                <h2 className="comments-heading">Comments</h2>

                {comments
                    ? <>
                        {comments.length > 0
                            ? <>
                                <ul className="comments-list">
                                    {comments.map((c, i) => <CommentItem key={i} comment={c} />)}
                                </ul>
                            </>
                            : <p className="no-comments-msg">No comments yet for this post</p>}
                    </>
                    : <p>Loading...</p>}

                {authUserData?.username && <CreateComment createCommentHandler={createCommentHandler} />}

            </div>


        </div>
    )
}
