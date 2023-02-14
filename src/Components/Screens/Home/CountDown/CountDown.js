import React from 'react'
import './CountDown.css'
function CountDown() {
  return (
    <div className="countdowns">
    <div className="container">
      <div className="countdowns-content">
        <div className="countdown count-margin">
          <div className="countdown-wrapper">
            <h1 className="count-number">250+</h1>
            <p>Trainees</p>
          </div>
        </div>
        <div className="countdown count">
          <div className="countdown-wrapper">
            <h1 className="count-number">20</h1>
            <p>Trainers</p>
          </div>
        </div>
        <div className="countdown count count-center">
          <div className="countdown-wrapper">
            <h1 className="count-number">50</h1>
            <p>Courses</p>
          </div>
        </div>
        <div className="countdown count-end">
          <div className="countdown-wrapper">
            <h1 className="count-number">120</h1>
            <p>Trainees</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default CountDown