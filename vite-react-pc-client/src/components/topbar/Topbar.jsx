import './topbar.css';

export default function Topbar() {
  return (
    <div className="topbar-container">
        <div className="topbar-leftside">
            <span className="logo"><i className="fas fa-mobile-alt"></i> Social Horizon</span>
        </div>
        <div className="topbar-center">
            <div className="searchbar">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="search"/>
            </div>
        </div>
        <div className="topbar-rightside">
            <div className="nav-icons">
                <div className="icon-item">
                    <i className="fas fa-sign-in-alt"></i>
                </div>
                <div className="icon-item">
                    <i className="fas fa-registered"></i>
                </div>
                <div className="icon-item">
                    <i className="fas fa-newspaper"></i>
                    <p className="icon-badge">1</p>
                </div>
                <div className="icon-item">
                    <i className="fas fa-envelope"></i>
                    <p className="icon-badge">1</p>
                </div>
                <div className="icon-item">
                    <i className="fas fa-bell"></i>
                    <p className="icon-badge">2</p>
                </div>
                <div className="icon-item">
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </div>
            <img src="/assets/profile-pic.png" alt="profile-pic" />
        </div>
    </div>
  )
}
