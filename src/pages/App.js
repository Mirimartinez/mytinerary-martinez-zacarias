
import React from 'react'
import Home from '../pages/Home'
import Layout from '../layouts/Layout'
import NewCity from '../pages/NewCity'
import Cities from '../pages/Cities'
import City from '../pages/City'
import EditCity from './EditCity'
import UnderConstruction from './UnderConstruction'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScrollToTop from '../component/ScrollToTop'
import MyTineraries from './MyTineraries'
import SignUpPage from './SignUpPage'
import SignInPage from './SignInPage'



export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Layout>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/auth/signuppage' element={<SignUpPage/>} />
          <Route path='/auth/signin' element={<SignInPage/>}/>
          <Route path='/Cities' element={<Cities/>} /> 
          <Route path='/NewCity' element={<NewCity/>} />
          <Route path='/EditCity' element={<EditCity/>} />
          <Route path='/cities/:id' element={<City/>}/>
          <Route path='/MyTineraries' element={<MyTineraries/>}/>
          <Route path='*' element={<UnderConstruction />} />
        </Routes> 
      </Layout>
    </BrowserRouter>
  )
}