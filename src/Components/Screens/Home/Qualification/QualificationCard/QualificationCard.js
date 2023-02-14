import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./QualificationCard.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import clock from "../../../../../assets/images/icon-svg/clock-three.svg";
import user from "../../../../../assets/images/icon-svg/users-alt.svg";
import calender from "../../../../../assets/images/icon-svg/calender.svg";
import { Link, useNavigate } from "react-router-dom";
import usePrograms from "../../../../../hooks/usePrograms";
import { format } from 'date-fns'
import { IMAGE_URL } from "../../../../../Utilities/APIs";

function QualificationCard() {
 const [programs] = usePrograms();
 const navigate = useNavigate();
 const navigateToProgramDetails = (id)=>{
  navigate(`program-details/${id}`)
 }
  return (
    <div className="container ">
      <div className="navigate_icon">

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      </div>
      <Swiper
         navigation={{
            
            prevEl: `.navigate_icon .swiper-button-prev`,
            nextEl: `.navigate_icon .swiper-button-next`
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {programs?.map((program) => (
          <SwiperSlide key={program._id} onClick={()=> navigateToProgramDetails(program._id)}>
            <div className="item card">
              <Link href="program-details.html" className="d-block">
                <div className="thumb-wrapper position-relative">
                  <img src={IMAGE_URL + program.image} alt="thumb" />
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
                    <Link href="#">Open For Registration</Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="sub-title">Professional Qualification Program</p>
                <h4 className="main-title">{program.name}</h4>
                <div className="meta-tag-box">
                  <div className="meta-tag-inner">
                    <div className="months">
                      <img className="icon" src={clock} alt="icon-clock" />
                      <p>{program.duration} Months</p>
                    </div>
                    <div className="seats">
                      <img className="icon" src={user} alt="users" />
                      <p>{program.seats} Seats</p>
                    </div>
                    <div className="date">
                      <img className="icon" src={calender} alt="calender" />
                      <p>{format(new Date(program?.startDate), 'dd-MM-yyyy')}</p>
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
                    <a className="box-btn" href="program-details.html">
                      enroll now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default QualificationCard;
