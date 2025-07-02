import React from 'react'
import FormPages from './pages/FormPages'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import FormCard from './component/FormCard'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FormPages />}/>
      <Route path='/form-card' element={<FormCard />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App