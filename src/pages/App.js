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
import NewItinerary from '../pages/NewItinerary'
import PatchItinerary from '../component/PatchItinerary'



export default function App() {

  let user = "";

  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user")).role;
  } else {
  }

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Layout>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/auth/signup' element={user === "" ? <SignUpPage/> : <UnderConstruction /> }/>
          <Route path='/auth/signin' element={user === "" ? <SignInPage/> : <UnderConstruction /> }/>
          <Route path='/Cities' element={<Cities/>} /> 
          <Route path='/NewCity' element={user === "admin" ? <NewCity/> : <UnderConstruction /> } />
          <Route path='/EditCity' element={user === "admin" ? <EditCity/> : <UnderConstruction /> } />
          <Route path='/cities/:id' element={<City/>}/>
          <Route path='/Mytineraries/patchitinerary' element={user === "" ? <UnderConstruction /> : <PatchItinerary/>}/>
          <Route path='/MyTineraries' element={user === "" ? <UnderConstruction />  : <MyTineraries/> }/>
          <Route path='/NewItinerary' element={user === "" ? <UnderConstruction />  : <NewItinerary/> }/>
          <Route path='*' element={<UnderConstruction />} />
        </Routes> 
      </Layout>
    </BrowserRouter>
  )
}