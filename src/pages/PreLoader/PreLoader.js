import React from 'react'
import './preLoader.css'
import Logo from './karma22logo.png'
function PreLoader() {
    return (
        <div className='preLoader' >
            <img className='preLoaderLogo' src={Logo} />
            <h1 className='preLoaderheading'>Karma 22</h1>
        </div>
    )
}

export default PreLoader