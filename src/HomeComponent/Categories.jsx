import React, { useState } from 'react';
import data from '../Data';

function Categories() {
    const [value,setValue] = useState(data);
    const filterCat =(category) =>{
        setValue(
            data.filter((item) =>{
                return item.color === category;
            })
        )
    }
  return (
    <div className='category'>
        <h1>Our Collections</h1>
        <div className='category-main'>
            <div className='category-sub'>
            <button
            onClick={()=>setValue(data)}>All</button>
            <button
            onClick={()=>filterCat("pink")}>Pink</button>
            <button
             onClick={()=>filterCat("peach")}>Peach</button>
            <button
             onClick={()=>filterCat("black")}>Black</button>
            <button
             onClick={()=>filterCat("red")}>Red</button>
            </div>
        </div>

        <div className='show-category'>
            {
                value.map((item) =>(
                    <div key={item.id} className='cat-div'>
                        <img src={item.image} className='cat-img'/>

                    </div>
                ))
            }

        </div>

    </div>
  )
}

export default Categories