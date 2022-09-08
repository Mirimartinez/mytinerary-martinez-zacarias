
import React from 'react'
import Home from '../pages/Home'
import Layout from '../layouts/Layout'
import NewCity from '../pages/NewCity'
import Cities from '../pages/Cities'
import CityDetails from '../component/CityDetails'
import EditCity from './EditCity'
import UnderConstruction from './UnderConstruction'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScrollToTop from '../component/ScrollToTop'
import Mytineraries from '../pages/MyTineraries'

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Layout>
     <Routes>

    <Route  path='/' element={<Home/>} />
    <Route path='/Cities' element={<Cities/>} /> 
    <Route path='/NewCity' element={<NewCity/>} />
    <Route path='/EditCity' element={<EditCity/>} />
    <Route path='/MyTineraries' element={<Mytineraries/>}/>
    <Route path='/CityDetails' element={<CityDetails/>}/>
    <Route path='*' element={<UnderConstruction />} />
    
    </Routes> 
   
    </Layout>
    </BrowserRouter>
  )
}