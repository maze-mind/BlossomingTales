//import React, { useState, useEffect } from 'react';
import React from 'react';
import Home from './components/Home'
import Firebase from '../utils/Firebase';
import { SignOut, SignIn } from '../utils/Auth';

import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import { getAuth } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
//import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = getAuth(Firebase);
//const firestore = firebase.firestore();
//const analytics = firebase.analytics();


const App = () => {

  const [user, loading, error] = useAuthState(auth);
  console.log(loading, error);

  return (
    <div className="App">
      <header>
        <h1>Welcome to BlossomingTales!</h1>
        <SignOut />
      </header>

      <section>
        {user ? <Home /> : <SignIn />}
      </section>
    </div>
  )

}

export default App;