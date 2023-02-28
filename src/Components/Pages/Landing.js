import React from 'react';
import { Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';
import Heading from '../Common/Heading';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";




const Landing = () => {
  let navigate =useNavigate();
  return (
    <div className='landing_wrapper'>
      <h1>Link Here</h1>
      <p onClick={()=>navigate('/flight')}>Flight</p>
      <Link>Hotel</Link>
      <div className='Reviews_section'>
        <Container>
            <div className='landing_Sections_header'>
              <Heading title="Reviews" desc="What people says about Golobe facilities" />
              <button className='see_All_btn'>See all</button>
            </div>
            <div className='reviews_Slider'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={50}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="reviewsslider"
                  >
                        <SwiperSlide><div className='box'>Mohsin</div></SwiperSlide>
                        <SwiperSlide><div className='box'>2</div></SwiperSlide>
                        <SwiperSlide><div className='box'>3</div></SwiperSlide>
                        <SwiperSlide><div className='box'>4</div></SwiperSlide>
                        <SwiperSlide><div className='box'>5</div></SwiperSlide>
                        <SwiperSlide><div className='box'>6</div></SwiperSlide>
                        <SwiperSlide><div className='box'>7</div></SwiperSlide>
                        
                  </Swiper>
            </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Landing