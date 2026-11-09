// import React from "react";
// import './Hero.css'
// import { Link, NavLink } from "react-router-dom";
// import CountUp from "react-countup";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './hswiper.css';

// // import required modules
// import { EffectFade, Navigation, Pagination, Autoplay, EffectCreative } from 'swiper';
// import Header from "../Header/Header";
// import { motion } from "framer-motion";
// import { titleVariants } from "../../utils/animations";

// const Hero = () =>{
//   const importantStyle = {
//     overflow: 'hidden !important', // Applying !important
//   };
//     return(  
//         <div style={importantStyle}>
//       <Swiper
//         spaceBetween={30}
//         loop={true}
//         speed = {2200}
//         grabCursor={true}
//         effect={'creative'}
//         creativeEffect={{
//           prev: {
//             shadow: true,
//             translate: ['-20%', 0, -1],
//           },
//           next: {
//             translate: ['100%', 0, 0],
//           },
//         }}
//         // modules={[EffectCreative]}
//         // navigation={true}
//         // pagination={{
//         //   clickable: true,
//         // }}
//         autoplay={{
//           delay: 5100,
//           disableOnInteraction: false,
//         }}
//         modules={[EffectFade, Navigation, Pagination, Autoplay, EffectCreative]}
        
//         className="mySwiper"
//       >
        
//             <SwiperSlide className="hero-wrapper">
//             {/* <div className="container">
//                 <motion.video
//                     className='bg-video'
//                     loop
//                     autoPlay
//                     muted
//                     controls >
//                     <source src="/oakvids.mp4" type='video/mp4' />
//                 </motion.video>
//             </div> */}

//             <div
           
//              className="paddings innerWidth flexCenter hero-container" >
//                 <motion.div
//                  initial={{ opacity: 0, x: -100 }}
//                  whileInView={{
//                      opacity: 1,
//                      x: 0,
//                      transition: {
//                          type: "easeIn",
//                          duration: 1,
//                          delay: .7
//                      }
//                  }} 
//                  className="flexColStart hero-left">
//                   <motion.div 
                  
//                   className="hero-title">
//                     {/* <div className="orange-circle"/> */}
//                     <h1>
//                         The Oak Villa <br/> </h1>
//                         <h2>
//                         A specially curated ultra luxury enclave intelligently
// designed with modern amenities
//                         </h2>
//                   </motion.div>
//                   {/* <div className="flexColStart secondaryText hero-des">
//                     <span>
//                     Unlock your path to wealth with smart </span><span>
//                      investment in real estate ...
//                     </span>
//                   </div> */}
//                   <div className="innerWidth hero-button">
//                     <div>
//                   <button className="button">
//                   <Link to={"/projects"}>
//                   View Properties
//                 </Link>
//                     </button>
//                     </div>
//                     <div>
//                     <button className="button">
//                     <a href="">Get Started</a>
//                     </button>
//                     </div>
//                   </div>

                  
//                   <div className="flexCenter stats">
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={10} end={780} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Projects
//                     </span>
                      
//                   </div>
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={10} end={350} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Upcoming 
//                     </span>
                      
//                   </div>
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={5} end={420} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Sold Out 
//                     </span>
                      
//                   </div>
//                   </div>

   
//                 </motion.div>
//                 <motion.div
//                 initial='offscreen'
//                 whileInView={"onscreen"}
//                 variants={titleVariants} className="flexCenter hero-right">
//                     <div className="image-container">
//                         <img src="./oakpics/AB-04_16.jpg" alt="" />
//                     </div>
//                     </motion.div>
//                     </div>
//             </SwiperSlide>

//             <SwiperSlide className="hero-wrapper03">
//             {/* <div className="container">
//                 <motion.video
//                     className='bg-video'
//                     loop
//                     autoPlay
//                     muted
//                     controls >
//                     <source src="/oakvids.mp4" type='video/mp4' />
//                 </motion.video>
//             </div> */}

//             <div
           
//              className="paddings innerWidth flexCenter hero-container" >
//                 <motion.div
//                  initial={{ opacity: 0, x: -100 }}
//                  whileInView={{
//                      opacity: 1,
//                      x: 0,
//                      transition: {
//                          type: "easeIn",
//                          duration: 1,
//                          delay: .7
//                      }
//                  }} 
//                  className="flexColStart hero-left">
//                   <motion.div 
                  
//                   className="hero-title">
//                     {/* <div className="orange-circle"/> */}
//                     <h1>
//                         Acorn <br/> </h1>
//                         <h2>
//                         A specially curated ultra luxury enclave intelligently
// designed with modern amenities
//                         </h2>
//                   </motion.div>
//                   {/* <div className="flexColStart secondaryText hero-des">
//                     <span>
//                     Unlock your path to wealth with smart </span><span>
//                      investment in real estate ...
//                     </span>
//                   </div> */}
//                   <div className="innerWidth hero-button">
//                     <div>
//                   <button className="button">
//                   <Link to={"/projects"}>
//                   View Properties
//                 </Link>
//                     </button>
//                     </div>
//                     <div>
//                     <button className="button">
//                     <a href="">Get Started</a>
//                     </button>
//                     </div>
//                   </div>

                  
//                   <div className="flexCenter stats">
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={10} end={780} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Projects
//                     </span>
                      
//                   </div>
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={10} end={350} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Upcoming 
//                     </span>
                      
//                   </div>
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={5} end={420} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Sold Out 
//                     </span>
                      
//                   </div>
//                   </div>

   
//                 </motion.div>
//                 <motion.div
//                 initial='offscreen'
//                 whileInView={"onscreen"}
//                 variants={titleVariants} className="flexCenter hero-right">
//                     <div className="image-container">
//                         <img src="./oakpics/Acornhouse5.png" alt="" />
//                     </div>
//                     </motion.div>
//                     </div>
//             </SwiperSlide>

//             <SwiperSlide className="hero-wrapper">
//             <div className="container">
//                 <motion.video
//                     className='bg-video'
//                     loop
//                     autoPlay
//                     muted
//                     controls >
//                     <source src="/oakvillla.mp4" type='video/mp4' />
//                 </motion.video>
//             </div>

//             <div
           
//              className="paddings innerWidth flexCenter hero-container" >
//                 <motion.div
//                  initial={{ opacity: 0, x: -100 }}
//                  whileInView={{
//                      opacity: 1,
//                      x: 0,
//                      transition: {
//                          type: "easeIn",
//                          duration: 1,
//                          delay: .7
//                      }
//                  }} 
//                  className="flexColStart hero-left">
//                   <motion.div 
                  
//                   className="hero-title">
//                     {/* <div className="orange-circle"/> */}
//                     <h1>
//                     The Oak Mews <br/> </h1>
//                         <h2>
//                         It is meticulously built with you in mind to create a
// truly luxurious and ideal family home living experience</h2>
//                   </motion.div>
//                   {/* <div className="flexColStart secondaryText hero-des">
//                     <span>
//                     Unlock your path to wealth with smart </span><span>
//                      investment in real estate ...
//                     </span>
//                   </div> */}
//                   <div className="innerWidth hero-button">
//                     <div>
//                   <button className="button">
//                   <Link to={"/projects"}>
//                   View Properties
//                 </Link>
//                     </button>
//                     </div>
//                     <div>
//                     <button className="button">
//                     <a href="">Get Started</a>
//                     </button>
//                     </div>
//                   </div>

                  
//                   <div className="flexCenter stats">
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={10} end={780} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Projects for Sale
//                     </span>
                      
//                   </div>
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={10} end={350} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Upcoming 
//                     </span>
                      
//                   </div>
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={5} end={420} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Sold Out 
//                     </span>
                      
//                   </div>
//                   </div>

   
//                 </motion.div>
//                 <motion.div
//                 initial='offscreen'
//                 whileInView={"onscreen"}
//                 variants={titleVariants} className="flexCenter hero-right">
//                     <div className="image-container">
//                         <img src="./oakpics/oakmewspik2.jpg" alt="" />
//                     </div>
//                     </motion.div>
//                     </div>
//             </SwiperSlide>

// <SwiperSlide className="hero-wrapper04">
// {/* <div className="container">
//     <motion.video
//         className='bg-video'
//         loop
//         autoPlay
//         muted
//         controls >
//         <source src="/oakvids.mp4" type='video/mp4' />
//     </motion.video>
// </div> */}

// <div

//  className="paddings innerWidth flexCenter hero-container" >
//     <motion.div
//      initial={{ opacity: 0, x: -100 }}
//      whileInView={{
//          opacity: 1,
//          x: 0,
//          transition: {
//              type: "easeIn",
//              duration: 1,
//              delay: .7
//          }
//      }} 
//      className="flexColStart hero-left">
//       <motion.div 
      
//       className="hero-title">
//         {/* <div className="orange-circle"/> */}
//         <h1>
//             Lusso <br/> </h1>
//             <h2>
//             A specially curated ultra luxury enclave intelligently
// designed with modern amenities
//             </h2>
//       </motion.div>
//       {/* <div className="flexColStart secondaryText hero-des">
//         <span>
//         Unlock your path to wealth with smart </span><span>
//          investment in real estate ...
//         </span>
//       </div> */}
//       <div className="innerWidth hero-button">
//         <div>
//       <button className="button">
//       <Link to={"/projects"}>
//       View Properties
//     </Link>
//         </button>
//         </div>
//         <div>
//         <button className="button">
//         <a href="">Get Started</a>
//         </button>
//         </div>
//       </div>

      
//       <div className="flexCenter stats">
//       <div className="flexColCenter hero-stats">
//         <span>
//         <CountUp start={10} end={780} duration={4}/> <span>+</span>
//         </span>
       
//         <span className="secondaryText2">
//         Projects
//         </span>
          
//       </div>
//       <div className="flexColCenter hero-stats">
//         <span>
//         <CountUp start={10} end={350} duration={4}/> <span>+</span>
//         </span>
       
//         <span className="secondaryText2">
//         Upcoming 
//         </span>
          
//       </div>
//       <div className="flexColCenter hero-stats">
//         <span>
//         <CountUp start={5} end={420} duration={4}/> <span>+</span>
//         </span>
       
//         <span className="secondaryText2">
//         Sold Out 
//         </span>
          
//       </div>
//       </div>


//     </motion.div>
//     <motion.div
//     initial='offscreen'
//     whileInView={"onscreen"}
//     variants={titleVariants} className="flexCenter hero-right">
//         <div className="image-container">
//             <img src="./oakpics/lusso3.jpg" alt="" />
//         </div>
//         </motion.div>
//         </div>
// </SwiperSlide>

              

//             <SwiperSlide className="hero-wrapper02">
//             <section  className="paddings innerWidth flexCenter hero-container">
// <div className="flexColStart hero-left">
//   <div className="hero-title">
//     {/* <div className="orange-circle"/> */}
//     <h1>
//     The Oak Heights <br/> </h1>
//         <h2>
//         A complete work of art. Its timeless design draws its
// inspiration from modern architectural masterpieces around the word. </h2>
//   </div>
//   {/* <div className="flexColStart secondaryText hero-des">
//     <span>
//     Unlock your path to wealth with smart </span><span>
//      investment in real estate ...
//     </span>
//   </div> */}
//   <div className="innerWidth hero-button">
//     <div>
//   <button className="button">
//   <Link to={"/projects"}>
//   View Properties
// </Link>
//     </button>
//     </div>
//     <div>
//     <button className="button">
//     <a href="">Get Started</a>
//     </button>
//     </div>
//   </div>

  
//   <div className="flexCenter stats">
//   <div className="flexColCenter hero-stats">
//     <span>
//     <CountUp start={10} end={780} duration={4}/> <span>+</span>
//     </span>
   
//     <span className="secondaryText2">
//                     Projects for Sale
//                     </span>
                      
//                   </div>
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={10} end={350} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Upcoming 
//                     </span>
                      
//                   </div>
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={5} end={420} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Sold Out 
//                     </span>
                      
//   </div>
//   </div>


// </div>
// <div className="flexCenter hero-right">
//     <div className="image-container">
//         <img src="./hero-image.png" alt="" />
//     </div>
//     </div>
//     </section>
// </SwiperSlide>


//             <SwiperSlide className="hero-wrapper">
//             <div className="container">
//                 <motion.video
//                     className='bg-video'
//                     loop
//                     autoPlay
//                     muted
//                     controls >
//                     <source src="/residdence.mp4" type='video/mp4' />
//                 </motion.video>
//             </div>

//             <div
           
//              className="paddings innerWidth flexCenter hero-container" >
//                 <motion.div
//                  initial={{ opacity: 0, x: -100 }}
//                  whileInView={{
//                      opacity: 1,
//                      x: 0,
//                      transition: {
//                          type: "easeIn",
//                          duration: 1,
//                          delay: .7
//                      }
//                  }} 
//                  className="flexColStart hero-left">
//                   <motion.div 
                  
//                   className="hero-title">
//                     {/* <div className="orange-circle"/> */}
//                     <h1>
//                     The Oak Place <br/> </h1>
//                         <h2>
//                         An undiluted embodiment of luxury, style and sophistication. It’s designed to have a Home Automation System home making your home smart and intelligent. 
//                         </h2>
//                   </motion.div>
//                   {/* <div className="flexColStart secondaryText hero-des">
//                     <span>
//                     Unlock your path to wealth with smart </span><span>
//                      investment in real estate ...
//                     </span>
//                   </div> */}
//                   <div className="innerWidth hero-button">
//                     <div>
//                   <button className="button">
//                   <Link to={"/projects"}>
//                   View Properties
//                 </Link>
//                     </button>
//                     </div>
//                     <div>
//                     <button className="button">
//                     <a href="">Get Started</a>
//                     </button>
//                     </div>
//                   </div>

                  
//                   <div className="flexCenter stats">
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={10} end={780} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Projects for Sale
//                     </span>
                      
//                   </div>
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={10} end={350} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Upcoming 
//                     </span>
                      
//                   </div>
//                   <div className="flexColCenter hero-stats">
//                     <span>
//                     <CountUp start={5} end={420} duration={4}/> <span>+</span>
//                     </span>
                   
//                     <span className="secondaryText2">
//                     Sold Out 
//                     </span>
                      
//                   </div>
//                   </div>

   
//                 </motion.div>
//                 <motion.div
//                 initial='offscreen'
//                 whileInView={"onscreen"}
//                 variants={titleVariants} className="flexCenter hero-right">
//                     <div className="image-container">
//                         <img src="./a.jpg" alt="" />
//                     </div>
//                     </motion.div>
//                     </div>
//             </SwiperSlide>
            
       
//         </Swiper>
//         </div>
//       )
// }

// export default Hero



import React, { useState, useEffect } from "react";
import './Hero.css'
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './hswiper.css';

import { EffectFade, Navigation, Pagination, Autoplay, EffectCreative } from 'swiper';
import { motion } from "framer-motion";
import { titleVariants } from "../../utils/animations";

// Slide data for cleaner code
const slides = [
  {
    id: 1,
    className: "hero-wrapper",
    title: "The Oak Villa",
    description: "A specially curated ultra luxury enclave intelligently designed with modern amenities",
    image: "./oakpics/AB-04_16.jpg",
    bgImage: "./abb.jpg"
  },
  {
    id: 2,
    className: "hero-wrapper03",
    title: "Acorn",
    description: "A specially curated ultra luxury enclave intelligently designed with modern amenities",
    image: "./oakpics/lusso3.jpg",
    bgImage: "./Acornhouse2.jpg"
  },
  {
    id: 3,
    className: "hero-wrapper04",
    title: "Lusso",
    description: "A specially curated ultra luxury enclave intelligently designed with modern amenities",
    image: "./oakpics/lusso3.jpg",
    bgImage: "./lusso2.jpg"
  },
  {
    id: 4,
    className: "hero-wrapper02",
    title: "The Oak Heights",
    description: "A complete work of art. Its timeless design draws its inspiration from modern architectural masterpieces around the world.",
    image: "./hero-image.png",
    bgImage: "./hero-image.png"
  },
  {
    id: 5,
    className: "hero-wrapper",
    title: "The Oak Place",
    description: "An undiluted embodiment of luxury, style and sophistication. It's designed to have a Home Automation System making your home smart and intelligent.",
    image: "./a.jpg",
    bgImage: "./abb.jpg",
    hasVideo: true,
    videoSrc: "/residdence.mp4"
  }
];

// Loading Skeleton Component
const HeroSkeleton = () => (
  <div className="hero-skeleton">
    <div className="skeleton-content">
      <div className="skeleton-logo"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-buttons">
        <div className="skeleton-btn"></div>
        <div className="skeleton-btn"></div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Preload all background images
  useEffect(() => {
    const imageUrls = slides.map(slide => slide.bgImage);
    const cardImages = slides.map(slide => slide.image);
    const allImages = [...new Set([...imageUrls, ...cardImages])];
    
    let loadedCount = 0;
    const totalImages = allImages.length;

    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / totalImages) * 100));
          resolve(); // Resolve even on error to not block
        };
        img.src = src;
      });
    };

    Promise.all(allImages.map(preloadImage)).then(() => {
      // Small delay to ensure smooth transition
      setTimeout(() => setImagesLoaded(true), 300);
    });
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="hero-loading">
        <div className="loading-content">
          <img src="./logo.png" alt="Oak Homes" className="loading-logo" />
          <div className="loading-bar-container">
            <div className="loading-bar" style={{ width: `${loadProgress}%` }}></div>
          </div>
          <span className="loading-text">Loading Experience... {loadProgress}%</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <Swiper
        spaceBetween={0}
        loop={true}
        speed={1500}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay, EffectCreative]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={slide.className}>
            {slide.hasVideo && (
              <div className="container">
                <video
                  className='bg-video'
                  loop
                  autoPlay
                  muted
                  playsInline
                >
                  <source src={slide.videoSrc} type='video/mp4' />
                </video>
              </div>
            )}

            <div className="paddings innerWidth flexCenter hero-container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flexColStart hero-left"
              >
                <div className="hero-title">
                  <h1>{slide.title}</h1>
                  <h2>{slide.description}</h2>
                </div>

                <div className="innerWidth hero-button">
                  <div>
                    <button className="button">
                      <Link to={"/projects"}>View Properties</Link>
                    </button>
                  </div>
                  <div>
                    <button className="button button-outline">
                      <a href="https://forms.gle/jhp12RHNDrJ77DE1A">Get Started</a>
                    </button>
                  </div>
                </div>

                <div className="flexCenter stats">
                  <div className="flexColCenter hero-stats">
                    <span>
                      <CountUp start={10} end={780} duration={4} enableScrollSpy scrollSpyOnce /> <span>+</span>
                    </span>
                    <span className="secondaryText2">Projects</span>
                  </div>
                  <div className="flexColCenter hero-stats">
                    <span>
                      <CountUp start={10} end={350} duration={4} enableScrollSpy scrollSpyOnce /> <span>+</span>
                    </span>
                    <span className="secondaryText2">Upcoming</span>
                  </div>
                  <div className="flexColCenter hero-stats">
                    <span>
                      <CountUp start={5} end={420} duration={4} enableScrollSpy scrollSpyOnce /> <span>+</span>
                    </span>
                    <span className="secondaryText2">Sold Out</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flexCenter hero-right"
              >
                <div className="image-container">
                  <img src={slide.image} alt={slide.title} loading="eager" />
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero