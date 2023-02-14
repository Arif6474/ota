import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ProgramDetails.css";
import banner from "../../../assets/images/program-details/pd-banner.png";
import trainer from "../../../assets/images/trainers/pdt-img-1.png";
import trainer2 from "../../../assets/images/trainers/pdt-img-2.png";
import usePrograms from "../../../hooks/usePrograms";
import useCourses from "../../../hooks/useCourses";
import { useState } from "react";
import ProgramDetail from "./ProgramDetail/ProgramDetail";
import axios from "axios";
import { format } from "date-fns";
import { PROGRAM_ENROLLMENTS_API } from "../../../Utilities/APIs";
function ProgramDetails() {
  const [programs] = usePrograms();
  const [courses] = useCourses();
  const { id } = useParams();

  const [stepNumber, setStepNumber] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [organization, setOrganization] = useState("");
  const [education, setEducation] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [isCiltMember, setIsCiltMember] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [bankName, setBankName] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [information, setInformation] = useState(null);
  const programDetails =
    programs?.find((program) => program._id === id) ||
    courses?.find((course) => course._id === id);
  const program = programDetails?._id;
  const enrollmentStatus = "pending";

  const trainee = "63d785b8eaec2dea819f970a";

  const handleNextStep = () => {
    if (stepNumber < 5) {
      setStepNumber((prev) => prev + 1);
    }
  };

  const clickBackButton = () => {
    if (stepNumber > 2) {
      setStepNumber((prev) => prev - 1);
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();

    const programs = {
      fullName,
      email,
      contact,
      organization,
      education,
      address,
      postCode,
      isCiltMember,
      paymentMethod,
      paymentAmount,
      bankName,
      transactionId,
      trainee,
      program,
      enrollmentStatus,
    };
    // console.log(programs);
    axios.post(PROGRAM_ENROLLMENTS_API, programs).then((res) => {
      setInformation(res.data);
    });
    // e.target.reset()
  };

  return (
    <div>
      <div className="program-details large-device">
        <div className="container-fluid px-0">
          <div className="program-details-content g-0">
            <div className="program-details-left-side">
              <div className="left-control-box sticky-top">
                <div className="left-top">
                  <div className="course-sub-group-box">
                    <p className="text">{programDetails?.description}</p>
                    <div className="btn-group-box">
                      <Link className="btn-download">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
                            stroke="#224497"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.83325 8.3335L9.99992 12.5002L14.1666 8.3335"
                            stroke="#224497"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 12.5V2.5"
                            stroke="#224497"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                      <Link className="btn-favorite">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65908 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172V3.84172Z"
                            stroke="#ED1C24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="pd-title-box">
                    <h1 className="title">{programDetails?.name}</h1>
                  </div>

                  <div className="ofr-box">
                    <Link>Open For Registration</Link>
                  </div>
                </div>
                <div className="csd-box">
                  <div className="program">
                    <div className="program-info">
                      <ul>
                        <li>
                          <h6>Duration</h6>
                          <p>
                            {programDetails?.duration} months <br />
                            (Two terms of 3 months)
                          </p>
                        </li>
                        <li>
                          <h6>Start Date</h6>
                          <p>
                          {programDetails?.startDate && format(
                              new Date(programDetails?.startDate),
                              "dd-MM-yyyy"
                            )}
                          </p>
                        </li>
                        <li>
                          <h6>Venue</h6>
                          <p>{programDetails?.venue}</p>
                        </li>
                      </ul>
                    </div>
                    <div className="program-info">
                      <ul>
                        <li>
                          <h6>Schedule</h6>
                          <p>
                            {programDetails?.classSchedule} <br />
                            08:30 am to 12:30 pm
                          </p>
                        </li>
                        <li>
                          <h6> Seats</h6>
                          <p>{programDetails?.seats}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="enroll-deadline-box">
                  <div className="enroll-deadline">
                    <h6 className="me-2">Registration Deadline:</h6>
                    <p>10 October, 2021</p>
                  </div>

                  {stepNumber === 1 && (
                    <Link
                      onClick={handleNextStep}
                      className="box-btn fill start-step-btn"
                    >
                      Enroll for tk. {programDetails?.courseFee}
                    </Link>
                  )}
                  {stepNumber === 2 && (
                    <Link className="box-btn applying start-step-btn">
                      Applying
                    </Link>
                  )}
                  {stepNumber === 3 && !information && (
                    <Link className="box-btn applying start-step-btn">
                      Applied
                    </Link>
                  )}
                  {information && (
                    <Link className="box-btn status-pending  start-step-btn">
                      Pending
                    </Link>
                  )}
                </div>
                <div className="trainers-box">
                  <h5>Trainers</h5>
                  <ul>
                    <li>
                      <div className="trainer-thumb">
                        <img src={trainer} alt="thumb" />
                      </div>
                      <div className="trainer-meta">
                        <h6>MR. Nagendra Aswatha</h6>
                        <p>Partner, NS4 Management Solutions</p>
                      </div>
                    </li>
                    <li>
                      <div className="trainer-thumb">
                        <img src={trainer2} alt="thumb" />
                      </div>
                      <div className="trainer-meta">
                        <h6>Wasif Sayed Choudhury, MILT</h6>
                        <p>
                          Director of Operations, Challenger Elevator &
                          Escalator LTD.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="program-details-right-side">
              <div className="right-content-box">
                {stepNumber === 1 && (
                  <div className="main-content-box deactive">
                    <img src={banner} alt="banner" className="img-fluid" />
                    <div className="inner-content" id="for-test2">
                      <p className="text">Professional Qualification Course</p>
                      <h1 className="section-title">
                        CILT International Certificate in Logistics and
                        Transport
                      </h1>
                      <div className="group-btn-box">
                        <Link>supply chain</Link>
                        <Link>logistics</Link>
                      </div>
                      <div className="course-description">
                        <ul>
                          <li>
                            <h6>Course Overview</h6>
                            <p className="text">
                              This Professional Diploma which operates on Level
                              5/Higher National Diploma (equivalent to 2 years
                              of a degree) is designed to support professionals
                              involved in planning logistics operations and
                              wishing to secure a more senior supply chain,
                              logistics or transport position, gain global
                              recognition and build credibility in this sector.
                            </p>
                          </li>
                          <li>
                            <h6>Eligibility Criteria</h6>
                            <p className="text">Bachelors Degree</p>
                          </li>
                          <li>
                            <h6>Teaching Methodology</h6>
                            <p className="text">
                              Teaching methodology will include a combination of
                              lectures, exercises, case studies, in-class
                              assignments, projects, student presentations,
                              group works, field trips and presentations by
                              guest speakers.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <div className="multiple-steps step-one">
                  <div className="form-wrapper">
                    <form onSubmit={handleSubmitForm} className="form">
                      {stepNumber === 2 && (
                        <div className="form-step-one">
                          <div className="header-steper-wrapper">
                            <div className="header-steper">
                              <div className="header-step header-step-one is-active">
                                <div className="icon"></div>
                                <span>Step 1</span>
                                <h6>Application Form</h6>
                              </div>
                              <div className="header-step header-step-two">
                                <div className="icon"></div>
                                <span>Step 2</span>
                                <h6>Payment</h6>
                              </div>
                              <div className="header-step header-step-three">
                                <div className="icon"></div>
                                <span>Step 3</span>
                                <h6>Course Completion</h6>
                              </div>
                              <div className="header-step header-step-four">
                                <div className="icon"></div>
                                <span>Step 4</span>
                                <h6>Certificate</h6>
                              </div>
                            </div>
                          </div>
                          <div className="input-field-wrapper">
                            <h2 className="title">Application Form</h2>
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setFullName(e.target.value)}
                                id="name"
                                placeholder="Your Full Name"
                              />
                              <label for="nameInput">Your Full Name</label>
                            </div>
                            <div className="form-floating">
                              <input
                                type="email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                placeholder="Your Email"
                              />
                              <label for="emailInput">Your Email</label>
                            </div>
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setContact(e.target.value)}
                                id="contact"
                                placeholder="Your Phone Number"
                              />
                              <label for="pnInput">Your Phone Number</label>
                            </div>
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(e) =>
                                  setOrganization(e.target.value)
                                }
                                id="organization"
                                placeholder="Your Organization Name"
                              />
                              <label for="onInput">
                                Your Organization Name
                              </label>
                            </div>
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setEducation(e.target.value)}
                                id="education"
                                placeholder="Your Educational Qualification"
                              />
                              <label for="eqInput">
                                Your Educational Qualification
                              </label>
                            </div>
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setAddress(e.target.value)}
                                id="address"
                                placeholder="Your Street Address"
                              />
                              <label for="saInput">Your Street Address</label>
                            </div>
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setPostCode(e.target.value)}
                                id="postCode"
                                placeholder="Your Post Code"
                              />
                              <label for="pcInput">Your Post Code</label>
                            </div>
                            <div className="agree agree-or-not">
                              <div className="agree-not">
                                <p>Are you a CILT Member?</p>
                              </div>
                              <div className="yes-not">
                                <div className="custom-checkbox-wrapper text-end">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      value="true"
                                      onClick={(e) =>
                                        setIsCiltMember(e.target.checked)
                                      }
                                      type="checkbox"
                                      id="ctCheckbox1"
                                      name="hello"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="ctCheckbox1"
                                    >
                                      Yes, I am a CILT Member
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ctCheckbox2"
                                      value="false"
                                      onClick={(e) =>
                                        setIsCiltMember(e.target.checked)
                                      }
                                      name="hello"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="ctCheckbox2"
                                    >
                                      No, I’m not
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="box-btn-wrapper text-end">
                              <button
                                onClick={handleNextStep}
                                className="box-btn fill submit-application-btn"
                              >
                                Submit application
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      {stepNumber === 3 && !information && (
                        <div className="form-step-two">
                          <div className="header-steper-wrapper">
                            <div className="header-steper">
                              <div className="header-step header-step-one is-active is-completed">
                                <div className="icon"></div>
                                <span>Step 1</span>
                                <h6>Application Form</h6>
                              </div>
                              <div className="header-step header-step-two is-active">
                                <div className="icon"></div>
                                <span>Step 2</span>
                                <h6>Payment</h6>
                              </div>
                              <div className="header-step header-step-three">
                                <div className="icon"></div>
                                <span>Step 3</span>
                                <h6>Course Completion</h6>
                              </div>
                              <div className="header-step header-step-four">
                                <div className="icon"></div>
                                <span>Step 4</span>
                                <h6>Certificate</h6>
                              </div>
                            </div>
                          </div>
                          <div className="input-field-wrapper">
                            <h2 className="title">Payment</h2>
                            <div className="payment-info-box">
                              <ul>
                                <li>
                                  <p>
                                    <span>Account Name: </span> Interport
                                    Maritime Limited
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span>Account No: </span> 00733004116
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span>Bank: </span> Bank Asia Limited
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span>Branch: </span> Scotia Branch
                                    (070276140), Dhaka bKash 01753757376
                                    (Personal)
                                  </p>
                                </li>
                              </ul>
                            </div>
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(e) =>
                                  setPaymentAmount(e.target.value)
                                }
                                id="paymentAmount"
                                placeholder="Enter Payment Amount"
                              />
                              <label for="paInput">Enter Payment Amount</label>
                            </div>
                            <div className="form-floating">
                              <select
                                className="form-select"
                                id="paymentMethod"
                                onChange={(e) =>
                                  setPaymentMethod(e.target.value)
                                }
                                aria-label="Select Payment Method"
                              >
                                {/* <!-- <option selected disabled hidden></option> --> */}
                                <option selected value="1">
                                  bank
                                </option>
                                <option value="2">bKash</option>
                                <option value="3">Nagad</option>
                              </select>
                              <label for="pmSelect">
                                Select Payment Method
                              </label>
                            </div>
                            <div className="form-floating">
                              <input
                                type="name"
                                className="form-control"
                                id="bankName"
                                placeholder="Enter Bank Name"
                                onChange={(e) => setBankName(e.target.value)}
                              />
                              <label for="bnInput">Enter Bank Name</label>
                            </div>
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(e) =>
                                  setTransactionId(e.target.value)
                                }
                                id="transactionId"
                                placeholder="Enter Transaction ID"
                              />
                              <label for="tiInput">Enter Transaction ID</label>
                            </div>
                            <div className="box-btn-wrapper group text-end">
                              <Link
                                onClick={clickBackButton}
                                className="box-btn go-back-btn"
                              >
                                go back
                              </Link>
                              <button className="box-btn fill confirm-payment-btn">
                                confirm payment
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </form>
                  </div>
                </div>

                {information && (
                  <div className="multiple-steps step-two">
                    <img src={banner} alt="banner" className="img-fluid" />
                    <div className="header-steper-wrapper">
                      <div className="header-steper">
                        <div className="header-step header-step-one is-active is-completed">
                          <div className="icon"></div>
                          <span>Step 1</span>
                          <h6>Application Form</h6>
                        </div>
                        <div className="header-step header-step-two is-active is-completed">
                          <div className="icon"></div>
                          <span>Step 2</span>
                          <h6>Payment</h6>
                        </div>
                        <div className="header-step header-step-three is-active">
                          <div className="icon"></div>
                          <span>Step 3</span>
                          <h6>Course Completion</h6>
                        </div>
                        <div className="header-step header-step-four">
                          <div className="icon"></div>
                          <span>Step 4</span>
                          <h6>Certificate</h6>
                          <Link className="box-btn view-certificate-btn mt-3">
                            view
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="inner-content">
                      <p className="text">Professional Qualification Course</p>
                      <h1 className="section-title">
                        CILT International Certificate in Logistics and
                        Transport
                      </h1>
                      <div className="group-btn-box">
                        <Link>supply chain</Link>
                        <Link>logistics</Link>
                      </div>
                      <div className="course-description">
                        <ul>
                          <li>
                            <h6>Course Overview</h6>
                            <p className="text">
                              This Professional Diploma which operates on Level
                              5/Higher National Diploma (equivalent to 2 years
                              of a degree) is designed to support professionals
                              involved in planning logistics operations and
                              wishing to secure a more senior supply chain,
                              logistics or transport position, gain global
                              recognition and build credibility in this sector.
                            </p>
                          </li>
                          <li>
                            <h6>Eligibility Criteria</h6>
                            <p className="text">Bachelors Degree</p>
                          </li>
                          <li>
                            <h6>Teaching Methodology</h6>
                            <p className="text">
                              Teaching methodology will include a combination of
                              lectures, exercises, case studies, in-class
                              assignments, projects, student presentations,
                              group works, field trips and presentations by
                              guest speakers.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProgramDetail />
    </div>
  );
}

export default ProgramDetails;
