import React from 'react'
import Hero from '../component/Hero'
import EventsCarousel from '../component/EventsCarousel'
import Layout from '../layouts/Layout'
//import UnderConstruction from './UnderConstruction'

export default function App() {
  return (
    <>
    <Hero />
    <EventsCarousel />
     {/* <UnderConstruction />*/}
    <Layout />
    </>
  )
}