import React, { useEffect, useState } from 'react';
import data from '../data';

function Categories() {
    const [tasks, setTasks] = useState(data);


    useEffect(() => {
      // Load tasks from localStorage on component mount
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    }, []);

    const filterCat =(category) =>{
        setTasks(
            data.filter((item) =>{
                return item.color === category;
            })
        )
    }
  return (
    <div className='category'>
        <h1>My Collections</h1>
        <div className='category-main'>
            <div className='category-sub'>
            <button
            onClick={()=>setTasks(data)}>All</button>
            <button
            onClick={()=>filterCat("pink")}>Pink</button>
            <button
             onClick={()=>filterCat("peach")}>Peach</button>
            <button
             onClick={()=>filterCat("black")}>Black</button>
            <button
             onClick={()=>filterCat("red")}>Red</button>
            <button
            onClick={()=>filterCat("blue")}>Blue</button>
            <button
            onClick={()=>filterCat("green")}>Green</button>
            </div>
        </div>

        <div className='show-category'>
            {
                tasks.map((item) =>(
                    <div key={item.id} className='cat-div'>
                        <img src={item.image} className='cat-img'/>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Categories;