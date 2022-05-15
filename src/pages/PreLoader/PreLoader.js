<<<<<<< HEAD
import React from 'react'
import './preLoader.css'
import Logo from "./Preloader.svg"

function PreLoader() {
    return (
        <div className='preLoader' >
            <img className='preLoaderLogo' src={Logo} alt='preloader' />
            <h1 className='preLoaderheading'>Karma 22</h1>
        </div>
    )
=======
import React from "react";
import "./preLoader.css";
import Logo from "./Preloader.svg";

function PreLoader() {
  return (
    <div className="preLoader">
      <img className="preLoaderLogo" src={Logo} alt="preloader" />
      <h1 className="preLoaderheading">Karma 22</h1>
    </div>
  );
>>>>>>> bfbf80ba4053286a1f785f8427471cd0345451b3
}

export default PreLoader;
