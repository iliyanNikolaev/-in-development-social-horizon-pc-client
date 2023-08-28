import ConnectionUserItem from '../connection-user-item/ConnectionUserItem'
import './rightbar.css'

export default function RightBar() {
  return (
    <div className="rightbar-container">
        <div className="connections-wrapper">
            <h2 className="section-header">Connections</h2>

            <ConnectionUserItem />
            <ConnectionUserItem />
            <ConnectionUserItem />
            <ConnectionUserItem />
            <ConnectionUserItem />
        </div>
    </div>
  )
}
