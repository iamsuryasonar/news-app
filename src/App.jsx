import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { fetchNews } from '../api/index'

import React, { useState, useEffect } from 'react'

export const AppContext = React.createContext('technology');

function App() {
  const [category, setCategory] = useState('technology');
  const [news, setNews] = useState();
  const [isLoading, setLoading] = useState(false);

  async function getNews(category) {
    setLoading(true)
    const res = await fetchNews(category);
    setLoading(false)
    setNews(res);
  }

  useEffect(() => {
    getNews(category)
  }, [category])

  return (
    <AppContext.Provider value={{ isLoading, news, category, setCategory }}>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
      </Routes>
    </AppContext.Provider>
  )
}

export default App
