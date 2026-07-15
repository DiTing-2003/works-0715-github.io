import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundLayer from '@/components/BackgroundLayer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-[#0d0d1a]">
        <BackgroundLayer />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </HashRouter>
  )
}
