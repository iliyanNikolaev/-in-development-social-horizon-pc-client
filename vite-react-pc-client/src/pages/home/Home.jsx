import './home.css'

import Feed from '../../components/home-feed/Feed'
import RightBar from '../../components/rightbar/RightBar'

import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'

export default function Home() {

  const { authUserData } = useContext(AuthContext);

  return (
    <div className="home-page-container">

      <div className="home-left-bar">
        <Feed />
      </div>
      
      {authUserData?.username
        ? <div className="home-right-bar">
          <RightBar />
        </div>
        : null}
    </div>
  )
}
