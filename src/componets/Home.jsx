import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Html from './Webpage/html/Html';
import Css from './Webpage/css/Css';
import Js from './Webpage/js/Js';
import HT from './leftSIde/HT';
import Casc from './LeftSide/Casc';


function Home() {
  
  const containerRef = useRef(null);

  useEffect(() => {
    
    const elements = gsap.utils.toArray(containerRef.current.children);

    gsap.from(elements, {
     
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      stagger: 0.2,
    });

    
    gsap.to('h1, h2, h3', {
      y: '+=10',
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'power1.inOut',
    });

    
    gsap.utils.toArray('.hover-animate').forEach((element) => {
      gsap.set(element, { scale: 1 });
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 0.9, duration: 0.3, ease: 'power2.in' });
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="max-h-screen h-screen">
      <div className="flex flex-col items-center justify-center p-8 h-full">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8 mt-4">
          Web Development Interactive Mindmap
        </h1>

        <div className="flex flex-col md:flex-row w-full max-w-6xl space-x-0 md:space-x-8 mb-3 max-h-svh ">
          <div className="bg-white rounded-3xl mt-8 p-8 shadow-xl w-full md:w-1/2 transition-transform transform hover-animate h-3/4 overflow-x-auto hide-scrollbar">
            <h2 className="text-2xl font-semibold text-gray-800  mb-12">What is Web Development?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Web development encompasses all aspects of building a website or web application, from front-end design to back-end server management.
             </p>
             <h3 className='text-black mb-8'>HTML</h3>
             <HT className='m-3'></HT>
             <Casc className='mt-12'></Casc>


          </div>
          <div className="flex flex-col gap-3 items-center mt-8 md:mt-0 w-full md:w-1/2 hover-animate max-h-screen">
            <h3 className="text-xl mb-2 text-gray-800 font-semibold">Preview Screen</h3>
            <div className="bg-white rounded-3xl shadow-xl w-full flex p-8 h-3/5  flex-col text-gray-500 transition-transform transform overflow-x-auto hide-scrollbar">
      
                <Html className='m-2'></Html>
                <Css className='m-2'></Css>
                <Js className='m-2'></Js>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
