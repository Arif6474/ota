import React from 'react'
import './EditProfile.css'
import profile from '../../../assets/images/my-profile/profile-pic.png'
function EditProfile() {
    return (
        <div className="edit-profile-page ">
            <div className="container">
                <div className="section-title-wrapper single">
                    <h1 className="section-title profile-title">Edit your profile</h1>
                </div>
                <form action="#" className="form-wrapper">
                    <div className="upload-picture">
                        <div className="upload-picture-inner">
                            <label for="fileUpload">
                                <img src={profile} alt="" id="uplodedImg" />
                                <div className="edit-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M9.37333 6.01333L9.98667 6.62667L3.94667 12.6667H3.33333V12.0533L9.37333 6.01333ZM11.7733 2C11.6067 2 11.4333 2.06667 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333C14.0667 4.43333 14.0667 4.01333 13.8067 3.75333L12.2467 2.19333C12.1133 2.06 11.9467 2 11.7733 2ZM9.37333 4.12667L2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667Z"
                                            fill="#1A1A1A" />
                                    </svg>
                                </div>
                            </label>
                            <input type="file" className="form-control-file" id="fileUpload" />
                            <span>Upload your picture</span>
                        </div>
                    </div>
                    <div className="input-field-wrapper">
                        <div className="form-floating">
                            <input type="text" className="form-control" placeholder="Your Name" />
                            <label for="name">Your Name</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control" placeholder="+8801820082894" />
                            <label for="phoneNumber">Your Phone Number</label>
                        </div>
                        <div className="form-floating">
                            <select className="form-select" id="gender" aria-label="Gender">
                                <option selected value="1">Male</option>
                                <option value="2">Fimale</option>
                                <option value="3">Transgender</option>
                            </select>
                            <label for="gender">Gender</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="emailInput" placeholder="Your Email" />
                            <label for="emailInput">Your Email</label>
                        </div>
                        <div className="form-floating">
                            <input type="date" className="form-control" id="datePicker" placeholder="15 November, 1992" value="2015-08-09" />
                            <label for="dateInput">Date of Birth</label>
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control textarea" placeholder="Street Address" ></textarea>
                            <label for="stretAddress">Street Address</label>
                        </div>
                    </div>
                    <div className="submit-btn-box group">
                        <a href="my-profile.html" className="box-btn">cancle</a>
                        <button type="submit" className="box-btn fill"><span>Save profile</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile