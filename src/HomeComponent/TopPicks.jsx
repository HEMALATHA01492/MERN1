import React from 'react';
import data from '../Data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function TopPicks() {
  return (
    <>
    <h1 className='toppicks'> Top Collections</h1>
    <div className='topPick-card lg'>
      <Splide options={{perPage:4}}>
     {
       data.map((item) =>{
        return(
          <SplideSlide key={item.id}>
          <div className='d-main m-2' >
            <div className='d-sub'>
            
            {/* <p className='p-2'>{item.color}</p> */}
            <button className="d-button">
                      Add To Favorite
            </button>
            </div>
            <img src={item.image}/>
          </div>  
          </SplideSlide>
        )
       })
     } 
     </Splide>
    </div>
    </>
  )
}

export default TopPicks;
