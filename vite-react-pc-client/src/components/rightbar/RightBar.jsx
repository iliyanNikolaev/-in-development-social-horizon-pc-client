import ConnectionUserItem from '../connection-user-item/ConnectionUserItem'
import './rightbar.css'

import { people } from '../../dummydata';

export default function RightBar() {
  return (
    <div className="rightbar-container">
        <div className="connections-wrapper">
            <h2 className="section-header">Connections</h2>

            { people.map(p => <ConnectionUserItem key={p.id} user={p}/>) }
        </div>
    </div>
  )
}
