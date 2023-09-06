import { getPostComments } from '../../services/postService';
import './comments-modal.css'

import { useState, useEffect } from 'react'

export default function CommentsModal({
    setCommentsIsOpen,
    postId
}) {

    const [comments, setComments] = useState(false);

    useEffect(() => {
        getPostComments(postId) 
            .then(data => setComments(data))
            .catch(err => alert(err.message));
    }, [])

    return (
        <div className="comments-modal-container">
            <div className="overlay" onClick={() => setCommentsIsOpen(false)}></div>

            <div className="comments-modal-wrapper">
                <button className="close-button" onClick={() => setCommentsIsOpen(false)}>close</button>
                <h2 className="comments-heading">Comments</h2>

                { comments 
                    ? <>
                        { comments.length > 0 
                        ? <>
                            <ul className="comments-list">
                                { comments.map((c, i) => <li key={i}>
                                    {c.owner.username}: {c.comment}
                                </li>)}
                            </ul>
                        </> 
                        : <p className="no-comments-msg">No comments yet for this post</p>}
                    </> 
                    : <p>Loading...</p>}

            </div>

        </div>
    )
}
