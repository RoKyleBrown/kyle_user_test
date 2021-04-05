import React from 'react';
import './mod_two.css';
import baby from '../../../assets/baby.png';
import phone from '../../../assets/phone.png';
import email from '../../../assets/email.png';
import marker from '../../../assets/marker.png';
import gender from '../../../assets/gender.png';



const ModTwo = () => {
    return (
        <div className="mod2">
            <div className="top">
                
                <h3>About Me</h3>
                <ul>
                    <li><span><img src={email} alt="icon"/>&nbsp;email&nbsp;</span></li>
                    <li><span><img src={phone} alt="icon"/>&nbsp;phone number&nbsp;</span></li>
                </ul>
                <ul>
                    <li><span><img src={gender} alt="icon"/>&nbsp;gender&nbsp;</span></li>
                    <li><span><img src={baby} alt="icon"/>&nbsp;DOB&nbsp;</span></li>
                    <li><span><img src={marker} alt="icon"/>&nbsp;Zip&nbsp;</span></li>
                </ul>
                <div className="bio">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur debitis sapiente, magnam tempora porro minima, nostrum labore a eaque earum, incidunt minus et eius repellat voluptates sint doloremque quidem.</p>
                </div>
            </div>
        </div>
    )
}

export default ModTwo;