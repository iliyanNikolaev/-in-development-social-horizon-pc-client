import './create-post.css'

export default function CreatePost() {
    return (
        <div className="create-post-container">
            <h2 className="create-post-heading">Create post</h2>
            <div className="create-post-upper">
                <img className="create-post-profile-pic" src="/assets/profile-pic.png" alt="profile-pic" />
                <input className="create-post-input" type="text" placeholder="What do you thing?" />
            </div>

            <div className="create-post-lower">
            <i className="fas fa-image"></i>
            <span>Add photo</span>
            </div>
        </div>
    )
}
