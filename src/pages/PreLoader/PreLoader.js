import React from 'react'
import './preLoader.css'

function PreLoader() {
    return (
        <div className='preLoader' >
            <img className='preLoaderLogo' src="assets/Header/Preloader.svg" alt='preloader' />
            <h1 className='preLoaderheading'>Karma 22</h1>
        </div>
    )
}

export default PreLoader