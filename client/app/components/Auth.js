import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth } from '../Firebase'

const SignIn = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
}

const SignOut = async () => {
  await signOut(auth)
}

export { SignIn, SignOut }
