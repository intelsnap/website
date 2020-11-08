import React from 'react'
import intel from "../images/intelsnap.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';
import   "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
    return (
        <div class="Container-fluid ">
            <div class="row" style={{padding:"5px"}}>
                <div class="col-md-3">
                    <img src = {intel}  alt="intelsnap" width="120" height="82" />
                    <p style={{fontSize:"12px"}}>At Intelsnap Inc. we want to help you
                        add intelligence to your workflows.</p>
                </div>
                <div class="col-md-2">
                    <h2 style={{fontSize:"24px",paddingTop:"15px"}}>Open Source</h2>
                    <p style={{fontSize:"14px",textAlign:"center"}}> Neo4JNet</p>
                </div>
                <div class="col-md-2">
                    <h2 style={{fontSize:"24px",paddingTop:"15px"}}>Products</h2>
                    
                </div>
                <div class="col-md-2">
                    <h2 style={{fontSize:"24px" ,paddingTop:"15px"}}>Services</h2>
                    <p >
                        Consulting <br/>
                    
                        Software Development
                    </p>
                </div>
                <div class="col-md-3">
                    <h2 style={{fontSize:"24px",paddingTop:"15px"}}>Get In touch</h2>
                    <div style={{padding:"3px"}}>
                        <a className='icons' href='https://twitter.com/intelsnap_inc'>
                        <FontAwesomeIcon icon={['fab','twitter']} size="2x" />
                        </a>
                        <a className='icons' href='https://myfavcoffeeplace.io'>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size ="2x" />
                        </a>
                        <a className='icons' href='https://myfavcoffeeplace.io'>
                            <FontAwesomeIcon icon={['fab', 'github']} size ="2x" />
                        </a>
                        <a className='icons' href='https://myfavcoffeeplace.io'>
                            <FontAwesomeIcon icon={['fab', 'slack']} size ="2x" />
                        </a>
                        <a className='icons' href='https://www.youtube.com/'>
                            <FontAwesomeIcon icon={['fab', 'youtube']} size ="2x" />
                        </a>
                            <a className='icons' href='support@intelsnap.com'>
                            <FontAwesomeIcon icon={ 'envelope'} size ="2x" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
