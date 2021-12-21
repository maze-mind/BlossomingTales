// Modules
import React from 'react'
// import { Link } from 'react-router-dom'
import 'firebase/compat/firestore'
import 'firebase/compat/analytics'

// Pages
import Home from './pages/Home'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Home />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
