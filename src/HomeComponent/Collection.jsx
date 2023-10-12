import React, { useState } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import data from '../Data';
import {MdOutlineFavorite} from 'react-icons/md'


function Collection() {
    const [col,setCol] = useState(data);
    const showcollection = (color)=>{
        setCol(
            data.filter((item) =>{
                return item.color === color;
            })
        )
    }

  return (
    <>
          <TopNav />
          <div className='collection'>
            <h2>My Collections</h2>
            <div className='col-main'>
                <div className='col-sub'>
                   <button
                    onClick={()=>setCol(data)}>All</button>
                    <button
                    onClick={()=>showcollection("pink")}>Pink</button>
                    <button
                    onClick={()=>showcollection("peach")}>Peach</button>
                    <button
                    onClick={()=>showcollection("black")}>Black</button>
                    <button
                    onClick={()=>showcollection("red")}>Red</button>
                </div>
            </div>
              <div className='show-col'>
                {
                    col.map((item) =>(
                        <div key={item.id}  className='col-div position-relative'>
                        {/* <button className="col-fav position-absolute top-0 end-0" 
                        title="Add Favorite"
                        >
                        <MdOutlineFavorite size={25} />
                        </button> */}
                        <img src={item.image} className='col-img'/>
                        </div>
                            
                        
                    )
                        
                    )
                }
              </div>
          </div>

          <Footer />

    </>  
)
}

export default Collection