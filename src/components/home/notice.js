import React from 'react';
import {css} from 'styled-components';

const Notice=(props)=>{
    return <>
        <div css={css`width:93%;padding:10px;background: #FFFFFF;box-shadow: 0px 0px 26px rgba(207, 207, 207, 0.36);border-radius: 20px;margin-top:20px;`}>
    <h4>{props.detail}</h4>
            <p css={css`position:relative;bottom:0 ;margin-bottom:5px;color:#CD5A2F;text-align:right;font-family:'Source Sans Pro'`}>{props.time}</p>
    </div>
    </>
}
export default Notice