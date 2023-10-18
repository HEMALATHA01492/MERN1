import React, { useEffect, useState } from 'react';
import TopNav from './TopNav';
import {MdOutlineFavorite} from 'react-icons/md';
import data from '../data';
import {AiOutlineSearch} from "react-icons/ai";




function Favorite() {
  const [tasks, setTasks] = useState(data);


  useEffect(() => {
    // Load tasks from localStorage on component mount
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const fav = tasks.filter((e)=>{
    return e.fav == true
  })

  //search bar
  const [search, setSearch] = useState('');
  const handleSearch = (event) => {
    setSearch(event.target.value);

  };

  const filteredItems = fav.filter(item =>
    item.color.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
        <TopNav />
        <div className='collection'>
        <h2>My Favorite</h2>
        <div className="searchBar p-2" >
            <AiOutlineSearch size={25} />
            <input
              className="searchBar-input"
              type="text"
              placeholder="search by color"
              value={search}
              onChange={handleSearch}
            />
          </div>  
        <div className='show-col'>
          {filteredItems.length >0 ? (
                
                  filteredItems.map((item) =>(
                        <div key={item.id}  className='col-div position-relative'>
                        <button className="col-fav position-absolute top-0 end-0">
                        <MdOutlineFavorite size={25} style={{color:'orangered'}}/>
                        </button>
                        <img src={item.image} className='col-img'/>
                        </div>)
                    )):(<div className='container' style={{width:500}}>
                      <h3 style={{color:'orangered'}}>This color is not Available in your favorite Collection</h3>
                      </div>)}

</div>
        </div>


    </>
  )
}

export default Favorite