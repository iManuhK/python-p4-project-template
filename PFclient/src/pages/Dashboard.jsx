import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'
import Loan from './Loan'

function Dashboard() 

{
  const {currentUser} = useContext(UserContext)
  return (
    <div id="dashboard">
      <h2>My Profile</h2>
      <h3>Welcome <span className='welcome-username'>{currentUser && currentUser.username}</span></h3>
      <Loan />

    </div>
  )
}

export default Dashboard