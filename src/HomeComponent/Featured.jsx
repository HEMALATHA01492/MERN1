import React, { useState } from 'react';
import {BsFillCaretLeftFill,  BsFillCaretRightFill} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

function Featured() {
    const sliders = [
        {
            "url":"https://images01.nicepagecdn.com/page/11/17/website-template-preview-111767.webp"
        },
        {
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzHynvopVtWPQujKpQOJ0E42JvOktS8gb3g&usqp=CAU"
        },
        {
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3vsuZ1TeDL_hiP4obOd6bL4Rp5zZnvlSBQ&usqp=CAU"
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