import React from 'react';
import loadGif from '../../assets/profiler-logo2.mp4'

const LogoGif = () => {
    return (
        <div id="load-gif">
            <video loop muted autoPlay  src={loadGif} alt="" />
        </div>
    )
}

export default LogoGif;