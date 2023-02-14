import React from 'react'
import Banner from './Banner/Banner'
import CountDown from './CountDown/CountDown'
import Courses from './Courses/Courses'
import './Home.css'
import Qualification from './Qualification/Qualification'
import Testimonials from './Testimonials/Testimonials'
import Trainers from './Trainers/Trainers'
function Home() {
  return (
    <div >
      <Banner />
      <Qualification />
      <Courses />
      <Trainers />
      <CountDown />
      <Testimonials />

    </div>
  )
}

export default Home