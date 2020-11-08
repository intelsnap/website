import React from 'react';
import {Link} from "gatsby";

import Layout from "../components/layout";
import "./contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';


function contact() {
    return (
    <Layout>
        <section class="contact">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="contact-title">
                    <h1>Contact</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                    <div class="contact-form">
                        <div class="row">
                        <div class="col-md-6 contact-c">
                        <div class="contact-option-f">
                            {/* <h1> Contact </h1> */}
                            <form name="contacts" method="post">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Name" name="name" required/>
                                        </div>
                                        {/* <!-- // end .form-group --> */}
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email" name="email" required/>
                                        </div>
                                        {/* <!-- // end .form-group --> */}
                                        {/* <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Phone" name="phone" required/>
                                        </div> */}
                                    
                                        <div class="form-group">
                                            <textarea placeholder="Message" class="form-control" name="message" required rows="5"></textarea>
                                        </div>
                                    
                                        <button type="submit" class="btn-submit" > Send Message </button>
                                        {/* <a class="btn-submit" href="mailto:support@intelsnap.com" > Send Message </a> */}
                                        
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-address">
                                    <h1>Get In Touch</h1>
                                    <div class="contact-details">
                                           
                                        
                
                                        <a className="icons" href='https://twitter.com/intelsnap_inc'>
                                        <FontAwesomeIcon icon={['fab','twitter']} size="4x" />
                                        </a>
                                        <a className='icons' href='https://myfavcoffeeplace.io'>
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} size ="4x" />
                                        </a>
                                        <a className='icons' href='https://myfavcoffeeplace.io'>
                                            <FontAwesomeIcon icon={['fab', 'github']} size ="4x" />
                                        </a>
                                        <a className='icons' href='https://myfavcoffeeplace.io'>
                                            <FontAwesomeIcon icon={['fab', 'slack']} size ="4x" />
                                        </a>
                                        <a className='icons' href='https://www.youtube.com/'>
                                            <FontAwesomeIcon icon={['fab', 'youtube']} size ="4x" />
                                        </a>
                                         <a className='icons' href='support@intelsnap.com'>
                                            <FontAwesomeIcon icon={ 'envelope'} size ="4x" />
                                        </a>
                                        
                                        
                                    </div>
                                    
    
                                  
                                  
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="contact-center">OR</p>
                </div>
            </div>
        </div>
       
    </section>
         

    </Layout>

    );

   
}

export default contact

