import './home.css'

import Feed from '../../components/home-feed/Feed'
import RightBar from '../../components/rightbar/RightBar'

export default function Home() {
  return (
    <div className="home-page-container">
      <div className="home-left-bar">
        <Feed />
      </div>

      <div className="home-right-bar">
        <RightBar />
      </div>
    </div>
  )
}
