import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import BeforeYouCallPage from './pages/BeforeYouCallPage'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/before-you-call" element={<BeforeYouCallPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
