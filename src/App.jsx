import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Footer from './core/Footer.jsx'
import Contenido from './core/Contenido.jsx'
import Navbar from './core/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-pink-100 text-black font-sans dark:bg-gray-900 dark:text-white">
        <Navbar />
        <Contenido />
        <Footer />
      </div>
    </>
  )
}

export default App
