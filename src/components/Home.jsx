import React, { useState } from 'react';
import data from '../Data';
import { Link } from 'react-router-dom';
import TopNav from '../HomeComponent/TopNav';
import Featured from '../HomeComponent/Featured';
import AppInfo from '../HomeComponent/AppInfo';
import TopPicks from '../HomeComponent/TopPicks';
import Categories from '../HomeComponent/Categories';
import Footer from '../HomeComponent/Footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const handleFav=()=>{
  setFavorite('true');
  console.log(favorite); 
}
function Home() {
    const [file,setFile] = useState()
    const handleFav=(e)=>{

    setFavorite('true');
    console.log(file); 
  }
//   // const [id,setId]=useState([]);
//   // const [color,setColor] =useState([]);
  // const [image,setImage] =useState([]);
  const [favorite,setFavorite]=useState('false');
  return (
    
    <div className="home">
      <TopNav />
      <Featured />
      <AppInfo />
      <TopPicks/>
      <Categories />
      <Footer />
        {/* <div className="navBar">
            
          </div>
        <div className="card">
        <div className="left">
          <button type="button">Home</button>
          <button>Today Suggestions</button>
          <button>Favorite Products</button>
          <button>Selected products</button>
  
        </div>
        <div className="right">
         console.log(data)
         {data.length >0 ?(
          data.map((data)=>{
            return(
              <div className="card" key={data.id} >
                <img src={data.image} className="card-img-top" alt="..."/>
                <button className="position-absolute m-2 top-2 end-3" title="Add to favorite" onClick={handleFav}>
                
                <span className="material-symbols-outlined" >favorite</span>
                </button>
                
              </div>
            )
          })

         ):(<div> No Data available</div>)}
        </div>


      </div> */}
    </div>
  )
}

export default Home;