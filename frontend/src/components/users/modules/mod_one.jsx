import React from 'react';
import './mod_one.css';

const ModOne = () => {

    

    let photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=ATtYBwIf8wfgYeqO5bi_wZ7ThyjgynLbLr8npDBSiDog8NaQTPhROVf8oMlr3OBHpHtTmouZGBnmuRRuv_HnxQ0IlTDIyKcm6-iomIBW9WUcR8nT5R16MQ53cFRwtXAx-9YrmVcPe8p14D1opYn9WgoCKMi08ZNCvL-_bkGdF-GWnATRpamG&key=AIzaSyAmen9kYggzGMA5XU8lAFWPi5UypUUneEs`;
    return (
        <div className="mod1">
            <img className="back1" src={photoUrl} alt="photo"/>
        </div>
    )
}


export default ModOne;