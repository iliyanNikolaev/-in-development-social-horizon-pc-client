import './topbar.css'

import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'

export default function Topbar() {

    const { authUserData } = useContext(AuthContext);

    return (
        <div className="topbar-container">
            <div className="topbar-leftside">
                <span className="logo"><i className="fas fa-mobile-alt"></i> Social Horizon</span>
            </div>
            <div className="topbar-center">
                <div className="searchbar">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="search for user..." />
                </div>
            </div>
            <div className="topbar-rightside">
                <Link to="/" className="icon-item">
                    <i className="fas fa-newspaper"></i>
                </Link>
                {!authUserData?.username
                    ? <>
                        <Link to="/login" className="icon-item">
                            <i className="fas fa-sign-in-alt"></i>
                        </Link>
                        <Link to="/register" className="icon-item">
                            <i className="fas fa-registered"></i>
                        </Link>
                    </>
                    : <>
                        <div className="icon-item">
                            <i className="fas fa-envelope"></i>
                            <p className="icon-badge">1</p>
                        </div>
                        <div className="icon-item">
                            <i className="fas fa-bell"></i>
                            <p className="icon-badge">2</p>
                        </div>
                        <Link to='/logout' className="icon-item logoutButton">
                            <i className="fas fa-sign-out-alt"></i>
                        </Link>
                        <Link to='/profile' className="icon-item profile">
                            <i className="fas fa-user-circle"></i>
                        </Link>
                    </>}
            </div>
        </div>
    )
}
