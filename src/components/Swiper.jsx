import React from 'react'
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';
const Swiper = () => {
  return (
   
         <div className="w-full h-[60vh ">
           <Swiper
             navigation={true}
             slidesPerView={3} // Display 3 slides at a time
             spaceBetween={30} // Add space between slides
             loop = {true}
             modules={[Navigation]}
             className="mySwiper w-full h-full flex items-center"
           >
            
             <SwiperSlide>
               <img src="src/asset/enagement-single-img1.jpg" alt="" />
             </SwiperSlide>
             <SwiperSlide>
               <img src="src/asset/enagement-img4.jpg" alt="" />
             </SwiperSlide>
             <SwiperSlide>
               <img src="src/asset/enagement-first-img3 copy.jpg" alt="" />
             </SwiperSlide>
       
             <SwiperSlide>
               <img src="src/asset/enagement-single-img1.jpg" alt="" />
             </SwiperSlide>
             <SwiperSlide>
               <img src="src/asset/enagement-img4.jpg" alt="" />
             </SwiperSlide>
             <SwiperSlide>
               <img src="src/asset/enagement-first-img3 copy.jpg" alt="" />
             </SwiperSlide>
           
            
             <SwiperSlide>
               <img src="src/asset/enagement-single-img1.jpg" alt="" />
             </SwiperSlide>
             <SwiperSlide>
               <img src="src/asset/enagement-img4.jpg" alt="" />
             </SwiperSlide>
             <SwiperSlide>
               <img src="src/asset/enagement-first-img3 copy.jpg" alt="" />
             </SwiperSlide>
             <SwiperSlide>
               <img src="src/asset/enagement-single-img1.jpg" alt="" />
             </SwiperSlide>
           </Swiper>
         </div>
   
  )
}

export default Swiper