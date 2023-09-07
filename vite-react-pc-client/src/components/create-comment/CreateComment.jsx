import './create-comment.css'

import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

export default function CreateComment() {

    const { authUserData } = useContext(AuthContext);

    return (
        <div className="create-comment-container">
            <h2 className="create-comment-heading">Create Comment</h2>

            <form className="create-comment-form">
                <img className="create-comment-profilePic" src={authUserData.profilePicture} alt="profile-pic" />
                <input type="text" />
                <button>Submit</button>
            </form>
        </div>
    )
}
