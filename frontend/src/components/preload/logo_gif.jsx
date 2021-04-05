import React from 'react';
import loadGif from '../../assets/profiler-logo2.mp4';
import logo from '../../assets/icon-frame0.png';

const LogoGif = () => {
 
    return (
        <div id="load-gif" >
            
            <video autoPlay
            playsInline
            muted loop src={loadGif}
            />

            <img style={{zIndex:"0", position:"absolute"}} src={logo}/>

        </div>
    )
}

export default LogoGif;