import React from 'react';
import './mod_two.css';
import baby from '../../../assets/baby.png';
import phone from '../../../assets/phone.png';
import email from '../../../assets/email.png';
import marker from '../../../assets/marker.png';
import gender from '../../../assets/gender.png';



const ModTwo = (props) => {
    
    return (
        <div className="mod2">
            <div className="top">
                
                <h3>About Me</h3>
                <ul>
                    <li><span><img src={email} alt="icon"/>&nbsp;{props.user.email}&nbsp;</span></li>
                    <li><span><img src={phone} alt="icon" />&nbsp;{props.user.cell_phone}&nbsp;</span></li>
                </ul>
                <ul>
                    <li><span><img src={gender} alt="icon" />&nbsp;{props.user.gender}&nbsp;</span></li>
                    <li><span><img src={baby} alt="icon" />&nbsp;{props.user.date_of_birth}&nbsp;</span></li>
                    <li><span><img src={marker} alt="icon" />&nbsp;{props.user.zip_code}&nbsp;</span></li>
                </ul>
                <div className="bio">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur debitis sapiente, magnam tempora porro minima, nostrum labore a eaque earum, incidunt minus et eius repellat voluptates sint doloremque quidem.</p>
                </div>
            </div>
        </div>
    )
}

export default ModTwo;