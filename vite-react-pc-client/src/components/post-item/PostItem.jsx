import './post-item.css'

export default function PostItem() {
  return (
    <div className="post-item-container">
        <div className="post-item-userinfo">
            <img className="post-item-profile-pic" src="/assets/profile-pic.png" alt="profile-pic" />
            <div className="username-date">
                <p className="post-item-owner-username">ilich</p>
                <p className="post-item-date">Published: 28.08.2023</p>
            </div>
        </div>
        <div className="post-item-content">
            <p className="post-item-textcontent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed adipisci quas et enim asperiores, voluptas delectus soluta earum perferendis quo vitae fuga iure molestias dolores repudiandae inventore assumenda excepturi? Natus?
            </p>
            <img className="post-item-img" src="/assets/ferrari.avif" alt="post-img" />
        </div>
        <div className="post-item-reactions">
            <div className="likes-container">
                <i className="fas fa-thumbs-up likes"></i>
                <span className="likes-count">3 likes</span>
            </div>

            <div className="likes-container">
                <i className="fas fa-comment comments"></i>
                <span className="likes-count">4 comments</span>
            </div>
        </div>
        <hr />
        <div className="post-item-actions">
            <div className="like-action">
                <span>Like</span>
                <i className="far fa-thumbs-up"></i>
            </div>

            <div className="comment-action">
                <span>Comment</span>
                <i className="far fa-comment-dots"></i>
            </div>
        </div>
    </div>
  )
}
