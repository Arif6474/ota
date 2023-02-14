import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TestimonialCard.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import quote from '../../../../../assets/images/icon-svg/quote.svg'
import axios from "axios";
import { IMAGE_URL, TESTIMONIALS_API } from "../../../../../Utilities/APIs";

function TestimonialCard() {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        const getTestimonials = async () => {
            const { data } = await axios.get(TESTIMONIALS_API);
            setTestimonials(data)
        }
        getTestimonials()
    }, [])
    return (
        <div className="container ">
            <div className="testimonial_navigate">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
            </div>
        <Swiper
           navigation={{
              
              prevEl: `.testimonial_navigate .swiper-button-prev`,
              nextEl: `.testimonial_navigate .swiper-button-next`
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
                    testimonials?.map(testimonial =>

                        <SwiperSlide key={testimonial._id} >
                            <div className="card testmonialCard">
                                <img className="quoteIcon" src={quote} alt="" />
                                <p className="text">{testimonial.description}</p>
                                <div className="testmonialUser">
                                    <div>
                                        <img src={IMAGE_URL + testimonial.image} alt="" />
                                    </div>
                                    <div>
                                        <h5>{testimonial.name}</h5>
                                        <h6>{testimonial.designation}</h6>
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

export default TestimonialCard