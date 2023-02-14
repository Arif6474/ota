import React from 'react'
import './MyProfile.css'
import profile from '../../../assets/images/my-profile/profile-pic.png'
function MyProfile() {
    return (
        <div className="my-profile-page">
            <div className="container">
                <div className="my-profile">
                    <div className="my-pic">
                        <div className="my-profile-box">
                            <div className="section-title-wrapper">
                                <h1 className="section-title">My Profile</h1>
                            </div>
                            <div className="profile-wapper">
                                <div className="profile-pic">
                                    <img src={profile} alt="profile-pic" />
                                </div>
                                <div className="edit-profile-wrapper">
                                    <a href="edit-profile.html" className="box-btn edit-profile-btn">
                                        <span>Edit Profile</span>
                                    </a>
                                </div>
                            </div>
                            <div className="profile-content">
                                <div className="my-profile-info">
                                    <div className="profile-info">
                                        <ul>
                                            <li>
                                                <span>Name</span>
                                                <p>Niloy Barua</p>
                                            </li>
                                            <li>
                                                <span>Phone Number</span>
                                                <p>+8801615489632</p>
                                            </li>
                                            <li>
                                                <span>Gender</span>
                                                <p>Male</p>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="profile-info">
                                        <ul>
                                            <li>
                                                <span>Email Address</span>
                                                <p>niloyB@gmail.com</p>
                                            </li>
                                            <li>
                                                <span>Date of Birth</span>
                                                <p>15 November, 1992</p>
                                            </li>
                                            <li>
                                                <span>Street Address</span>
                                                <p>Dhaka, Bangladesh</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-course">
                        <div className="section-title-wrapper">
                            <div className="section-head-group title-boxs">
                                <div className="">
                                    <h1 className="title">My Courses</h1>
                                </div>
                                <div className="vab-box">
                                    <a className="box-btn" href="courses-qualification.html">VIEW ALL</a>
                                </div>
                            </div>
                        </div>
                        <div className="countdown-box-wrapper">
                            <div className="countdown-content">
                                <div className="countdown-box">
                                    <div className="countdown-box-inner">
                                        <h1 className="count-number">2</h1>
                                        <p>Pending</p>
                                    </div>
                                </div>
                                <div className="countdown-box">
                                    <div className="countdown-box-inner">
                                        <h1 className="count-number">10</h1>
                                        <p>Completed</p>
                                    </div>
                                </div>
                                <div className="countdown-box">
                                    <div className="countdown-box-inner">
                                        <h1 className="count-number">2</h1>
                                        <p>Ongoing</p>
                                    </div>
                                </div>
                                <div className="countdown-box">
                                    <div className="countdown-box-inner">
                                        <h1 className="count-number">5</h1>
                                        <p>Wishlist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile