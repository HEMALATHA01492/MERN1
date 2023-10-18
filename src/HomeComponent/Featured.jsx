import React, { useState } from 'react';
import {BsFillCaretLeftFill,  BsFillCaretRightFill} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

function Featured() {
    const sliders = [
        {
            "url":"https://images01.nicepagecdn.com/page/11/17/website-template-preview-111767.webp"
        },
        {
            "url":"https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "url":"https://www.quizexpo.com/wp-content/uploads/2021/06/cover-22-850x491.jpg"
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlider = ()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
       }  
       
       const nextSlider = ()=>{
        const isLastSlide  = currentIndex === sliders.length -1
        const newIndex = isLastSlide  ? 0: currentIndex + 1
        setCurrentIndex(newIndex)
       }
   
       const moveToNextSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
       }

  return (
    <div className='featured'>
        <div className='featured-sub'
        style={{backgroundImage:`url(${sliders[currentIndex].url})`}}>
        </div>
        <div className='leftarrow'>
        <BsFillCaretLeftFill onClick={prevSlider}/>
        </div>
        <div className='rightarrow'>
        <BsFillCaretRightFill onClick={nextSlider}/>
        </div>

        <div  className='image'>
         {
            sliders.map((sliderItems, slideIndex)=>(
               <div 
                key={slideIndex}
                onClick={()=>moveToNextSlide (slideIndex)}
                className='dot'>
                <RxDotFilled/>
               </div>
            ))
         }
    </div>
    </div>
  )
}

export default Featured;