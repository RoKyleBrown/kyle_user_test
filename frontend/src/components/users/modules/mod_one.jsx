import React from 'react';
import './mod_one.css';

const ModOne = () => {

    

    let photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=ATtYBwKCCyu1oxjMqjGyh--I-toAaJXhMDqEdJ9n6c3Rv2EcD9D6MJFnVB8Ahza6xwJvfL67utK_2j5amF4TepFV4ONPu6IklwqQYgFKL6dOD32tD7bWQ180Vp8ph1tmcrJVlEdVVkDuWNpNu920XCHwnrmHHmBLfogpEQVq-MlwWWfbwovB&key=AIzaSyAmen9kYggzGMA5XU8lAFWPi5UypUUneEs`;
    return (
        <div className="mod1">
            <img className="back1" src={photoUrl} alt=""/>
        </div>
    )
}


export default ModOne;