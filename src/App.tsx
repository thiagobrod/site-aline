import { Routes, Route } from 'react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Home from '@/pages/Home'
import Sobre from '@/pages/Sobre'
import TCC from '@/pages/TCC'
import Atendimento from '@/pages/Atendimento'
import ParaQuem from '@/pages/ParaQuem'
import Duvidas from '@/pages/Duvidas'
import Agendamento from '@/pages/Agendamento'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/tcc" element={<TCC />} />
          <Route path="/atendimento" element={<Atendimento />} />
          <Route path="/para-quem" element={<ParaQuem />} />
          <Route path="/duvidas" element={<Duvidas />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
