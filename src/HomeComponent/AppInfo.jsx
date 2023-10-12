import React from 'react';
import { Link } from 'react-router-dom';

function AppInfo() {
  return (
    <div className='app-main'>
        <h3>Outfit Suggestion App</h3>
        <div className='app-imgdiv'>
        <img className='img' src='https://images.pexels.com/photos/5325947/pexels-photo-5325947.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        <div className='app-content'>
        <p className='getapp'>Get The App</p>
        <h4 className='feature'>Features of the App</h4>
        <p className='feature-content'>
        Welcome to the Daily Dress Suggestion App, your personal stylist in the digital world. 
        Our app aims to make your daily outfit selection effortless and enjoyable. 
        Powered by the MERN stack,we bring you a seamless and personalized experience from MongoDB to React.

        <b>Create an account to unlock the full potential of personalized outfit suggestions.
        Complete your profile by adding details about your style preferences and favorite colors.
        Receive daily notifications with carefully curated outfit suggestions tailored just for you.
        Save your favorite outfits for future reference!
        </b>
        Download the Daily Dress Suggestion App now and step into a world where choosing your 
        daily outfit is no longer a dilemma but a delightful experience. Embrace style effortlessly!
        </p>
        <Link to='/' className='app-link'>Get Started Today!</Link>
        </div>
        </div>
    </div>
  )
}

export default AppInfo;