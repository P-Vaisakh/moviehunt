import React, { useState } from 'react'
import "../App.css";

const Header = () => {
    const [show, setShow]= useState(false)
    window.addEventListener("scroll",function(){
        window.scrollY>100?
        setShow(true):
        setShow(false)
    })
  return (
    <div>
      <header className={`${show && 'bgBlack'}`}>
        <h1>Moviehunt</h1>
      </header>
    </div>
  );
}

export default Header