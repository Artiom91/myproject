import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './pages/About'
import { Portfolio } from './pages/Portfolio'
import { Resume } from './pages/Resume'
import { ContactNow } from './pages/ContactNow'

function App() {
  const basename = window.location.hostname === 'localhost' ? '/' : '/myproject'

  return (
    <div className="min-h-screen flex flex-col bg-custom-image bg-no-repeat bg-cover absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
      <React.StrictMode>
        <BrowserRouter basename={basename}>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/portfolio" Component={Portfolio} />
              <Route path="/resume" Component={Resume} />
              <Route path="/contact" Component={ContactNow} />
            </Routes>
          </main>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  )
}

export default App
