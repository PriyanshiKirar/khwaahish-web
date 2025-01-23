import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';

const BridalEdit = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden text">
      <div className="w-full">
        <img
          src="/Images/Bridal-EditFull.jpg"
          alt="First Page"
          className="w-full h-full hidden sm:block object-cover"
        />
        <img className="sm:hidden" src="/Images/Bridal-Edithalf.jpg" alt="" />
      </div>
      <div className="flex flex-col w-full items-center px-4 md:px-8">
        <h1
          style={{ fontFamily: 'Carpethen' }}
          className="text-[10vw] text-[#474545] text-center z-10 sm:text-[8vw] sm:mt-[-5vw] md:text-[6vw] md:mt-[-2vw] lg:text-[30vh] lg:mt-[-12vw]"
        >
          Bridal Edit
        </h1>
        <p className="text-sm text-[#757575] font-light w-[90vw] text-center sm:text-base md:text-lg lg:w-[70vw]">
          We have curated a collection of pieces that best define traditions, culture, and authenticity. From simple to traditional, from flamboyant to the whimsical, we have it all covered! Browse through our variety of moods and discover what resonates with you the most.
        </p>
        <h2
          style={{ fontFamily: 'Carpethen' }}
          className="text-[10vw] text-[#474545] text-center sm:text-[5vw] md:text-[5vw] mb-20"
        >
          Engagement
        </h2>
      </div>
      
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

      <div className='w-full h-screen bg-black'>

      </div>
    </div>
  );
};

export default BridalEdit;
