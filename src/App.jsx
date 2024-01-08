import Dashboard from './Routes/dashboard/Dashboard'
import Portfolio from './Routes/portfolio/Portfolio'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
