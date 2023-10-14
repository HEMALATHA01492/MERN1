import React, { useState } from 'react';
import TopNav from '../HomeComponent/TopNav';
import Footer from '../HomeComponent/Footer';
import data from '../Data';
import {AiOutlineSearch} from "react-icons/ai";
import axios from 'axios';


function TodaySuggest({url}) {

  const [selectedSkinTone, setSelectedSkinTone] = useState('light');
  const [suggestedColor, setSuggestedColor] = useState('');

  const lightSkinColors = ["Soft Pink", "Mint Green", "Powder Blue","Light Yellow","Light grays","Creams",
                           "Beiges","Coral","Lavender","Sky blue","Light emerald green","Soft ruby red",
                           "Light sapphire blue"];

  const mediumSkinColors =["Terracotta", "Olive Green", "Warm Brown", "Teal","Burgundy",
                            "Mustard yellow","Camel","Khaki","Warm beige","Royal purple",
                            "Deep emerald green","Ruby red"];

  const darkSkinColors = ["Cobalt Blue", "Fuchsia Pink", "Deep Burgundy", "Bronze","Bright orange","Olive",
                           "Chocolate brown","Gold","Copper","Eggplant purple","Forest green","Sapphire blue"];

  const suggestColor = () => {

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
    axios.post(`${url}/todaySuggest`,{color:suggestedColor},config)
    .then(console.log("data saved")
    )
    .catch( err => console.log(err))

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
    {/* <div>
    <p>Suggested Color: <span style={{ color: suggestedColor }}>{suggestedColor}</span></p>



    </div> */}

    <div className='container today-container'>
      <div className='card'>
        <h4>Suggested Color: 
          <span style={{ color: suggestedColor }}>{suggestedColor}
          </span>
        </h4>
        <h3 className='text-center'>My Collections</h3>

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
       ):
    (<div className='data-no'>
    <p>Dress Color you're looking is not available in our current collection</p>
    <h4>Please Update Your Collection!</h4>
    </div>
    )}
              </div>
      <Footer />
      </div>            

  );
};

export default TodaySuggest;



 

//       case "light":
//           setSelectedColors (["Soft Pink", "Mint Green", "Powder Blue","Light Yellow","Light grays","Creams",
//           "Beiges","Coral","Lavender","Sky blue","Light emerald green","Soft ruby red","Light sapphire blue"]);
//           break;
//       case "medium":
//           setSelectedColors (["Terracotta", "Olive Green", "Warm Brown", "Teal","Burgundy",
//           "Mustard yellow","Camel","Khaki","Warm beige","Royal purple","Deep emerald green","Ruby red"]);
//           break;
//       case "dark":
//           setSelectedColors ( ["Cobalt Blue", "Fuchsia Pink", "Deep Burgundy", "Bronze","Bright orange","Olive",
//           "Chocolate brown","Gold","Copper","Eggplant purple","Forest green","Sapphire blue"]);
//           break;
//       default:
//           console.log("Invalid selection. Please choose a valid skin tone.");
//           return;
//         }

