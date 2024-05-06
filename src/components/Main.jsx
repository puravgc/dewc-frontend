import React from 'react'
import Navbar from './Navbar';
import Landing from './Landing';
import Aboutus from './Aboutus';
import BoardMembers from './BoardMembers';
import Video from './Video';
import Projects from './Projects';
import Article from './Article';
import Gallery from './Gallery';
import Footer from './Footer';
import Contrast from './Contrast';
import "../index.css"

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Aboutus/>
      <BoardMembers/>
      <Video/>
      <Projects/>
      <Article/>
      <Gallery/>
      <Footer/>
      <div className='contrast'>
      <Contrast/>
      </div>
      
    </div>
  )
}

export default Main