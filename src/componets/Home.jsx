import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import Html from './Webpage/html/Html';
import Css from './Webpage/css/Css';
import Js from './Webpage/js/Js';
import HT from './leftSIde/HT';
import Casc from './LeftSide/Casc';
import Javas from './LeftSide/javas';

function Home() {
  const containerRef = useRef(null);
  const previewRef = useRef(null); // Reference for the preview box

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const elements = gsap.utils.toArray(containerRef.current.children);

    // Animate the children of the container
    gsap.from(elements, {
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      stagger: 0.2,
    });

    // Animate h1, h2, h3 with a simple bounce effect
    gsap.to('h1, h2, h3', {
      y: '+=10',
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'power1.inOut',
    });

    // Hover animation for the elements with class 'hover-animate'
    gsap.utils.toArray('.hover-animate').forEach((element) => {
      gsap.set(element, { scale: 1 });
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 0.9, duration: 0.3, ease: 'power2.in' });
      });
    });

    // ScrollTrigger to change the background color of the preview box
    ScrollTrigger.create({
      trigger: '.Casc', // Target the HT element
      start: 'top center', // When the top of HT reaches the center of the viewport
      end: 'bottom top', // End when the bottom of HT reaches the top of the viewport
      onEnter: () => {
        gsap.to(previewRef.current, { backgroundColor: '#f0f8ff', duration: 0.5 }); // Change color when HT enters
      },
      onLeave: () => {
        gsap.to(previewRef.current, { backgroundColor: 'white', duration: 0.5 }); // Reset color when HT leaves
      },
      onEnterBack: () => {
        gsap.to(previewRef.current, { backgroundColor: '#f0f8ff', duration: 0.5 }); // Change color when scrolling back
      },
      onLeaveBack: () => {
        gsap.to(previewRef.current, { backgroundColor: 'white', duration: 0.5 }); // Reset color when scrolling back
      },
    });

  }, []);

  return (
    <div ref={containerRef} className="max-h-screen h-screen">
      <div className="flex flex-col items-center justify-center p-8 h-full">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8 mt-4">
          Web Development Interactive Mindmap
        </h1>

        <div className="flex flex-col md:flex-row w-full max-w-6xl space-x-0 md:space-x-8 mb-3 max-h-svh">
          <div className="bg-white rounded-3xl mt-8 p-8 shadow-xl w-full md:w-1/2 transition-transform transform hover-animate h-3/4 overflow-x-auto hide-scrollbar">
            <h2 className="text-2xl font-semibold text-gray-800 mb-12">What is Web Development?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Web development encompasses all aspects of building a website or web application, from front-end design to back-end server management.
            </p>
            <h4 className='text-black mt-4'>Parts of a Website</h4>
            <ul className="list-disc list-inside text-gray-600 text-lg">
              <li>Frontend - What we see</li>
              <li>Backend - What we don't see</li>
              <li>Database - Where data is stored</li>
            </ul>
            <img  className='mx-auto' src="https://www.10bestdesign.com/blog/content/images/2018/03/20.png" alt="image not found" style={{ height: '160px' }} />
            <h4  className='text-black mt-4'>Frontend Technologies</h4>
            <ul className="list-disc list-inside text-gray-600 text-lg">
              <li>HTML - Structure</li>
              <li>CSS - Style</li>
              <li>JavaScript - Behavior</li>
            </ul>
            <h3 className="text-black mb-8 HT">HTML</h3>
            <HT className="m-3" />
            <Casc className="mt-12" />
            <Javas className="m-12" />
          </div>

          <div className="flex flex-col gap-3 items-center mt-8 md:mt-0 w-full md:w-1/2 hover-animate max-h-screen">
            <h3 className="text-xl mb-2 text-gray-800 font-semibold">Preview Screen</h3>
            <div
              ref={previewRef} // Assign reference to the preview box
              className="bg-white rounded-3xl shadow-xl w-full flex p-8 py-2 h-3/5 flex-col text-gray-500 transition-transform hide-scrollbar overscroll-contain"
            >
              <Html className="m-2 max-h-fit" />
              <Css className="m-2" />
              <Js className="m-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
