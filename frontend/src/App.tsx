import { Routes, Route } from 'react-router-dom'
import FractureAIDiagnostics from './pages/llm-chat/FractureAIDiagnostics'
/*import Home from './pages/Home/Home'
import Reserve from './pages/Reserve/Reserve'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact' */
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FractureAIDiagnostics />} />
    </Routes>
  )
}

export default App