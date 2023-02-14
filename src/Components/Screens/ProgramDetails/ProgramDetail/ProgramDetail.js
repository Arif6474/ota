import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProgramDetail.css";
import banner from "../../../../assets/images/program-details/pd-banner.png";
import trainer from "../../../../assets/images/trainers/pdt-img-1.png";
import trainer2 from "../../../../assets/images/trainers/pdt-img-2.png";
import axios from "axios";
import useCourses from "../../../../hooks/useCourses";
import usePrograms from "../../../../hooks/usePrograms";
import { PROGRAM_ENROLLMENTS_API } from "../../../../Utilities/APIs";
function ProgramDetail() {
  const [courseDetails, setCourseDetails] = useState(false);
  const [trainers, setTrainers] = useState(false);
  const [toggleState, setToggleState] = useState(1);

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

  const collapseCourseDetails = () => {
    setCourseDetails(!courseDetails);
  };
  const collapseTrainer = () => {
    setTrainers(!trainers);
  };
  const toggleTab = (index) => {
    setToggleState(index);
  }
  const programDetails =
    programs?.find((program) => program._id === id) ||
    courses?.find((course) => course._id === id);
  const program = programDetails?._id;
  const enrollmentStatus = "pending";

  const trainee = "63d785b8eaec2dea819f970a";
  console.log(stepNumber);
  const handleNextStep = () => {
    if (stepNumber < 5) {
      setStepNumber((prev) => prev + 1);
    }
  };
  // const handleOverview = () => {
  //   if ((stepNumber < 3) && (stepNumber > 0)) {
  //     setStepNumber((prev) => prev - 1);
  //   }
  // };
  // const handleProgress = () => {
  //   if ((stepNumber === 1)) {
  //     setStepNumber((prev) => prev + 1);
  //   }
  // };

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
    console.log(programs);
    axios.post(PROGRAM_ENROLLMENTS_API, programs).then((res) => {
      setInformation(res.data);
    });
    // e.target.reset()
  };

  return (
    <div className="program-details small-device">
      <div className="smll-device-hero position-relative">
        <div className="thumb-wrapper">
          <img src={banner} alt="banner" className="img-fluid" />
        </div>
        <div className="smll-device-deadline-box">
          <h6 className="">Deadline:</h6>
          <p>10 October, 2021</p>
        </div>
        <div className="smll-device-ofr-box ofr-box">
          <Link href="#">Open For Registration</Link>
        </div>
      </div>
      <div className="container-fluid">
        <div className="small-device-head">
          <p className="text">Professional Qualification Course</p>
          <div className="pd-title-box">
            <h1 className="title">
              CILT International Certificate in Logistics and Transport
            </h1>
          </div>
          <div className="course-sub-group-box" role="presentation">
          { (stepNumber === 1) &&
           <Link
              href="#"
              id="op3-tab"
              className="box-btn fill small-device-start-step-btn"
            >
              Enroll for tk. 20,000
            </Link> }
           { (stepNumber === 2) &&
           <Link href="#" className="box-btn small-device-conditional-btn">
              applying
            </Link> }
           { (stepNumber === 3 && !information) &&
           <Link href="#" className="box-btn small-device-conditional-btn">
              applied
            </Link> }
           { information &&
           <Link href="#" className="box-btn status-pending sp">
              pending
            </Link> }
            <div className="btn-group-box ms-3">
              <Link href="#" className="btn-download">
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
              <Link href="#" className="btn-favorite">
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
        </div>
        <div className="small-device-tabs-wrapper">
          <ul className="nav" id="opTab" role="tablist">
            <li className="" role="presentation">
              <button
              onClick={()=>toggleTab(1)}
                className={toggleState === 1 ? "active" : ""}
                id="op1-tab"
                data-bs-toggle="tab"
                data-bs-target="#op1"
                type="button"
                role="tab"
                aria-controls="op1"
                aria-selected="true"
              >
                overview
              </button>
            </li>
            <li className="" role="presentation">
              <button
                 className={toggleState === 2 ? "active" : ""}
               onClick={()=>toggleTab(2)}
            
                id="op2-tab"
                data-bs-toggle="tab"
                data-bs-target="#op2"
                type="button"
                role="tab"
                aria-controls="op2"
                aria-selected="false"
              >
                progress
              </button>
            </li>
          </ul>
          <div className="tab-content op-tab-content" id="opTabContent">
        
              <div
                className={toggleState === 1 ? "active-content" : "content"}
                // className=" fade show active content"
                id="op1"
                role="tabpanel"
                aria-labelledby="op1-tab"
              >
                <div className="csd-box">
                  <ul>
                    <li>
                      <h6>Duration</h6>
                      <p>
                        6 months <br />
                        (Two terms of 3 months)
                      </p>
                    </li>
                    <li>
                      <h6>Start Date</h6>
                      <p>15 October, 2021</p>
                    </li>
                    <li>
                      <h6>Schedule</h6>
                      <p>
                        Every Friday- <br />
                        08:30 am to 12:30 pm
                      </p>
                    </li>
                    <li>
                      <h6>Seats</h6>
                      <p>24</p>
                    </li>

                    <li>
                      <h6>Venue</h6>
                      <p>
                        Interport Corporate Academy (ICA), MHK Terminal (5th
                        floor), Bangla Motor, Dhaka-1000
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="small-device-course-details">
                  <h6
                    onClick={collapseCourseDetails}
                    className="btn-course-details"
                  >
                    Course Details
                  </h6>
                  {courseDetails && (
                    <div className="course-description info-collapse">
                      <ul>
                        <li>
                          <p className="text">
                            This Professional Diploma which operates on Level
                            5/Higher National Diploma (equivalent to 2 years of
                            a degree) is designed to support professionals
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
                            assignments, projects, student presentations, group
                            works, field trips and presentations by guest
                            speakers.
                          </p>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="small-device-trainers-wrapper">
                  <h6 onClick={collapseTrainer} className="btn-trainers-card">
                    Trainers
                  </h6>
                  {trainers && (
                    <div className="trainers-box collapse">
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
                  )}
                </div>
              </div>
     
            <div
              className="tab-pane fade"
              id="op2"
              role="tabpanel"
              aria-labelledby="op2-tab"
            >
    
                <div
                className={toggleState === 2 ? "small-device-steper-wrapper step-pad active-content" : "content"}
              >
            <div
             className="header-step header-step-one is-active"
             >
                <div className="icon"></div>
                <div className="content">
                <span>Step 1</span>
                <h6>Application Form</h6>
                </div>
            </div>
            <div className="form-wrapper">
                <form onSubmit={handleSubmitForm}>
                <div className="small-device-form-step small-device-form-step-one">
                    <div className="enroll-btn-wrapper">
              {  (stepNumber === 1) &&    <Link
                        className="box-btn small-device-enroll-start-btn"
                        onClick={handleNextStep}
                    >
                        enroll now
                    </Link> }
                    </div>
                  { (stepNumber === 2) &&
                    <div
                    className="input-field-wrapper wrapper sd-form-one collapse"
                    id="test"
                    >
                    <div className="form-floating">
                        <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        placeholder="Your Full Name"
                        onChange={(e) => setFullName(e.target.value)}
                        />
                        <label for="nameInput">Your Full Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="emailInput">Your Email</label>
                    </div>
                    <div className="form-floating">
                        <input
                        type="text"
                        className="form-control"
                        id="pnInput"
                        placeholder="Your Phone Number"
                        onChange={(e) => setContact(e.target.value)}
                        />
                        <label for="pnInput">Your Phone Number</label>
                    </div>
                    <div className="form-floating">
                        <input
                        type="text"
                        className="form-control"
                        id="onInput"
                        placeholder="Your Organization Name"
                        onChange={(e) =>
                            setOrganization(e.target.value)
                          }
                        />
                        <label for="onInput">Your Organization Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                        type="text"
                        className="form-control"
                        id="eqInput"
                        placeholder="Your Educational Qualification"
                        onChange={(e) => setEducation(e.target.value)}
                        />
                        <label for="eqInput">
                        Your Educational Qualification
                        </label>
                    </div>
                    <div className="form-floating">
                        <input
                        type="text"
                        className="form-control"
                        id="saInput"
                        placeholder="Your Street Address"
                        onChange={(e) => setAddress(e.target.value)}
                        />
                        <label for="saInput">Your Street Address</label>
                    </div>
                    <div className="form-floating">
                        <input
                        type="text"
                        className="form-control"
                        id="pcInput"
                        placeholder="Your Post Code"
                        onChange={(e) => setPostCode(e.target.value)}
                        />
                        <label for="pcInput">Your Post Code</label>
                    </div>
                    <div className="row agree-or-not">
                        <div className="col-12 col-md-6">
                        <p>Are you a CILT Member?</p>
                        </div>
                        <div className="col-12 col-md-6">
                        <div className="custom-checkbox-wrapper">
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="mctCheckbox1"
                                value="true"
                                onClick={(e) =>
                                    setIsCiltMember(e.target.checked)
                                  }
                            />
                            <label
                                className="form-check-label"
                                for="mctCheckbox1"
                            >
                                Yes, I am a CILT Member
                            </label>
                            </div>
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="mctCheckbox2"
                                value="false"
                                onClick={(e) =>
                                    setIsCiltMember(e.target.checked)
                                  }
                            />
                            <label
                                className="form-check-label"
                                for="mctCheckbox2"
                            >
                                No, I’m not
                            </label>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="box-btn-wrapper submit-application">
                        <button
                         onClick={handleNextStep}
                        className="box-btn fill small-device-submit-application-btn"
                        >
                        Submit application
                        </button>
                    </div>
                    </div>}
                </div>
                <div className="header-step header-step-two">
                    <div className="icon"></div>
                    <div className="content">
                    <span>Step 2</span>
                    <h6>Payment</h6>
                    </div>
                </div>
               {
                (stepNumber === 3 && !information) &&
                <div className="small-device-form-step small-device-form-step-two">
                    <div className="input-field-wrapper wrapper sd-form-two collapse">
                    <div className="payment-info-box">
                        <ul>
                        <li>
                            <p>
                            <span>Account Name: </span> Interport Maritime
                            Limited
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
                            <span>Branch: </span> Scotia Branch (070276140),
                            Dhaka bKash 01753757376 (Personal)
                            </p>
                        </li>
                        </ul>
                    </div>
                    <div className="form-floating">
                        <input
                        type="text"
                        className="form-control"
                        id="paInput"
                        placeholder="Enter Payment Amount"
                         onChange={(e) =>
                                  setPaymentAmount(e.target.value)
                                }
                        />
                        <label for="paInput">Enter Payment Amount</label>
                    </div>
                    <div className="form-floating">
                        <select
                        className="form-select"
                        id="pmSelect"
                        aria-label="Select Payment Method"
                        onChange={(e) =>
                            setPaymentMethod(e.target.value)
                          }
                        >
                        <option selected value="1">
                            bank
                        </option>
                        <option value="2">bKash</option>
                        <option value="3">Nagad</option>
                        </select>
                        <label for="pmSelect">Select Payment Method</label>
                    </div>
                    <div className="form-floating">
                        <input
                        type="text"
                        className="form-control"
                        id="bnInput"
                        placeholder="Enter Bank Name"
                        onChange={(e) => setBankName(e.target.value)}
                        />
                        <label for="bnInput">Enter Bank Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                        type="text"
                        className="form-control"
                        id="tiInput"
                        placeholder="Enter Transaction ID"
                        onChange={(e) =>
                            setTransactionId(e.target.value)
                          }
                        />
                        <label for="tiInput">Enter Transaction ID</label>
                    </div>
                    <div className="box-btn-wrapper group-btn text-end">
                        <button
                        type="submit"
                        className="box-btn fill small-device-confirm-payment-btn mb-4"
                        >
                        confirm payment
                        </button>
                        <Link
                         onClick={clickBackButton}
                        className="box-btn small-device-go-back-btn"
                        >
                        go back
                        </Link>
                    </div>
                    </div>
                </div> }
                </form>
            </div>
        { information &&
            <div className="header-step header-step-three">
            <div className="icon"></div>
            <div className="content">
            <span>Step 3</span>
            <h6>Course Completion</h6>
            </div>
        </div> }
            <div className="small-device-form-step small-device-form-step-three"></div>
            <div className="header-step header-step-four">
                <div className="icon"></div>
                <div className="content">
                <span>Step 4</span>
                <h6>Certificate</h6>
                <Link
                    href="#"
                    className="box-btn view-certificate-btn mt-3"
                >
                    view
                </Link>
                </div>
            </div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetail;
