



import React from 'react';
import firstImage from '/firstImg.jpg';
import brownImage from '/brownimage.jpg'
import KhaahishInerImage from '/khwaahish-inner-view.jpg'
const Center = () => {
  return (
    <div className="w-screen ">
      {/* First Section */}
      <section
        className="relative w-full bg-black object-cover"
        style={{
          backgroundImage: `url(${firstImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover', // Ensures the image covers the section while maintaining aspect ratio
          height: '100vh', // Takes the full height of the viewport
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white top-1/2 transform -translate-y-1/2">
          <h1 className="text-4xl font-bold">Radiance that Whispers</h1>
          <p className="text-5xl font-serif italic mt-4">Southern Grace</p>
        </div>
      </section>

      {/* Lower Div with Full-Screen iframe */}
      <div className="lower w-full h-screen ">
        <iframe
          className="w-full h-full"
          src="https://customer-uyl4nd0q977i595d.cloudflarestream.com/0d877744a314ff29e853ad0670727ab6/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-uyl4nd0q977i595d.cloudflarestream.com%2F0d877744a314ff29e853ad0670727ab6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
          frameBorder="0"
          allowFullScreen
          title="Full-Screen Video"
        ></iframe>
      </div>
      <div className="lower w-full h-screen relative"
        style={{
          backgroundImage: `url(${brownImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover', // Ensures the image covers the section while maintaining aspect ratio
          height: '100vh', // Takes the full height of the viewport
        }}
      >
        <div className='w-full h-full absolute top-0 left-0 flex justify-between pt-[8vw] gap-[5vw]'>
          <div className='w-[50vw] h-[70vh] bg-white ml-10 flex flex-wrap justify-between items-center'>
            <div className='firt1 w-[33%] h-[33%] bg-[#fff]'>
              <img src="/SGLIMG.svg" alt="" />
            </div>
            <div className='firt1 w-[33%] h-[33%] bg-[#EDEDED]'>
              <img src="/BIS.svg" alt="" />
            </div>
            <div className='firt1 w-[33%] h-[33%] bg-[#fff] '>
              <img src="/Experience.svg" alt="" />
            </div>
            <div className='firt1 w-[33%] h-[33%] bg-[#EDEDED]'>
              <img src="/Assured.svg" alt="" />
            </div>
            <div className='firt1 w-[33%] h-[33%] bg-[#fff]'>
              <img src="/Exchange-.svg" alt="" />
            </div>
            <div className='firt1 w-[33%] h-[33%] bg-[#EDEDED]'>
              <img src="/Gold-Exchange.svg" alt="" />
            </div>
            <div className='firt1 w-[33%] h-[33%] bg-[#fff]'>
              <img src="/Shipping.svg" alt="" />
            </div>
            <div className='firt1 w-[33%] h-[33%] bg-[#EDEDED]'>
              <img src="/Warranty.svg" alt="" />
            </div>
            <div className='firt1 w-[33%] h-[33%] bg-[#fff]'>
              <img src="/Design.svg" alt="" />
            </div>
          </div>

          {/* right section */}

          <div className="w-[50vw] mt-[9vw] ">
            <h2 className="text-3xl font-bold mb-4 text-white">
              - The Khwaahish Promise -
            </h2>
            <p className="text-white leading-relaxed mr-10 font-[300]">
              Be it a fabulous range of jewellery designs, a world-class finish, a
              premium shopping experience, the best in class quality control
              standards, or a fair pricing strategy, we have benchmarked high
              standards because we value your trust & relations and strive to be
              your favourite personalised family jeweller for all occasions.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full h-screen relative"
        style={{
          backgroundImage: `url(${KhaahishInerImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover', // Ensures the image covers the section while maintaining aspect ratio
          height: '100vh', // Takes the full height of the viewport
        }}
      >
        <div className='absolute flex-col flex w-[65vw] h-[30vh]
 bg-[#0000008F] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className='text-center text-[3vw] uppercase font-[400]  text-white'>Visit our store now to view this collection</h1>
          <div className=' flex gap-6 text-white text-4xl items-center  justify-center mt-4'>
            <i className="ri-map-pin-fill"></i>
            <i className="ri-whatsapp-line"></i>
            <i className="ri-phone-line"></i>
          </div>
        </div>


      </div>

      <div className="lower w-full max-h-[180vh] relative"
        style={{
          backgroundImage: `url(${brownImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover', // Ensures the image covers the section while maintaining aspect ratio
          height: '100vh', // Takes the full height of the viewport
        }}
      >

        <div className='w-full h-full absolute top-0 left-0 text-white pt-12 flex flex-col items-center '>
          <h1 className='text-2xl mb-4' >Khwaahish means Desire - a Desire to be Enchanted by all things Precious & Beautiful.</h1>
          <p className='text-1xl mb-4 text-center w-[70vw]'>Since 2003, our brand – Khwaahish - has become Chennai’s premium destination for Natural-Diamond Jewellery designed with passion and high level of craftsmanship. We strive to nurture strong bonds with our clients with an unmatched Shopping Experience and our unparalleled focus on expectational product designs, making us our customer’s favourite Diamond Jeweller.
            Explore our collection and experience a world of Diamond Jewellery, truly Different by Design.</p>
          <p>All our jewels are BIS Hallmarked and studded with natural diamonds certified by International Gemmological Institutes.

          </p>

          <div className='flex w-full h-[18vh] mt-24 gap-14 ml-[33vw] whitespace-nowrap overflow-hidden'>
            <img src="/tri.png" alt="" />
            <img src="/cir.png" alt="" />
            <img src="/tri2.png" alt="" />
            <img src="/ECL.png" alt="" />
            <img src="Rimg.png" alt="" />
          </div>
          <button className=' mt-5 px-10 text- uppercasexl py-2 bg-yellow-800 text-white uppercase rounded-full'>About us
          </button>
          <div className='flex mt-6 items-center'>
            <img className='w-[18vw] h-[18vh] ' src="/twoImg.svg" alt="" />
            <h1 className='text-3xl mt-10'>Customer Testimonials ___</h1>
          </div>

        </div>
      </div>
      <div className=' w-screen h-screen bg-yellow-200  ' >
        <div className='flex gap-10  pt-10 m-10'>

          <div className='w-[30vw] h-[58vh] mt-5 bg-white text-zinc-600  rounded-3xl flex items-center p-10 '>
            <p>True to the store’s motto, the jewellery pieces are truly different by design and I simply love them! </p>
          </div>
          <div className='w-[33vw] h-[64vh] bg-white text-zinc-600 rounded-3xl flex items-center p-10 '>
            <p>I love the craftsmanship at Khwaahish especially in the diamond necklaces. They beautifully drape the neck.
              I am sure my daughter will be the most beautiful bride when she adorns my purchase!  </p>
          </div>
          <div className='w-[30vw] mt-5 h-[60vh] bg-white text-zinc-600   rounded-3xl flex items-center p-10 '>
            <p> I love their designs... It’s modern, it’s elegant and chic!
              The great customer experience is something I always look forward to at Khwaahish.   </p>
          </div>
        </div>

        <div className='flex gap-20 text-white'>
          <div className='w-[33%] h-[20vh]  flex pl-7'>
            <div className='w-[9vw] h-[9vw] bg-slate-200 rounded-full'>
              <img src="" alt="" />
            </div>
            <div className='flex flex-col justify-center ml-4'>
              <h1 className='text-semibold text-2xl'>Geeta collin <br /></h1>
              <h3 className='text-zinc-300'>Home maker</h3>
            </div>

          </div>
          <div className='w-[33%] h-[20vh]  flex pl-7'>
            <div className='w-[9vw] h-[9vw] bg-slate-200 rounded-full'>
              <img src="" alt="" />
            </div>
            <div className='flex flex-col justify-center ml-4'>
              <h1 className='text-semibold text-2xl'>Poongkodi Arivunithi</h1>
              <h3 className='text-zinc-300'>Co- founder</h3>
            </div>

          </div>
          <div className='w-[33%] h-[20vh]  flex pl-7'>
            <div className='w-[9vw] h-[9vw] bg-slate-200 rounded-full'>
              <img src="" alt="" />
            </div>
            <div className='flex flex-col justify-center ml-4'>
              <h1 className='text-semibold text-2xl'>Rhea K Gwalani</h1>
              <h3 className='text-zinc-300'>Enterpreneur</h3>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Center;
