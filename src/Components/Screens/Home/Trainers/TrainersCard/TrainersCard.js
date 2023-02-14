import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TrainersCard.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link, useNavigate } from "react-router-dom";
import useTrainers from "../../../../../hooks/useTrainers";
import { IMAGE_URL } from "../../../../../Utilities/APIs";
function TrainersCard() {
    const [trainers] =useTrainers();
    const navigate = useNavigate();
    const navigateToTrainerDetails = (id) => {
        navigate(`/trainer-details/${id}`);
      };
    return (
        <div className="container ">
            <div className="trainers_navigate">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
            </div>
        <Swiper
           navigation={{
              
              prevEl: `.trainers_navigate .swiper-button-prev`,
              nextEl: `.trainers_navigate .swiper-button-next`
          }}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
              {
                trainers?.map(trainer => 
                    <SwiperSlide key={trainer._id} onClick={() => navigateToTrainerDetails(trainer._id)}>
                        <div className="item card">
                            <Link href="trainers-details.html" className="d-block-text-reset">
                               <img src={IMAGE_URL + trainer?.image} alt="" />
                                    <div className="card-body">
                                        <h5 className="name">{trainer?.name}</h5>
                                        <p className="designation">{trainer?.qualifications}</p>
                                        <p className="company">{trainer?.description}</p>
                                    </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                  
                    )
              }



            </Swiper>
        </div>
    )
}

export default TrainersCard