import React from 'react';
import loadGif from '../../assets/profiler-logo.mp4'

const LogoGif = () => {
    return (
        <div id="load-gif">
            <video autoPlay loop muted src={loadGif} alt="" />
        </div>
    )
}

export default LogoGif;