import React from 'react'
import './Trainer.css'
import banner from '../../../assets/images/trainers/trainers-hero-bg.png'
import AllTrainers from './AllTrainers/AllTrainers'
import CountDown from '../Home/CountDown/CountDown'
import Testimonials from '../Home/Testimonials/Testimonials'
function Trainer() {
    return (
      <div>
          <div className="trainers-hero">
        <div className="container">
            <div className="trainers-hero-inner">
                <img className="img-fluid" src={banner} alt="" />
                <div className="trainers-hero-content">
                    <h1 className="section-title">We have assembled the best in the industry to train you</h1>
                    <p className="text">Interport Corporate Academy is also accredited by the Chartered Institute of
                        Logistics and Transport (CILT), International (UK) to provide the globally recognized CILT
                        International Diploma and Certificate courses in Logistics and Transport in Bangladesh.</p>
                </div>
            </div>
        </div>
    </div>
    <AllTrainers/>
    <CountDown />
      <Testimonials />
      </div>
    )
}

export default Trainer