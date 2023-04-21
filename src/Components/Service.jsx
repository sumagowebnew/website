import React from 'react'
import Rectange from '../Image/Rectangle.png'
import Group from '../Image/Group.png'
import business from '../Image/business.png'
import Growth from '../Image/Growth.png'
import man from '../Image/man.png'
import { AiOutlineRightCircle } from "react-icons/ai";
export default function Service() {
    return (
        <>
                {/* // -------------------------------------------------------------------------
    // services */}

            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-6">
                        <img className='img-Group img-fluid' src={Group} alt="" />
                    </div>
                    <div className="col-md-6 text-white mt-5 align-self-center">
                        <h1>We Are a Digital Agency</h1>
                        <p className='' style={{textAlign:"justify"}}>It Takes a lot of hard to make something simple, to truly  understand the underlying
                            challenges and come up with  elegant solutions</p>
                        <button type="button" class="btn btn-danger btn-sm" style={{ backgroundColor: "#E21818" }} >Get Started Now <AiOutlineRightCircle /> </button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 text-white mt-5 align-self-center'>
                        <h1>Our Growth Story...</h1>
                        <h6>Delivering Digital Excellence Globally !</h6>
                        <p className='' style={{textAlign:"justify"}}>We are Uncovering the Capabilities of Web <br/> With Mordern  Design & Latest Technologies <br/> Our motto is your growth !</p>
                    </div>
                    <div className='col-md-6 '>
                        <img className='img-Growth img-fluid ' src={Growth} alt="" />
                    </div>
                </div>
                {/* managed services */}
                <div className="row">
                    <h6 className='text-center'>We Work With You, Not For You</h6>
                    <h2 className='text-danger text-center'> Managed Services</h2>
                    <div className="">
                        <hr className='d-flex-text-align-center ' style={{ margin: "0 auto", width: "15rem" }}></hr>
                    </div>

                    <h4 className='text-center'>We Help Your Brand To Growth !</h4>
                </div>
                <div className="container">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">

                                <div class="row justify-content-md-center">
                                    <div class="col col-lg-10 ">
                                        <div className="container">
                                            <div class="row services  mb-5 shadow-lg p-5 img-fluid mt-3" >

                                                <div class="col-md-6  ">
                                                    <img src={Rectange} class=" align-center rounded" alt="..." width="80%" />
                                                </div>
                                                <div class="col-md-6  mtb-5">
                                                    <h5 class="card-title mt-5 ">Website Development</h5>
                                                    <p class="card-text "  style={{textAlign:"justify"}}> we are Uncovering Capabilities of Web With Modern Design Design & Latest Technologies Our Motto is your Growth</p>
                                                    <button href="" class="btn btn-danger float-left btn-sm"style={{ backgroundColor: "#E21818" }} >Discover More <AiOutlineRightCircle /></button>

                                                </div>
                                            </div>
                                            <div class="row services  shadow-lg p-5  img-fluid"  >


                                                <div class="col-md-6  ">
                                                    <h5 class="card-title ">App Development</h5>
                                                    <p class="card-text"  style={{textAlign:"justify"}}>We ship experience to the smallest of screens, which translate into the success of ypur business, ease of operation, and engagement of the consumers with our exceptionally deep
                                                        understanding of the user experience and mobile technology </p>
                                                    <button href="" class="btn btn-danger float-left btn-sm" style={{ backgroundColor: "#E21818" }} >Discover More <AiOutlineRightCircle /></button>

                                                </div>
                                                <div class="col-md-6 ">
                                                    <img src={business} class=" align-center rounded" alt="..." width="80%" />
                                                </div>
                                            </div>
                                            <div class="row services mt-5 shadow-lg p-5 mb-3 img-fluid " >

                                                <div class="col-md-6 ">
                                                    <img src={Rectange} class=" align-center rounded" alt="..." width="80%" />
                                                </div>
                                                <div class="col-md-6 justify-content-between mtb-5">
                                                    <h5 class="card-title mt-5">UI/UX Design</h5>
                                                    <p class="card-text"  style={{textAlign:"justify"}}>Design is not how it looks. But how it works. -steve jobs simple design is a complex process . We simplify it by focusing on challenges and solutions followed by building functional user interfaces that keep the audience at the center</p>
                                                    <button href="" class="btn btn-danger float-left btn-sm"style={{ backgroundColor: "#E21818" }}  >Discover More <AiOutlineRightCircle /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div class="row justify-content-md-center">
                                    <div class="col  col-lg-10">
                                        <div className="container">
                                            <div class="row services mb-5 shadow-lg p-5  img-fluid mt-3" >

                                                <div class="col-md-6 ">
                                                    <img src={Rectange} class=" align-center rounded " alt="..." width="80%" />
                                                </div>
                                                <div class="col-md-6 justify-content-between mtb-5">
                                                    <h5 class="card-title mt-5">Project Management</h5>
                                                    <p class="card-text" style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iste, nesciunt maiores culpa et, doloremque velit, amet sequi vero sit dolores nihil optio tenetur distinctio error necessitatibus dolorem ea illum?</p>
                                                    <button href="" class="btn btn-danger float-left btn-sm"style={{ backgroundColor: "#E21818" }}  >Discover More <AiOutlineRightCircle /></button>

                                                </div>
                                            </div>
                                            <div class="row services  shadow-lg p-5   img-fluid"  >


                                                <div class="col-md-6 justify-content-between ">
                                                    <h5 class="card-title ">Data Analytics</h5>
                                                    <p class="card-text"  style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus ullam error hic qui, illum fugit, assumenda ad dolorem id quia at dolor accusantium excepturi voluptatum culpa obcaecati! Autem nulla accusantium porro magni hic!</p>
                                                    <button href="" class="btn btn-danger float-left btn-sm" style={{ backgroundColor: "#E21818" }} >Discover More <AiOutlineRightCircle /></button>

                                                </div>
                                                <div class="col-md-6 ">
                                                    <img src={Rectange} class=" align-center rounded " alt="..." width="80%" />
                                                </div>
                                            </div>
                                            <div class="row services mt-5 shadow-lg p-5  img-fluid mb-3" >

                                                <div class="col-md-6 ">
                                                    <img src={Rectange} class=" align-center rounded" alt="..." width="80%" />
                                                </div>
                                                <div class="col-md-6 justify-content-between mtb-5 ">
                                                    <h5 class="card-title mt-5">Digital Marketing</h5>
                                                    <p class="card-text"  style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iste, nesciunt maiores culpa et, doloremque velit, amet sequi vero sit dolores nihil optio tenetur distinctio error necessitatibus dolorem ea illum?</p>
                                                    <button href="" class="btn btn-danger float-left btn-sm" style={{ backgroundColor: "#E21818" }} >Discover More <AiOutlineRightCircle /></button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="carousel-item">



                                <div class="row justify-content-md-center">
                                    <div class="col col-lg-10">
                                        <div className="container">
                                            <div class="row services mb-5 shadow-lg p-5  img-fluid mt-3" >

                                                <div class="col-md-6 ">
                                                    <img src={Rectange} class=" align-center rounded" alt="..." width="80%" />
                                                </div>
                                                <div class="col-md-6 justify-content-between mtb-5">
                                                    <h5 class="card-title mt-5">Product Management</h5>
                                                    <p class="card-text"  style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iste, nesciunt maiores culpa et, doloremque velit, amet sequi vero sit dolores nihil optio tenetur distinctio error necessitatibus dolorem ea illum?</p>
                                                    <button href="" class="btn btn-danger float-left btn-sm" style={{ backgroundColor: "#E21818" }} >Discover More <AiOutlineRightCircle /></button>
                                                </div>
                                            </div>
                                            <div class="row services  shadow-lg p-5   img-fluid" >


                                                <div class="col-md-6 justify-content-between ">
                                                    <h5 class="card-title ">IT Trainings</h5>
                                                    <p class="card-text"  style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus a excepturi laboriosam impedit voluptates deserunt labore quas eveniet. Praesentium exercitationem omnis impedit minima rem animi quis illum assumenda. Placeat voluptas quam illum unde!</p>
                                                    <button href="" class="btn btn-danger float-left btn-sm" style={{ backgroundColor: "#E21818" }} >Discover More <AiOutlineRightCircle /></button>

                                                </div>
                                                <div class="col-md-6 ">
                                                    <img src={Rectange} class=" align-center rounded" alt="..." width="80%" />
                                                </div>
                                            </div>
                                            <div class="row services mt-5 shadow-lg p-5 img-fluid mb-3" >

                                                <div class="col-md-6 ">
                                                    <img src={Rectange} class=" align-center rounded" alt="..." width="80%" />
                                                </div>
                                                <div class="col-md-6 justify-content-between mtb-5">
                                                    <h5 class="card-title mt-5">SEO</h5>
                                                    <p class="card-text " style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iste, nesciunt maiores culpa et, doloremque velit, amet sequi vero sit dolores nihil optio tenetur distinctio error necessitatibus dolorem ea illum?</p>
                                                    <button href="" class="btn btn-danger float-left btn-sm"style={{ backgroundColor: "#E21818" }}  >Discover More <AiOutlineRightCircle /></button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" style={{left:"-1.5rem"}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" style={{right:"0rem"}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* Client Side */}
                <div className="container">
                    <div className="row">
                        <h5 className='mt-5 text-center'>What Client Says</h5>
                        <div className="">
                            <hr className='d-flex-text-align-center ' style={{ margin: "0 auto", width: "7rem" }}></hr>
                        </div>
                        <h1 className='text-center'>Client Testimonials</h1>
                        <p className='text-center'>Lorem ipsum, dolor sit amet  niam doloribus.</p>
                    </div>
                   
                    <div className="container">                        
                            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                    <div className="row">
                                        <div className="col-md-4 mb-3 mt-3">
                                            <div class="card  bg-transparent  testimonials img-fluid"  >
                                                <div class="card-body ">
                                                   
                                                    <p class="card-text"  style={{textAlign:"justify"}}>"Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repellendus quia eos qui reiciendis debitis rem! Nobis quas eligendi tempora voluptas".</p>
                                                    <center><img src={man} class="card-img-top  " alt="..." style={{ width: "50%" }} />
                                                        <h5 class="card-title"> Name</h5></center>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-4 mb-3 mt-3">
                                            <div class="card  bg-transparent  testimonials img-fluid"  >
                                                <div class="card-body ">
                                                   
                                                    <p class="card-text " style={{textAlign:"justify"}}>"Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repellendus quia eos qui reiciendis debitis rem! Nobis quas eligendi tempora voluptas."</p>
                                                    <center><img src={man} class="card-img-top  " alt="..." style={{ width: "50%" }} />
                                                        <h5 class="card-title"> Name</h5></center>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3 mt-3">
                                            <div class="card  bg-transparent  testimonials img-fluid"  >
                                                <div class="card-body ">
                                                  
                                                    <p class="card-text " style={{textAlign:"justify"}}>"Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repellendus quia eos qui reiciendis debitis rem! Nobis quas eligendi tempora voluptas."</p>
                                                    <center><img src={man} class="card-img-top  " alt="..." style={{ width: "50%" }} />
                                                        <h5 class="card-title"> Name</h5></center>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                    <div className="row">
                                        <div className="col-md-4 mb-3 mt-3">
                                            <div class="card  bg-transparent  testimonials img-fluid"  >
                                                <div class="card-body ">
                                                   
                                                    <p class="card-text " style={{textAlign:"justify"}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repellendus quia eos qui reiciendis debitis rem! Nobis quas eligendi tempora voluptas.</p>
                                                    <center><img src={man} class="card-img-top  " alt="..." style={{ width: "50%" }} />
                                                        <h5 class="card-title"> Name</h5></center>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3 mt-3">
                                            <div class="card  bg-transparent  testimonials img-fluid"  >
                                                <div class="card-body ">
                                                   
                                                    <p class="card-text " style={{textAlign:"justify"}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repellendus quia eos qui reiciendis debitis rem! Nobis quas eligendi tempora voluptas.</p>
                                                    <center><img src={man} class="card-img-top  " alt="..." style={{ width: "50%" }} />
                                                        <h5 class="card-title"> Name</h5></center>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3 mt-3">
                                            <div class="card  bg-transparent  testimonials img-fluid"  >
                                                <div class="card-body ">
                                                    
                                                    <p class="card-text " style={{textAlign:"justify"}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repellendus quia eos qui reiciendis debitis rem! Nobis quas eligendi tempora voluptas.</p>
                                                    <center><img src={man} class="card-img-top  " alt="..." style={{ width: "50%" }} />
                                                        <h5 class="card-title"> Name</h5></center>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4 mb-3 mt-3">
                                            <div class="card  bg-transparent  testimonials img-fluid"  >
                                                <div class="card-body ">
                                                   
                                                    <p class="card-text " style={{textAlign:"justify"}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repellendus quia eos qui reiciendis debitis rem! Nobis quas eligendi tempora voluptas.</p>
                                                    <center><img src={man} class="card-img-top  " alt="..." style={{ width: "50%" }} />
                                                        <h5 class="card-title"> Name</h5></center>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3 mt-3">
                                            <div class="card  bg-transparent  testimonials img-fluid"  >
                                                <div class="card-body ">
                                                    
                                                    <p class="card-text " style={{textAlign:"justify"}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repellendus quia eos qui reiciendis debitis rem! Nobis quas eligendi tempora voluptas.</p>
                                                    <center><img src={man} class="card-img-top  " alt="..." style={{ width: "50%" }} />
                                                        <h5 class="card-title"> Name</h5></center>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3 mt-3">
                                            <div class="card  bg-transparent  testimonials img-fluid"  >
                                                <div class="card-body ">
                                                    
                                                    <p class="card-text " style={{textAlign:"justify"}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repellendus quia eos qui reiciendis debitis rem! Nobis quas eligendi tempora voluptas.</p>
                                                    <center><img src={man} class="card-img-top  " alt="..." style={{ width: "50%" }} />
                                                        <h5 class="card-title"> Name</h5></center>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev previous d-flex justify-content-start" style={{left:"-3rem"}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon previous" aria-hidden="true"></span>
                                    <span class="visually-hidden ">Previous</span>
                                </button>
                                <button class="carousel-control-next d-flex justify-content-end" style={{right:"-1rem"}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span class="carousel-control-next-icon next" aria-hidden="true"></span>
                                    <span class="visually-hidden next">Next</span>
                                </button>
                            </div>                        
                    </div>
                </div >
            </div>
        </>
    )


}
