import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { SignIn, SignOut } from './Auth'

const Header = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      <div>
        <h1>This is the header</h1>
        {
          user
            ? <button className='sign-out' onClick={SignOut}>SignOut</button>
            : <button className='sign-in' onClick={SignIn}>SignIn</button>
        }
      </div>
    </>
  )
}

export default Header
