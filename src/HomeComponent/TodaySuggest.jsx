import React from 'react';
import randomColor from 'randomcolor';
import { useState } from 'react';
import chroma from 'chroma-js';
import axios from 'axios';


function TodaySuggest({url}) {

  const [selectedSkinTone, setSelectedSkinTone] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  console.log(selectedColor)

  // const handleData= async(e) =>{
  //   e.preventDefault();
  //   try{
  //     const token = window.localStorage.getItem("loggedInUser");
  //     const config = { headers: { authorization: JSON.parse(token)}};
  //     await axios.post(`${url}/todaySuggest`,
  //     {color:selectedColor},config);
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }

  // }


  // Function to display a random color from the selected array
  const displayRandomColor = async() => {


    try{
      // const token = window.localStorage.getItem("loggedInUser");
      // const config = { headers: { authorization: JSON.parse(token)}};
      await axios.post(`${url}/todaySuggest`,
      {color:selectedColor});
    }
    catch (err) {
      console.log(err);
    }

  
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * selectedColors.length);
    
    // Set the selected color
    setSelectedColor(selectedColors[randomIndex]);
    // Display the randomly selected color
    console.log("Selected Color: " + selectedColor);
  }


/// Function to handle skin tone selection
const handleSkinToneSelect = async(skinTone) => {
  // Set the selected skin tone
  setSelectedSkinTone(skinTone);

  // Define color arrays based on selected skin tone
  switch (skinTone.toLowerCase()) {
      case "light":
          setSelectedColors (["Soft Pink", "Mint Green", "Powder Blue","Light Yellow","Light grays","Creams",
          "Beiges","Coral","Lavender","Sky blue","Light emerald green","Soft ruby red","Light sapphire blue"]);
          break;
      case "medium":
          setSelectedColors (["Terracotta", "Olive Green", "Warm Brown", "Teal","Burgundy",
          "Mustard yellow","Camel","Khaki","Warm beige","Royal purple","Deep emerald green","Ruby red"]);
          break;
      case "dark":
          setSelectedColors ( ["Cobalt Blue", "Fuchsia Pink", "Deep Burgundy", "Bronze","Bright orange","Olive",
          "Chocolate brown","Gold","Copper","Eggplant purple","Forest green","Sapphire blue"]);
          break;
      default:
          console.log("Invalid selection. Please choose a valid skin tone.");
          return;
        }

        // Display the array of colors
        console.log("Array of Colors: " + selectedColors.join(", "));
        
        // Display a random color from the selected array
        displayRandomColor();
      }
  return (
    <div>
     <div>
      <p>Select your skin tone</p>
      <button onClick={() => handleSkinToneSelect("Light")}>Light</button>
      <button onClick={() => handleSkinToneSelect("Medium")}>Medium</button>
      <button onClick={() => handleSkinToneSelect("Dark")}>Dark</button>
    </div>
     <h5>Today suggestion:{selectedColor}</h5>
    </div>
  );
};

export default TodaySuggest