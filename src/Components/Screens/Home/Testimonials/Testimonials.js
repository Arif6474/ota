import React from 'react'
import TestimonialCard from './TestimonialCard/TestimonialCard'
import './Testimonials.css'
function Testimonials() {
    
    return (
        <div className="qualifications section-padding">
            <div className="container">
                <div className="section-title-wrapper">
                <h1 className="testimonial-title">See what our trainees are saying</h1>
                </div>
            </div>
           <TestimonialCard/>
        </div>
    )
}

export default Testimonials