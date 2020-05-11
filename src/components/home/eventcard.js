import React from 'react';
import cal from './img/calendar.svg'

const Eventcard=(info)=>{
    return(
        <div className="card">
            <img src={cal} alt="calendar" />
        </div>
    )
}
export default Eventcard;