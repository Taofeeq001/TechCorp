import React from "react";
import './Testimony.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image from '../../Images/Background.jpg'
const Testimony = ()=>{

    return(
        <div className="head">
            <h1>Testimonies </h1>
            <Swiper 
                modules={[Navigation, Scrollbar]}
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                Navigation
                scrollbar={{draggable: false}}
                autoplay={{autoplay:true}}
                onSlideChange={()=> console.log('slide change')}
                onSwiper={(swiper)=> console.log(swiper)}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    520: {
                        slidesPerView: 2,
                    },
                    950: {
                        slidesPerView: 3,
                    }

                }}
                >
                    
                <SwiperSlide className="one">
                    <div style={{textAlign: 'center', display: "flex", flexDirection:'column', gap: "10px"}}>
                        <h1>Femtech Hub</h1>
                        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed omnis, beatae aut amet eveniet reiciendis tempora repudiandae. Neque commodi vel quas illum animi quo.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="one">
                    <div style={{textAlign: 'center', display: "flex", flexDirection:'column', gap: "10px"}}>
                        <h1>Toshconsult Technology</h1>
                        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed omnis, beatae aut amet eveniet reiciendis tempora repudiandae. Neque commodi vel quas illum animi quo.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="one">
                    <div style={{textAlign: 'center', display: "flex", flexDirection:'column', gap: "10px"}}>
                        <h1>MalHub</h1>
                        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed omnis, beatae aut amet eveniet reiciendis tempora repudiandae. Neque commodi vel quas illum animi quo.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="one">
                    <div style={{textAlign: 'center', display: "flex", flexDirection:'column', gap: "10px"}}>
                        <h1>TechHub</h1>
                        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed omnis, beatae aut amet eveniet reiciendis tempora repudiandae. Neque commodi vel quas illum animi quo.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="one">
                    <div style={{textAlign: 'center', display: "flex", flexDirection:'column', gap: "10px"}}>
                        <h1>MSME Hub</h1>
                        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed omnis, beatae aut amet eveniet reiciendis tempora repudiandae. Neque commodi vel quas illum animi quo.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Testimony;