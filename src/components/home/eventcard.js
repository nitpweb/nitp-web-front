import React from 'react';
import cal from './img/calendar.svg';
import {css} from 'styled-components';

const Eventcard=(props)=>{
    return(
        <div css={css`width:93%;padding:10px;background: #FFFFFF;box-shadow: 0px 0px 26px rgba(207, 207, 207, 0.36);border-radius: 20px;margin-top:20px;display:flex`}>
            <img src={cal} alt="calendar" />
            <h4 css={css`margin-left:5%`}>{props.detail}</h4>
        </div>
    )
}
export default Eventcard;