import React from 'react';
import Ieee from '../../assets/img/ieee';
import Corona from '../../assets/img/corona';
import Nss from '../../assets/img/nss';
import Josaa from '../../assets/img/josaa';
import Asme from '../../assets/img/asme';
import Teqip from '../../assets/img/teqip';
import Chanakya from '../../assets/img/chanakya';

const Importantlink=()=>{
    return(
        <div className="link-row">
            <div className="link-col">
                <a href="http://exam.nitp.ac.in/">
                    <div className="implink">
                    <Chanakya />
                        <h3>CHANAKYA</h3></div>
                </a>           
                <div className="implink">
                <Corona />

                    <h3>CORONA</h3></div>
                    <div className="implink">
                    <Nss />

                    <h3>NSS</h3></div>
                    <div className="implink">
                    <Josaa />

                    <h3>JOSAA</h3></div>

            </div>
            <div className="link-col">
                <div className="implink">
                    <Asme />

                    <h3>ASME</h3></div>
                    <div className="implink">
                    <Teqip />

                    <h3>TEQIP</h3></div>
                    <div className="implink">
                    <Ieee />

                    <h3>IEEE</h3></div>
                    <div className="implink">
                    <Chanakya />

                    <h3>CHANAKYA</h3></div>
            </div>
        </div>
    )
}
export default Importantlink;