import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlineLogin
} from "react-icons/ai";
import {BiLogOut} from 'react-icons/bi';
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import {TbTruckReturn} from 'react-icons/tb'
import { FaGoogleWallet, FaHistory} from 'react-icons/fa'
import {MdHelp,MdAccountCircle, MdOutlineFavorite,MdCollections,MdSettingsSuggest} from 'react-icons/md'
import { Link } from "react-router-dom";

function TopNav() {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="topNav">
      <div className="d-flex align-items-center">
        <div onClick={() => setSideNav(!sideNav)} className="menuBar">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="title">
          Perfect
          <span className="font-bold m-2">Picks</span>
        </h1>
       
      </div>
      <div className="searchBar">
        <AiOutlineSearch size={25} />
        <input
          className="searchBar-input"
          type="text"
          placeholder="search by color"
        />
      </div>
      {/* <button className="fav">
        
        <MdOutlineFavorite size={25} />
      </button> */}
      {/* <Link to="/signin" className="log" onClick={()=>{setLogin(!login);toggle()}}>
      <span><AiOutlineLogin size={25} /></span>Login
      </Link> */}

      <Link to="/signin" className="logout">
        Logout <span><AiOutlineLogout size={25} /></span>
      </Link>
      {sideNav ? (
      <div className="sideBar"
      onClick={() => setSideNav(!sideNav)} 
      ></div>
      ) : (
        ""
      )}
      {/* Conditions for sideNav Appear */}
      <div className={ 
        sideNav ? "side-menu"
        :"side-menu1"
      }
      >

       
      <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25} 
      className="closelogo"/>
      <h2 className='first'>Perfect <span className='font-bold'>Picks</span></h2>
      <nav>
        <ul className="unorderList">
          <li className="listItem">
          <MdAccountCircle size={26} className="icons"/>
           My Account
          </li>

          <Link  to='/todaySuggest' className="listItem coll">
          <MdSettingsSuggest size={25} className="icons"/>
          Today Suggestions
          </Link>

          <li className="listItem">
          <MdOutlineFavorite size={25} className="icons"/>
           My Favorite
          </li>

          <Link to='/collection' className="listItem coll">
          <MdCollections size={25} className="icons"/>
          My Collections
          </Link>       


          <li className="listItem">
          <FaHistory size={25} className="icons"/>
          History
          </li>


          <li className="listItem">
          <MdHelp size={25} className="icons"/>
           Help
          </li>

        </ul>
      </nav>


      </div>

    </div>
  );
};

export default TopNav;
