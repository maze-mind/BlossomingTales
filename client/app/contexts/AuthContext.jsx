import React, {
  createContext,
  useEffect,
  useState
} from 'react'
import PropTypes from 'prop-types'
import { auth } from '../Firebase'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, [])

  console.log(user)

  return (
    <AuthContext.Provider value={{ user }}>{ children }</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { AuthContext, AuthProvider }
