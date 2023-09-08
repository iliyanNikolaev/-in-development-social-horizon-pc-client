import './create-post.css'

import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/authContext';
import { uploadImg } from '../../utils/uploadImg';


export default function CreatePost({
    createPostHandler
}) {
    const [content, setContent] = useState('');

    const [image, setImage] = useState(null);

    const { authUserData } = useContext(AuthContext);

    async function formSubmit(e) {
        e.preventDefault();

        try {
            const postData = {
                content
            }

            if(image) {
                try {
                    const imgUrl = await uploadImg(image);

                    postData.image = imgUrl;   
                } catch (err) {
                    throw new Error(err.message);
                }
            }

            await createPostHandler(postData);

            setContent("");
            setImage(null);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="create-post-container">
            <h2 className="create-post-heading">Create post</h2>
            <form onSubmit={formSubmit}>
                <div className="create-post-upper">
                    <img className="create-post-profile-pic" src={authUserData?.profilePicture} alt="profile-pic" />
                    <input 
                        className="create-post-input" 
                        type="text" 
                        placeholder="What do you thing?"
                        value={content} 
                        onChange={(e) => {setContent(e.target.value)}}/>
                </div>

                <div className="create-post-lower">
                    <label htmlFor="file" className="add-file">
                    <span><i className="fas fa-image"></i> Add photo</span>
                    <input 
                        type="file" 
                        id='file' 
                        onChange={(e) => setImage(e.target.files[0])}/>
                        {image && <span className="added-file">Image is ready</span>}
                    </label>

                    <button className="post-button">Post</button>
                </div>

            </form>
        </div>
    )
}
