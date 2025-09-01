import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'
import TodoPage from './pages/TodoPage'
import ConvertPage from './pages/ConvertPage'
import VotingPage from './pages/VotingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/convert" element={<ConvertPage />} />
        <Route path="/voting" element={<VotingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
