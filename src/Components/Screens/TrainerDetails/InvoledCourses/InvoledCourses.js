import React from 'react'
import './InvoledCourses.css'
import course from '../../../../assets/images/qualifications-courses/qc-image-1.png'
import clock from '../../../../assets/images/icon-svg/clock-three.svg'
import user from '../../../../assets/images/icon-svg/users-alt.svg'
import calender from '../../../../assets/images/icon-svg/calender.svg'
import { Link } from "react-router-dom";
function InvoledCourses() {
    return (
        <div className="courses-qualification-content section-padding" >
            <div className="container">
                <div className="section-title-wrapper">
                    <h1 className="title">Courses Involved</h1>
                </div>
                <div className="courses">
                <div className="items card">
                        <a href="program-details.html" className="d-block">
                            <div className="thumb-wrapper position-relative">
                                <img src={course} alt="thumb" />
                            </div>
                        </a>
                        <div className="do-status-box">
                            <div className="do-status-inner">
                                <div className="deadline">
                                    <p>
                                        Deadline: <br/>
                                        <span>10 Oct, 2021</span>
                                    </p>
                                </div>
                                <div className="open-box">
                                    <Link href="#">Open For Registration</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="sub-title">Professional Qualification Program</p>
                            <h4 className="main-title">CILT International Certificate in Logistics and Transport</h4>
                            <div className="meta-tag-box">
                                <div className="meta-tag-inner">
                                    <div className="months">
                                        <img className="icon" src={clock} alt="icon-clock" />
                                            <p>6 Months</p>
                                    </div>
                                    <div className="seats">
                                        <img className="icon" src={user} alt="users" />
                                            <p>24 Seats</p>
                                    </div>
                                    <div className="date">
                                <img className="icon" src={calender} alt="calender" />
                                            <p>20 Oct, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cfen-wrapper">
                            <div className="cfen-inner">
                                <div className="course-fee">
                                    <h6>Course Fee</h6>
                                    <p>Tk. 20,000</p>
                                </div>
                                <div className="enroll-now">
                                    <a className="box-btn" href="program-details.html">enroll now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="items card">
                        <a href="program-details.html" className="d-block">
                            <div className="thumb-wrapper position-relative">
                                <img src={course} alt="thumb" />
                            </div>
                        </a>
                        <div className="do-status-box">
                            <div className="do-status-inner">
                                <div className="deadline">
                                    <p>
                                        Deadline: <br/>
                                        <span>10 Oct, 2021</span>
                                    </p>
                                </div>
                                <div className="open-box">
                                    <Link href="#">Open For Registration</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="sub-title">Professional Qualification Program</p>
                            <h4 className="main-title">CILT International Certificate in Logistics and Transport</h4>
                            <div className="meta-tag-box">
                                <div className="meta-tag-inner">
                                    <div className="months">
                                        <img className="icon" src={clock} alt="icon-clock" />
                                            <p>6 Months</p>
                                    </div>
                                    <div className="seats">
                                        <img className="icon" src={user} alt="users" />
                                            <p>24 Seats</p>
                                    </div>
                                    <div className="date">
                                <img className="icon" src={calender} alt="calender" />
                                            <p>20 Oct, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cfen-wrapper">
                            <div className="cfen-inner">
                                <div className="course-fee">
                                    <h6>Course Fee</h6>
                                    <p>Tk. 20,000</p>
                                </div>
                                <div className="enroll-now">
                                    <a className="box-btn" href="program-details.html">enroll now</a>
                                </div>
                            </div>
                        </div>
                    </div>             
                </div>
            </div>
        </div>

    )
}

export default InvoledCourses