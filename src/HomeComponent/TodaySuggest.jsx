import React, { useState } from 'react';
import TopNav from '../HomeComponent/TopNav';
import data from '../data';
import {AiOutlineSearch} from "react-icons/ai";
import axios from 'axios';
import colormap from './colormap';


function TodaySuggest({url}) {

  const [selectedSkinTone, setSelectedSkinTone] = useState('light');
  const [suggestedColor, setSuggestedColor] = useState('');
  const [visible ,setVisible] = useState(false);

  const [date , setDate] = useState('');
  const [time , setTime] = useState('');
  // console.log(suggestedColor,date,time);

  const suggestColor = () => {
    const currentDate = new Date();
    // Get current time
    const currentTime = currentDate.toLocaleTimeString();
    setTime(currentTime);

      // Get current date
    const currentDateFormatted = currentDate.toLocaleDateString();
    setDate(currentDateFormatted)
    setVisible(true);


    const lightSkinColors = ["Soft Pink", "Mint Green", "Powder Blue","Light Yellow","Light grays",
                           "Beiges","Coral","Lavender","Sky blue","Light emerald green","Soft ruby red",
                           "Light sapphire blue"];

    const mediumSkinColors =["Terracotta", "Olive Green", "Warm Brown", "Teal","Burgundy",
                            "Mustard yellow","Camel","Khaki","Warm beige","Royal purple",
                            "Deep emerald green","Ruby red"];

    const darkSkinColors = ["Cobalt Blue", "Fuchsia Pink", "Deep Burgundy", "Bronze","Bright orange","Olive",
                           "Chocolate brown","Gold","Copper","Eggplant purple","Forest green","Sapphire blue"];

  let colorArray = [];
    
      switch (selectedSkinTone) {
        case 'light':
          colorArray = lightSkinColors;
          break;
        case 'medium':
          colorArray = mediumSkinColors;
          break;
        case 'dark':
          colorArray = darkSkinColors;
          break;
        default:
          break;
        }
        
  const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    setSuggestedColor(randomColor);

    const token = window.localStorage.getItem("loggedInUser");
    const config = { headers: { authorization: JSON.parse(token)}};
    axios.post(`${url}/todaySuggest`,{color:suggestedColor,date:date,time:time},config)
    .then(console.log("data saved"))
  }
  //search bar
  const [search, setSearch] = useState('');
  const handleSearch = (event) => {
    setSearch(event.target.value);

  };

  const filteredItems = data.filter(item =>
    item.color.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className='todaySuggest'>
      <TopNav />
     <div className='today-select'>
      <label htmlFor="skinToneSelector">Select your skin tone</label>
      <select
        id="skinToneSelector"
        value={selectedSkinTone}
        onChange={(e) => setSelectedSkinTone(e.target.value)}
      >
        
        <option value="light">Light</option>
        <option value="medium">Medium</option>
        <option value="dark">Dark</option>
      </select>

      
    <button onClick={suggestColor} className='btn-generate'>Get Color Suggestion</button>
    </div>
    
    {visible ? (

    <div className='container today-container'>
      <div className='card'>
        <h4>Suggested Color: 
          <span style={{ color: colormap[suggestedColor] }} className='m-2'>{suggestedColor}
          </span>
          <span className='m-2'><input type='color' value={colormap[suggestedColor]}/></span>
        </h4>
        <hr></hr>
        <h3 className='text-center'>Search Color from Collections</h3>

        <div className="searchBar p-2">
            <AiOutlineSearch size={25} />
            <input
              className="searchBar-input"
              type="text"
              placeholder="search by color"
              value={search}
              onChange={handleSearch}
            />
          </div>   
      </div>

    {filteredItems.length > 0 ? (

      <div className='show-col mt-2'>
                {
                    filteredItems.map((item) =>(
                        <div key={item.id} className='col-div position-relative'>
                          <img src={item.image} className='col-img'/>
                        </div>
                    ) )
                }
              </div>
             ):
                (<div className='data-no'>
                  <p>Dress Color you're looking is not available in our current collection</p>
                  <h4>Please Update Your Collection!</h4>
                  </div>
                  )}
                </div>

              ):(<div className='container'></div>)}
      </div>            

  );
};

export default TodaySuggest;