import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './pages/About'
import { Portfolio } from './pages/Portfolio'
import { Resume } from './pages/Resume'
import { ContactNow } from './pages/ContactNow'
import { routes } from './config'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-custom-image bg-no-repeat bg-cover absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
      <React.StrictMode>
        <BrowserRouter basename="/">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path={routes.resume} element={<Resume />} />
              <Route path={routes.portfolio} element={<Portfolio />} />
              <Route path={routes.contactnow} element={<ContactNow />} />
              <Route path={routes.about} element={<About />} />
            </Routes>
          </main>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  )
}

export default App
