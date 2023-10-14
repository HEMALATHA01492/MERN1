import React, { useEffect, useState } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import data from '../Data';
import {MdOutlineFavorite} from 'react-icons/md';
import {FaTrash} from 'react-icons/fa';
import {BiSolidEditAlt} from 'react-icons/bi';
import {IoMdAddCircle} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


function Collection() {
    const [col,setCol] = useState(data);
    const Navigate=useNavigate();
      const showcollection = (color)=>{
        setCol(
            data.filter((item) =>{
                return item.color === color;
            })
          )
        }


 // Function to delete an item
  const deleteItem = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setCol(updatedData);
    localStorage.setItem('yourData', JSON.stringify(updatedData)); 

  };


  

  // Function to update an item
  const favItem = (id) => {
    console.log(id)

    setCol((prevItems) =>
    prevItems.map((item) =>
      item.id === id ? { ...item, fav: !item.fav } : item
    )
  );
    
  };

  return (
    <>
          <TopNav />
          <div className='collection'>
            <h2>My Collections <span>
                <IoMdAddCircle size={30} title='Add' type='button' className='col-add'/>
                </span></h2>
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
                        <button className="col-fav position-absolute top-0 end-0  {`item ${item.fav ? 'fav' : ''}`} " 
                        title={item.fav ? 'Remove from favorites' : 'Add to favorites'}
                        onClick={() => favItem(item.id)}
                        >
                        <MdOutlineFavorite size={25} />
                        </button>

                        <button className="col-del position-absolute bottom-0 end-0" 
                        title="Delete"
                        onClick={() => deleteItem(item.id)}>
                        <FaTrash size={20} />
                        </button>

                        <button className="col-edit position-absolute bottom-0 start-0" title="Edit">
                            <BiSolidEditAlt size={20} />
                        </button>

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