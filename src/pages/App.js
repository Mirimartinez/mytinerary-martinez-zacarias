import React from 'react'
import Home from '../pages/Home'
import Layout from '../layouts/Layout'
import NewCity from '../pages/NewCity'
import Cities from '../pages/Cities'
// import Eventspopular from './Eventspopular'
import UnderConstruction from './UnderConstruction'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
    <Routes>


    <Route  path='/' element={<Home/>} />
    <Route path='/Cities' element={<Cities/>} /> 
    <Route path='/NewCity' element={<NewCity/>} />
    <Route path='/*' element={<UnderConstruction />} />
    
    </Routes>
    </Layout>
    </BrowserRouter>
  )
}