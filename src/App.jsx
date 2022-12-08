import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Nft from './views/Nft'
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { useEffect, useState } from 'react'
import { useGlobalState } from './store'
import { isWallectConnected } from './services/blockchain'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [connectedAccount] = useGlobalState('connectedAccount')

  useEffect(async () => {
    await isWallectConnected()
    console.log('Blockchain Loaded')
    setLoaded(true)
  }, [])

  return (
    <div
      className="min-h-screen bg-gradient-to-t from-gray-800 bg-repeat
    via-[#25bd9c] to-gray-900 bg-center subpixel-antialiased"
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft/:id" element={<Nft />} />
      </Routes>
      <Modal />
      <Footer />
    </div>
  )
}
export default App
