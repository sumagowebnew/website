import React from 'react'
import './Footer.css'
import { FaFacebookSquare, FaYoutube, FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt, Faaedin, } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import fb from '../Image/fb.png'
import youtube from '../Image/youtube.png'
import likedin from '../Image/linkedin.png'
import insta from '../Image/insta.png'
import heart from '../Image/heart.png'
import location from '../Image/location.png'
import call from '../Image/call.png'
import gmail from '../Image/gmail.png'
import sumago from '../Image/sumago.jpg'
import Line from '../Image/Line.png'
import { a } from 'react-router-dom';
// import { a } from "react-router-dom";
const Footer = () => {
    return (
        <>
           
            <section class="section mb-3 ">
                <div class="container">
                    <div class=" p-3 position-relative newsletter  rounded-start-2  ">
                        <div class="row  ">
                            <div class="col-lg-6 col-md-6 ">
                                <div class=" text-center ms-4">
                                    <h3 >Join Our NewsLetter</h3>
                                    <div class="cyber-cta-btn">                                 
                                    </div>
                                </div>
                            </div>
                          
                            <div class="col-lg-6 col-md-6 " style={{width:'20rem'}}>

                                <div class="input-group me-5">
                                    <input type="text" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                    <button class="btn btn-danger ptb-3" type="button" id="inputGroupFileAddon04">Subscribe</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <div class="row d-flex justify-content-center align-items-center rows">

     <div class="col-md-6">
    <div class="card  newsletter">
        <div class="text-center">
            <h4 class="d-block mt-2 ">Join Our NewsLetter</h4>
            <div class="mx-5">

               <div class="input-group mb-3 mt-4">
                  <input type="text" class="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <button class="btn btn-danger border-rad" type="button" id="button-addon2" >Subscribe</button>
                </div>
            </div>            
        </div>       
    </div>   
</div>

</div> */}

            <div className='Footer-container text-sm-center'>
                <div className="container-fluid md-container">
                    <div className="row text-white footer-row justify-content-center p-3">
                        <div className="row-icons  d-md-none d-block">
                            <h5 className='mt-5'>Follow Us </h5>
                            <img className='fb me-1 ' src={fb} alt="" height="28rem" />
                            <img className='insta me-1' src={insta} alt="" height="28rem" />
                            <img className='likedin me-1 ' src={likedin} alt="" height="28rem" />
                            <img className='youtube ' src={youtube} alt="" height="28rem" />
                            
                        </div>

                        <div className="col-md-2 col-12 ">
                           
                            <div className="sb_footer-links ">
                            <h4 >Home </h4>
                            <img  className='w-50 mb-4'  src={Line} alt=""  />
                            <ul>
                                        <li> <IoIosArrowForward/><a className='links' href='/about us'>
                                      <p> Our Story</p>
                                    </a></li>
                                    <li><IoIosArrowForward/> <a className='links' href='/about us'>
                                        <p> Services</p>
                                    </a></li>
                                    <li><IoIosArrowForward/> <a className='links' href='/about us'>
                                       <p>Technology</p>
                                    </a></li>
                                    <li> <IoIosArrowForward/><a className='links' href='/about us'>
                                       <p>Our Client</p>
                                    </a></li>
                                    <li>  <IoIosArrowForward/><a className='links' href='/about us'>
                                       <p>About Us</p>
                                    </a></li>
                                    </ul>
                            </div>
                        </div>
                        <div class="col-md-2 col-12 ">
                            <div className="sb_footer-links-div">
                                <h4>Services </h4>
                                <img  className='w-50 mb-4'  src={Line} alt=""  />
                               <li><IoIosArrowForward/><a className='links' href='/website development'>
                                    <p>Website Development</p>
                                </a></li>
                                <li><IoIosArrowForward/><a className='links' href='/app development'>
                                    <p>App Development</p>
                                </a></li>
                               <li> <IoIosArrowForward/><a className='links' href='/software development'>
                                    <p>Software Development</p>
                                </a></li>
                                <li><IoIosArrowForward/><a className='links' href='/digital marketing'>
                                    <p>digital marketing</p>
                                </a></li>
                                <li><IoIosArrowForward/><a className='links' href='/social media'>
                                    <p>Social Media</p>
                                </a></li>
                            </div>
                            <div className="row-icons  d-md-block d-none">
                                <h5 className='mt-5'>Follow Us </h5>
                               
                                <a href="https://www.facebook.com/sumagoinfotech/">
                                <img className='fb me-1 ' src={fb} alt="" height="28rem" /></a>
                                <a href="https://www.instagram.com/sumago_infotech/">
                                <img className='insta me-1' src={insta} alt="" height="28rem" /></a>
                                <a href="https://www.linkedin.com/company/sumago-infotech-pvt-ltd/">
                                <img className='likedin me-1 ' src={likedin} alt="" height="28rem" /></a>
                                <a href="https://www.youtube.com/channel/UCoUCNHO1wXI92HnEmNtIkEg?view_as=subscriberr">
                                <img className='youtube ' src={youtube} alt="" height="28rem" /></a>
                              
                            </div>
                        </div>



                        <div class="col-md-2 col-xs-12 ">
                            <div className='sb_footer-links-div'>
                                <div className="row">
                                    <ul>
                                        <h4>Quick as</h4>
                                        <img  className='w-50 mb-4'  src={Line} alt=""  />
                                        <li><IoIosArrowForward/> <a className='links' href='/about us'>
                                       <p>About Us</p>
                                    </a></li>
                                    <li><IoIosArrowForward/><a className='links' href='/about us'>
                                    <p>Contact Us</p>
                                    </a></li>
                                    <li> <IoIosArrowForward/> <a className='links' href='/about us'>
                                      <p> Services</p>
                                    </a></li>
                                    <li> <IoIosArrowForward/><a className='links' href='/about us'>
                                     <p>Company History</p>
                                    </a></li>
                                    <li> <IoIosArrowForward/> <a className='links' href='/about us'>
                                      <p> Privacy Policy</p>
                                    </a></li>
                                    </ul>
                                </div>
                            </div></div>


                        <div class="col-md-3 ">
                            <div className="sb_footer-links-div">
                                <h4>Contact Us </h4>
                                <img  className='w-50 mb-4'  src={Line} alt=""  />

                                <div className='row'>
                                    <div className='col-md-2 col-2'>
                                        <img className='call me-1' src={call} alt="" height="33rem" />
                                    </div>
                                    <div className='col-md-7 col-7'>
                                        <li><a className='links' href="tel:+91 903 828 8668">
                                            <p>+91 903 828 8668</p>
                                        </a></li>
                                        <li><a className='links' href="tel:+91 840 808 4888">
                                            <p>+91 840 808 4888</p>
                                        </a></li>
                                        <li><a className='links' href="tel:+91 726 308 4881">
                                            <p>+91 726 308 4881</p>
                                        </a></li>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-2 col-2'>
                                        <img className='gmail me-1' src={gmail} alt="" height="25rem" />
                                    </div>
                                    <div className='col-md-7 col-7 '>
                                        
                                        <li> <a className='links' href='mailto:sumagoinfotech@gmail.com'>
                                       <p>sumagoinfotech@gmail.com</p>
                                    </a></li>
                                    <li> <a className='links' href='mailto:info@sumagoinfotech.com'>
                                       <p>info@sumagoinfotech.com</p>
                                    </a></li>
                                           
                                       
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-2 col-2'>
                                        <img className='location me-1 ' src={location} alt="" height="28rem" />

                                    </div>
                                    {/* <div className='col-md-3 col-3'>
                                        <h5></h5>
                                    </div>: */}
                                    <div className='col-md-7 col-7'>
                                        <p>3rd Floor,Gajra Chambers, Kamod Nagar,Indira Nagar,Near Hotel Sai Saya,
                                            Nashik-422009.
                                        </p></div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ---------------------------------------------------------------------------------- */}
                    <div className="row">
                        <div className="col-lg-4">
                            <hr className='text-white' />
                        </div>
                        <div className="col-md-12 col-12 col-lg-4">
                            <img className='img-style img-fluid ms-md-0 ms-5' src={sumago} alt="" />
                            <h6 className='d-md-inline text-white text-center text-md-left'>@{new Date().getFullYear()}.All Right Reserved</h6>
                        </div>
                        <div className="col-lg-4">
                            <hr className='text-white'/>
                        </div>
                    </div>
                    {/* ------------------------------------------------------------------------------------------- */}
                    <div className="row text-center">
                        {/* <img className='img-heart' src={heart} alt=""/> */}
                        <span className='text-white mb-3 mb-md-0'>With <img className='img-heart' src={heart} alt="" /> From Nashik </span>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer
