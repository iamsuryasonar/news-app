import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NewsPage from './pages/NewsPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/:id' element={<NewsPage></NewsPage>}> </Route>
    </Routes>
  )
}

export default App
