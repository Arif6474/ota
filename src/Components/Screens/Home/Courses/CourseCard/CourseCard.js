import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CourseCard.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import clock from '../../../../../assets/images/icon-svg/clock-three.svg'
import user from '../../../../../assets/images/icon-svg/users-alt.svg'
import calender from '../../../../../assets/images/icon-svg/calender.svg'
import { Link, useNavigate } from "react-router-dom";
import useCourses from "../../../../../hooks/useCourses";
import { format } from "date-fns";
import { IMAGE_URL } from "../../../../../Utilities/APIs";
function CourseCard() {
   const [courses] =useCourses();
   const navigate = useNavigate();
   const navigateToProgramDetails = (id)=>{
    navigate(`program-details/${id}`)
   }
    return (
        <div className="container ">
            <div className="course_navigate">

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
            </div>
        <Swiper
           navigation={{
              
              prevEl: `.course_navigate .swiper-button-prev`,
              nextEl: `.course_navigate .swiper-button-next`
          }}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    courses?.map(course =>

                        <SwiperSlide key={course._id} onClick={()=> navigateToProgramDetails(course._id)}>
                            <div className="item card">
                                <Link  className="d-block">
                                    <div className="thumb-wrapper position-relative">
                                        <img src={IMAGE_URL + course.image} alt="thumb" />
                                    </div>
                                </Link>
                                <div className="do-status-box">
                                    <div className="do-status-inner">
                                        <div className="deadline">
                                            <p>
                                                Deadline: <br />
                                                <span>{format(new Date(course.registrationDeadline), 'dd-MM-yyyy')}</span>
                                            </p>
                                        </div>
                                        <div className="open-box">
                                            <Link href="#">Open For Registration</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="sub-title">{course.description}</p>
                                    <h4 className="main-title">{course.name}</h4>
                                    <div className="meta-tag-box">
                                        <div className="meta-tag-inner">
                                            <div className="months">
                                                <img className="icon" src={clock} alt="icon-clock" />
                                                <p>{course.duration} months</p>
                                            </div>
                                            <div className="seats">
                                                <img className="icon" src={user} alt="users" />
                                                <p>{course.seats} Seats</p>
                                            </div>
                                            <div className="date">
                                                <img className="icon" src={calender} alt="calender" />
                                                <p>{format(new Date(course.startDate), 'dd-MM-yyyy')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cfen-wrapper">
                                    <div className="cfen-inner">
                                        <div className="course-fee">
                                            <h6>Course Fee</h6>
                                            <p>Tk. {course.courseFee}</p>
                                        </div>
                                        <div className="enroll-now">
                                            <Link className="box-btn">enroll now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    )
}

export default CourseCard