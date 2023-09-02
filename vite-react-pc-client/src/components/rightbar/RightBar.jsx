import ConnectionUserItem from '../connection-user-item/ConnectionUserItem'
import './rightbar.css'

import { getAllUsers } from '../../services/userService'
import { useEffect, useState } from 'react';

export default function RightBar() {
  const [users, setUsers] = useState(false);

  useEffect(() => {
    getAllUsers()
      .then(data => {
        setUsers(data);
      });
  }, [])

  return (
    <div className="rightbar-container">
        <div className="connections-wrapper">
            <h2 className="section-header">All users in Social Horizon</h2>

            { users 
            ? <>{ users.map(p => <ConnectionUserItem key={p._id} user={p}/>) }</>
            : <p>Loading...</p>}
        </div>
    </div>
  )
}
