import React, { useState, useEffect, useRef  } from 'react'



const promoProduct = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
];

let count = 0;
let slideInterval;




function Slider(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef();
    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    }
    useEffect(() => {
        slideRef.current.addEventListener
        ('animationend', removeAnimation)
        slideRef.current.addEventListener
        ('mouseenter', pauseSlider)
        slideRef.current.addEventListener
        ('mouseleave', startSlider)
            startSlider();
      }, []);
    
      const startSlider = () => {
        slideInterval = setInterval(() => {
          handleOnNextClick();
        }, 3000);
      };
    const pauseSlider = () => {
        clearInterval(slideInterval)
    }

    
    
const handleOnNextClick = () => { 
    count = (count + 1) % promoProduct.length;
    setCurrentIndex(count)
    slideRef.current.classList.add("fade-anim");
};
const handleOnPrevClick = () => { 
    const promoProductLenght = promoProduct.length;
    count = (currentIndex + promoProductLenght - 1) % promoProductLenght;
    setCurrentIndex(count)
    slideRef.current.classList.add("fade-anim");
};





  return (
    <div className="flex justify-center">
      <div ref={slideRef} className="relative select-none mt-24 justify-center">
        <img className="rounded-xl" src={promoProduct[currentIndex]} alt="" />

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start">
          <button onclick={handleOnPrevClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button onclick={handleOnNextClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider