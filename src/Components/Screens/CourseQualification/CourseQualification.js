import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CourseQualification.css";
import searce from "../../../assets/images/icon-svg/search.svg";
import filter from "../../../assets/images/icon-svg/filter-black.png";
import clock from "../../../assets/images/icon-svg/clock-three.svg";
import user from "../../../assets/images/icon-svg/users-alt.svg";
import calender from "../../../assets/images/icon-svg/calender.svg";
import close from "../../../assets/images/icon-svg/close.svg";
import usePrograms from "../../../hooks/usePrograms";

import useCourses from "../../../hooks/useCourses";
import { IMAGE_URL } from "../../../Utilities/APIs";
function CourseQualification() {
  const [openMenu, setOpenMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const [programs] = usePrograms();
  const [courses] = useCourses();
  const programms = [...programs, ...courses];

  const [courseQualification, setCourseQualification] = useState(true);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
    setCourseQualification(!courseQualification);
  };
  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
    setOpenMenu(!openMenu);
    setCourseQualification(!courseQualification);
  };
  const navigate = useNavigate();
  const navigateToProgramDetail = (id) => {
    navigate(`/program-details/${id}`);
  };
  return (
    <div className="courses-qualification">
      <div className="course-qualification-content">
        <div className="searce-content search-lg-menu">
          <div className="left-control-box sticky-top">
            <div className="left-side-content">
              <div className="filter-content">
                <h4 className="search-title">Let us assist you</h4>
                <div className="search-wrapper">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Programs"
                    />
                    <button className="" type="submit">
                      <img src={searce} alt="search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-side-content">
              <div className="filter-content">
                <h4>Programs Type</h4>
                <div className="custom-checkbox-wrapper">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ptCheckbox1"
                      value="pt1"
                      name=""
                      checked
                    />
                    <label className="form-check-label" for="ptCheckbox1">
                      Professional Qualification Programs
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ptCheckbox2"
                      value="pt2"
                      name=""
                    />
                    <label className="form-check-label" for="ptCheckbox2">
                      Online Courses
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-side-content">
              <div className="filter-content">
                <h4>Programs Availability</h4>
                <div className="custom-checkbox-wrapper">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="paCheckbox1"
                      value="pa1"
                      name=""
                      checked
                    />
                    <label className="form-check-label" for="paCheckbox1">
                      Open for Registration
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="paCheckbox2"
                      value="pa1"
                      name=""
                    />
                    <label className="form-check-label" for="paCheckbox2">
                      Registration Closed
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="paCheckbox3"
                      value="pa1"
                      name=""
                    />
                    <label className="form-check-label" for="paCheckbox3">
                      Upcoming Programs
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-side-content">
              <div className="filter-content">
                <h4>Select Tags</h4>
                <div className="search-wrapper">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Tags"
                    />
                    <button className="" type="submit">
                      <img src={searce} alt="search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {openMenu && (
          <div  data-aos-duration="800"
          data-aos="fade-left" className="searce-content search-menu">
            <div className="left-control-box sticky-top">
              <button onClick={handleCloseMenu} className="filter-close-btn">
                <img src={close} alt="" />
              </button>
              <div className="left-side-content">
                <div className="filter-content">
                  <h4 className="search-title">Let us assist you</h4>
                  <div className="search-wrapper">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Programs"
                      />
                      <button className="" type="submit">
                        <img src={searce} alt="search" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-side-content">
                <div className="filter-content">
                  <h4>Programs Type</h4>
                  <div className="custom-checkbox-wrapper">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="ptCheckbox1"
                        value="pt1"
                        name=""
                        checked
                      />
                      <label className="form-check-label" for="ptCheckbox1">
                        Professional Qualification Programs
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="ptCheckbox2"
                        value="pt2"
                        name=""
                      />
                      <label className="form-check-label" for="ptCheckbox2">
                        Online Courses
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-side-content">
                <div className="filter-content">
                  <h4>Programs Availability</h4>
                  <div className="custom-checkbox-wrapper">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="paCheckbox1"
                        value="pa1"
                        name=""
                        checked
                      />
                      <label className="form-check-label" for="paCheckbox1">
                        Open for Registration
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="paCheckbox2"
                        value="pa1"
                        name=""
                      />
                      <label className="form-check-label" for="paCheckbox2">
                        Registration Closed
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="paCheckbox3"
                        value="pa1"
                        name=""
                      />
                      <label className="form-check-label" for="paCheckbox3">
                        Upcoming Programs
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-side-content">
                <div className="filter-content">
                  <h4>Select Tags</h4>
                  <div className="search-wrapper">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Tags"
                      />
                      <button className="" type="submit">
                        <img src={searce} alt="search" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {courseQualification && (
          <div className="qualification-content">
            <div className="courses-qualification-content">
              <div className="section-title-wrapper">
                <h1 className="title d-none">Courses & Qualifications</h1>
                <div className="title-filter-group d-sm-none">
                  <div className="title-box">
                    <h1 className="title">Courses & Qualifications</h1>
                  </div>
                  <div className="filter-btn-box text-end">
                    <Link onClick={handleMenu} href="#" className="filter-btn">
                      <img src={filter} alt="filter" className="img-fluid" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="course-qualification">
                {programms?.map((program) => (
                  <div
                    className="course-card qc-card-wrapper"
                    key={program._id}
                    onClick={() =>
                        navigateToProgramDetail(program?._id)
                      } >
                    <div className="item card">
                      <Link className="d-block">
                        <div className="thumb-wrapper position-relative">
                          <img src={IMAGE_URL + program?.image} alt="thumb" />
                        </div>
                      </Link>
                      <div className="do-status-box">
                        <div className="do-status-inner">
                          <div className="deadline">
                            <p>
                              Deadline: <br />
                              <span>10 Oct, 2021</span>
                            </p>
                          </div>
                          <div className="open-box">
                            <Link >Open For Registration</Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="sub-title">{program.description}</p>
                        <h4 className="main-title">{program.name}</h4>
                        <div className="meta-tag-box">
                          <div className="meta-tag-inner">
                            <div className="months">
                              <img
                                className="icon"
                                src={clock}
                                alt="icon-clock"
                              />
                              <p>{program.duration} Months</p>
                            </div>
                            <div className="seats">
                              <img className="icon" src={user} alt="users" />
                              <p>{program.seats} Seats</p>
                            </div>
                            <div className="date">
                              <img
                                className="icon"
                                src={calender}
                                alt="calender"
                              />
                              <p>20 Oct, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cfen-wrapper">
                        <div className="cfen-inner">
                          <div className="course-fee">
                            <h6>Course Fee</h6>
                            <p>Tk. {program.courseFee}</p>
                          </div>
                          <div className="enroll-now">
                            <button
                              className="box-btn"
                            >
                              enroll now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseQualification;
