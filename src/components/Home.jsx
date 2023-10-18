import React from 'react';
import TopNav from '../HomeComponent/TopNav';
import Featured from '../HomeComponent/Featured';
import AppInfo from '../HomeComponent/AppInfo';
import TopPicks from '../HomeComponent/TopPicks';
import Categories from '../HomeComponent/Categories';
import Footer from '../HomeComponent/Footer';

function Home() {
  
  return (
    <div className="home">
      <TopNav />
      <Featured />
      <AppInfo />
      <TopPicks/>
      <Categories />
      <Footer />
    </div>
  )
}

export default Home;