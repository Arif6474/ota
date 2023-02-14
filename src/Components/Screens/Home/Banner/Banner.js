import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import './Banner.css'
import axios from "axios";
import { HOME_HERO_SECTIONS_API, IMAGE_URL } from "../../../../Utilities/APIs";
function Banner() {
    const [homeHeroSections, setHomeHeroSections] = useState([])
    useEffect(() => {
        const getHomeHeroSections = async () => {
            const { data } = await axios.get(HOME_HERO_SECTIONS_API);
            setHomeHeroSections(data)
        }
        getHomeHeroSections()
    }, [])
    const pagination = {
        clickable: true
    };

    return (
        <div className="container banner">
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    homeHeroSections?.map(homeHeroSection => 
                <SwiperSlide key={homeHeroSection._id}>
                    <div className="banner-item">
                        <img src={IMAGE_URL + homeHeroSection.image} alt="" />
                        {/* <img src="assets/images/home/slide-1.png" className="d-none d-sm-block w-100" alt="carousel-image" />
                            <img src="assets/images/home/sd-slide-1.png" className="d-sm-none w-100" alt="carousel-image" /> */}
                        <div className="banner-caption">
                            <p className="text">{homeHeroSection.description}</p>
                            <h1 className=" banner-title">{homeHeroSection.heading}</h1>
                            <h6 className="deadline">
                                Registration Deadline:
                                <span>10 October, 2021</span>
                            </h6>
                            <h6>
                                Course Fee:
                                <span>Tk. 20,000</span>
                            </h6>
                            <div className="button-group">
                                <a href="program-details.html#start-step" className="box-btn fill">enroll now</a>
                                <a href="program-details.html" className="box-btn">learn more</a>
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

export default Banner