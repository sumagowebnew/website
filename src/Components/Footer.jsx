import React from 'react'
import './Footer.css'
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
// import { a } from "react-router-dom";
const Footer = () => {
    return (
        <>

            <section class="section mb-3 ">
                <div class="container d-md-block d-none">
                    <div class=" p-3 position-relative newsletter  rounded-start-2 mt-5 ">
                        <div class="row  ">
                            <div class="col--6 col-md-6 ">
                                <div class=" text-center ms-4">
                                    {/* <div className=' news'>
                                <sup >Newsletter</sup>
                                </div> */}
                                    <h3 >Join Our NewsLetter</h3>
                                    <div class="cyber-cta-btn">
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 " style={{ width: '20rem' }}>

                                <div class="input-group me-5">
                                    <input type="text" class="form-control " id="inputGroupFile04" placeholder='Enter Your Email' aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                    <button class="btn btn-danger ptb-3 " style={{ backgroundColor: "#E21818" }} type="button" id="inputGroupFileAddon04">Subscribe</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div class="row d-flex justify-content-center align-items-center d-md-none d-block">
                <div class="col-md-6 ">
                    <div class="card newsletterr">
                        <div class="text-center">
                            {/* <div className='letter '>
                                <sup >Newsletter</sup>
                                </div> */}
                            <h4 class="d-block mt-2 ">Join Our NewsLetter</h4>
                            <div class="mx-5">

                                <div class="input-group mb-3 mt-4">
                                    <input type="text" class="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-danger border-rad" style={{ backgroundColor: "#E21818" }} type="button" id="button-addon2" >Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='Footer-container container-fluid '>

                <div className="row text-white footer-row d-flex justify-content-center p-3">

                    <div className="d-md-none d-block ">
                        <div className="d-flex align-items-center mb-3 icons">
                            <h5 className="me-3">Follow Us</h5>
                            <hr className="flex-grow-1 border-light text-white" />
                            <div className="d-flex flex-wrap justify-content-center">
                                <a href="https://www.facebook.com/sumagoinfotech/">
                                    <img className="fb me-1" src={fb} alt="" height="28rem" />
                                </a>
                                <a href="https://www.instagram.com/sumago_infotech/">
                                    <img className="insta me-1" src={insta} alt="" height="28rem" />
                                </a>
                                <a href="https://www.linkedin.com/company/sumago-infotech-pvt-ltd/">
                                    <img className="likedin me-1" src={likedin} alt="" height="28rem" />
                                </a>
                                <a href="https://www.youtube.com/channel/UCoUCNHO1wXI92HnEmNtIkEg?view_as=subscriberr">
                                    <img className="youtube" src={youtube} alt="" height="28rem" />
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-2 col-6 col-sm-6 ">
                        <div className="sb_footer-links text-start">
                            <h4>Home </h4>
                            {/* <img className='w-50 mb-4' src={Line} alt="" /> */}
                            <ul>
                                <li> <IoIosArrowForward /><a className='' href='/about us'>
                                    <span className='links mt-2 '>Our Story</span>
                                </a>
                                </li>
                                <li><IoIosArrowForward /> <a className='' href='/Service'>
                                    <span className='links mt-2'> Services</span>
                                </a></li>
                                <li><IoIosArrowForward /> <a className='' href='/about us'>
                                    <span className='links mt-2'> Technology</span>
                                </a></li>
                                <li> <IoIosArrowForward /><a className='' href='/about us'>
                                    <span className='links mt-2'>Our Client</span>
                                </a></li>
                                <li>  <IoIosArrowForward /><a className='' href='/Aboutuspage'>
                                    <span className='links mt-2'> About Us</span>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 col-6 col-sm-6 text-start">
                        {/* <div className="sb_footer-links-div"> */}
                        <h4>Services </h4>
                        {/* <img className='w-50 mb-4' src={Line} alt="" /> */}
                        <li><IoIosArrowForward /><a className='' href='/Service'>
                            <span className='links mt-2'>Web Development</span>
                        </a></li>
                        <li><IoIosArrowForward /><a className='' href='/Service'>
                            <span className='links mt-2'>App Development </span>
                        </a></li>
                        <li> <IoIosArrowForward /><a className='' href='/Service'>
                            <span className='links mt-2'>Software Development </span>
                        </a></li>
                        <li><IoIosArrowForward /><a className='' href='/Service'>
                            <span className='links mt-2'>Digital Marketing </span>
                        </a></li>
                        <li><IoIosArrowForward /><a className='' href='/Service'>
                            <span className='links mt-2'> Social Media</span>
                        </a></li>
                        {/* </div> */}
                    </div>

                    <div class="col-md-2 col-6  col-sm-6 ">
                        <div className='sb_footer-links-div'>
                            <div className="row">
                                <ul>
                                    <h4>Quick Links</h4>
                                    {/* <img className='w-50 mb-4' src={Line} alt="" /> */}
                                    <li><IoIosArrowForward /> <a className='' href='/about us'>
                                        <span className='links mt-2'> About Us</span>
                                    </a></li>
                                    <li><IoIosArrowForward /><a className='' href='/about us'>
                                        <span className='links mt-2'> Contact Us</span>
                                    </a></li>
                                    <li> <IoIosArrowForward /> <a className='' href='/about us'>
                                        <span className='links mt-2'>  Services</span>
                                    </a></li>
                                    <li> <IoIosArrowForward /><a className='' href='/about us'>
                                        <span className='links mt-2'> Company History</span>
                                    </a></li>
                                    <li> <IoIosArrowForward /> <a className='' href='/about us'>
                                        <span className='links mt-2'>Privacy Policy</span>
                                    </a></li>
                                </ul>
                            </div>
                        </div></div>


                    <div class="col-md-3 col-6 col-sm-6 ">
                        <div className="sb_footer-links-div">
                            <h4>Contact Us </h4>
                            {/* <img className='w-50 mb-4' src={Line} alt="" /> */}

                            <div className='row'>
                                <div className='col-md-2 col-2 d-md-block d-none'>
                                    <img className='call me-1' src={call} alt="" height="33rem" />
                                </div>
                                <div className='col-md-2 col-2 d-md-none d-block'>
                                    <img className='call me-1' src={call} alt="" height="20rem" />
                                </div>
                                <div className='col-md-10 col-10'>
                                    <li><a className='' href="tel:+91 903 828 8668">
                                        <span className='links mt-2'>+91 903 828 8668</span>
                                    </a></li>
                                    <li><a className='' href="tel:+91 840 808 4888">
                                        <span className='links mt-2'>+91 840 808 4888</span>
                                    </a></li>
                                    <li><a className='' href="tel:+91 726 308 4881">
                                        <span className='links mt-2'>+91 726 308 4881</span>
                                    </a></li>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-2  col-2 mt-3 d-md-block d-none'>
                                    <img className='gmail me-1' src={gmail} alt="" height="25rem" />
                                </div>
                                <div className='col-md-2 col-2  d-md-none d-block'>
                                    <img className='gmail me-1' src={gmail} alt="" height="13rem" />
                                </div>
                                <div className='col-md-10 col-10 '>

                                    <li> <a className='' href='mailto:sumagoinfotech@gmail.com'>
                                        <span className='links mt-2'>sumagoinfotech@gmail.com</span>
                                    </a></li>
                                    <li> <a className='' href='mailto:info@sumagoinfotech.com'>
                                        <span className='links mt-1 mb-2'>info@sumagoinfotech.com</span>
                                    </a></li>


                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-2 col-2 contact'>
                                    <img className='location me-1 ' src={location} alt="" height="28rem" />
                                </div>

                                <div className='col-md-10 contact'>
                                    <p>3rd Floor,Gajra Chambers, Kamod Nagar, Indira Nagar,Near Hotel Sai Saya,
                                        Nashik-422009.
                                    </p></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" d-md-block d-none ">
                    <div className="d-flex align-items-center mb-3  icon ">
                        <h5 className="me-3">Follow Us</h5>
                        <hr className="flex-grow-1 border-light text-white" />
                        <div className="d-flex flex-wrap justify-content-center">
                            <a href="https://www.facebook.com/sumagoinfotech/">
                                <img className="fb me-1 " src={fb} alt="" height="28rem" />
                            </a>
                            <a href="https://www.instagram.com/sumago_infotech/">
                                <img className="insta me-1" src={insta} alt="" height="28rem" />
                            </a>
                            <a href="https://www.linkedin.com/company/sumago-infotech-pvt-ltd/">
                                <img className="likedin me-1" src={likedin} alt="" height="28rem" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCoUCNHO1wXI92HnEmNtIkEg?view_as=subscriberr">
                                <img className="youtube" src={youtube} alt="" height="28rem" />
                            </a>
                        </div>
                    </div>
                </div>


                {/* ---------------------------------------------------------------------------------- */}
                <div className="row">
                    <div className="col-lg-4">
                        <hr className='text-white' />
                    </div>
                    <div className="col-md-12 col-12 col-lg-4 text-center">
                        <img className='img-style img-fluid ms-md-0 ms-1' src={sumago} alt="" width="20rem" />
                        <p className='d-md-inline text-white text-center text-md-left' height="">@{new Date().getFullYear()}.All Right Reserved</p>
                    </div>
                    <div className="col-lg-4">
                        <hr className='text-white' />
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------- */}
                <div className="row text-center">
                    {/* <img className='img-heart' src={heart} alt=""/> */}
                    <span className='text-white mb-3 mb-md-0'>Made With <img className='img-heart' src={heart} alt="" /> From Nashik </span>

                </div>
            </div>

        </>

    )
}

export default Footer
