import React from 'react';
import loadGif from '../../assets/profiler-logo2.mp4'

const LogoGif = () => {
 
    return (
        <div id="load-gif" >
            
            <video autoPlay
            playsInline
            muted loop src={loadGif}
            />

            <p style={{zIndex:"0", position:"absolute"}}>.</p>

        </div>
    )
}

export default LogoGif;