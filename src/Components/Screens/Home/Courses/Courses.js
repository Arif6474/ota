import React from 'react'
import { Link } from 'react-router-dom'
import CourseCard from './CourseCard/CourseCard'

function Courses() {
    return (
        <div className="qualifications ">
            <div className="container">
                <div className="section-title-wrapper">
                    <div className="section-head-group description">
                        <div className="title-box">
                            <h1 className="section-title">Online courses tailored for you</h1>
                            <p className="text">Interport Corporate Academy is also accredited by the Chartered Institute of Logistics and
                                Transport (CILT), International (UK) to provide the globally recognized CILT International Diploma and
                                Certificate courses in Logistics and Transport in Bangladesh.</p>
                        </div>
                        <div className="vab-box">
                            <Link className="box-btn" to='/course-qualification'>VIEW ALL COURSES</Link>
                        </div>
                    </div>
                </div>
            </div>
            <CourseCard/>
        </div>
    )
}

export default Courses