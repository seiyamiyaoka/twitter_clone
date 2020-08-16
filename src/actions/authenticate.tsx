import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode
} from 'react'
import firebase from "../container/firebase"

type ContextProps = {
  currentUser: User | null,
  signIn: Function,
  signOut: Function,
  isUserSignedIn: Function
}

const AuthContext = createContext<Partial<ContextProps>>({})

type User = {
  photoURL?: string | null
}

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

const AuthProvider = ({ children }: IProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const signIn = useCallback(
    async () => {
      const provider = await new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider)
      window.location.replace("/tweets")
    },
    [],
  )

  const signOut = useCallback(
    async () => {
      firebase.auth().signOut()
    },
    []
  )

  const isUserSignedIn = () => {
    // TODO 6: Return true if a user is signed-in.
    return !!firebase.auth().currentUser
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => setCurrentUser(user))
  }, [])

  return (
    <AuthContext.Provider value={{
      currentUser,
      signIn,
      signOut,
      isUserSignedIn
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export const initFirebaseAuth = () => {
  // TODO 3: Initialize Firebase.
  // 認証状態をoveserveしてログインしているuserの状態を常にチェックする
  firebase.auth().onAuthStateChanged(authStateObserver);
}

export const authStateObserver = (user: any) => {
  if (user) { // User is signed in!
    debugger
  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    debugger
  }
}

export {
  AuthContext,
  AuthProvider
}