import React from "react";
import "./Aboutuspage.css";
import "../App.css";
import frame1 from "../Components/images/Frame with photo.png";
import profile from "../Components/images/Start up Consultancy.png";
import ceo from "../Components/images/ceocard.png";
import dtmahesh from "../Components/images/mahesh.png";
import dtshubham from "../Components/images/shubham.png";
import dtakshada from "../Components/images/akshada.png";
import dtrutuja from "../Components/images/rutuja.png";
import dtrajnandini from "../Components/images/rajnandini.png";
import dtmitisha from "../Components/images/mitisha.png";
import dtaditi from "../Components/images/aditi.png";
import dtpurva from "../Components/images/purva.png";
import dtmansi from "../Components/images/mansi.png";
import dtpiyush from "../Components/images/piyush.png";

import {CiLinkedin} from "react-icons/ci"
import aboutus from "../Components/images/aboutus.png";
import { BiCaretRightCircle } from "react-icons/bi";
import CountUp from "react-countup";

const Aboutuspage = () => {
  return (
    <>
      <div className="bg-black">
        <div className="container-fluid  bg-black ">
          <br />
          <br />
          <h3 className="text-start d-md-none">Sumago Infotech</h3>
          <hr className="hr d-md-none" />
          <h1 className=" text-start mt-0 d-md-none">About Us</h1>
          <div className="row">
            <div className="mt-1 col-md-5">
              <img src={frame1} className="img-fluid" alt="Frame 1" />
              <h3 className="ms-5 text-right">
                {" "}
                &nbsp;&nbsp;We Do Everything...{" "}
              </h3>
              <p className="text-white ms-5 fs-5 text-right ">
                We undertake logic,intuition,imagination,
                <br /> and reasoning to builda product.The core
                <br />
                of our methodology remains at designing
                <br />
                products that resonate with the wants and
                <br />
                expectations of the customers.
                <br />
                It helps designers focus on user needs first
                <br /> and foremost,and come up with effective
                <br />
                solutions to meet those needs.
              </p>
            </div>

            <div
              className="col-md-7 d-flex flex-md-column flex-column 
            flex-sm-row flex-lg-row"
            >
              <div className="">
                <h3 className="text-center mt-1 d-none d-md-block">
                  Sumago Infotech
                </h3>
                <hr className="hr" />
                <h1 className=" text-center mt-0 d-none d-md-block">
                  About Us
                </h1>

                <div className="cd shadow-lg rounded ms-md-5 me-0 ms-0 text-center">
                  <h1 className="text-center mt-3">Our Mission...</h1>
                  <br />
                  <br />
                  <div>
                    <p className="">
                      At Sumago Infotech, We “Strive with Technology” to provide
                      the most effective and affordable service that fulfills
                      our customer’s needs and budget. We provide customized
                      websites and software solutions that suit customer’s
                      company objectives. We always keep involving our customers
                      in an entire process starting from design through
                      deployment, so that your ideas can be incorporated into
                      our work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="cd text-white shadow-lg rounded ms-0 ms-md-3">
                  <h1 className="text-center mt-3 ">Our Vision...</h1>
                  <p className="mt-md-5">
                    {" "}
                    We aspire to be the global sourcing choice of the world
                    market and revolutionizes the way service processes
                    function. To reach out to the common people across the globe
                    and making Information Technology a tool for the “MASS”
                    along with the tool for the “CLASS”. Creating innovative IT
                    solutions and provide IT-enabled services to delight
                    customers worldwide and build Relationships based on Trust,
                    Values and Professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-center text-white text-center mt-5 mid-div ">
          <div className="row">
            <div className="col-md-4">
              <h1 className="fs-1 text-center">
                <CountUp end={100} duration={4} />+
              </h1>
              <h4 className="fs-2">Projects Completed</h4>
            </div>
            <div className="col-md-4">
              <h1 className="fs-1 text-center ">
                <CountUp end={50} duration={4} />+
              </h1>
              <h4 className="fs-2">Case Studies</h4>
            </div>
            <div className="col-md-4">
              <h1 className="fs-1 text-center">
                <CountUp end={10} duration={4} />+
              </h1>
              <h4 className="fs-2">Years of Experience</h4>
            </div>
          </div>
        </div>

        {/* Management team starts here*/}
        <div className="container">
          <div className="row">
            <h3 className="text-center mt-5">Sumago Infotech</h3>
            <div className="d-flex justify-content-center">
              <hr className="  w-25 text-center"></hr>
            </div>
            <h1 className=" fw-bold text-center mb-4">Team</h1>
            <div className="border border-light border-2 rounded-3  p-4">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum consectetur blanditiis tempora alias assumenda placeat
                magni sed debitis corporis. Quam sint sapiente perspiciatis
                fugiat vitae rerum consequuntur aliquam eius exercitationem?
              </p>
            </div>
            <h2 className=" text-center mt-2">MANAGEMENT TEAM</h2>
            <div className="d-flex justify-content-center">
              <hr className=" w-25 text-center "></hr>
            </div>
            <h2 className="bg-green text-center ">
              "Make
              <span className="text-danger fw-bold ms-2 me-2">Discussion</span>
              become more
              <span className="text-danger fw-bold ms-2">Comfortable"</span>
            </h2>
          </div>
        </div>

        <div class="container mt-5">
          <div class="row d-flex justify-content-center">
            <div class="col-md-5 mb-4 col-sm-12">
              <div class="card bg-light bor">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h4 class="card-title">Ashwini Choudhary</h4>
                    <h5 class="card-subtitle mb-2">Hr Executive</h5>
                  </div>
                  <img
                    class="rounded"
                    src={profile}
                    alt="Profile"
                    width="90rem"
                    height="90rem"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-5 mb-4 col-sm-12">
              <div class="card bg-light bord">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <img
                    class="rounded"
                    src={profile}
                    alt="Profile"
                    width="90rem"
                    height="90rem"
                  />
                  <div>
                    <h4 class="card-title">Deepika Jagtap</h4>
                    <h5 class="card-subtitle mb-2">Hr Executive</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 text-white">
              <div className="row bg-light bor mt-4">
                <div className="col-8 col-md-9 text-end text-md-start">
                  <h4 className="card-title">Satish Aurange</h4>
                  <h5>Chief Technology Officer</h5>
                </div>
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={profile}
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div className="row bg-light bor mt-4">
                <div className="col-8 col-md-9 text-end text-md-start">
                  <h4 className="card-title">Satish Marwat</h4>
                  <h5>Chief Operation Officer</h5>
                </div>
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={profile}
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div className="row bg-light bor mt-4">
                <div className="col-8 col-md-9 text-end text-md-start">
                  <h4 className="card-title">Prasad Pawar</h4>
                  <h5>Project Manager</h5>
                </div>
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={profile}
                    alt="Card image cap"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3 col-lg-2 mt-4">
              <img src={ceo} className="img-fluid" alt="CEO" />
            </div>

            <div className="col-md-6 col-lg-4 mt-4">
              <div className="row bg-light bord">
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={profile}
                    alt="Card image cap"
                  />
                </div>
                <div className="col-8 col-md-9 text-start">
                  <h4 className="card-title">Dipti Pawar</h4>
                  <h5>Business Analyst</h5>
                </div>
              </div>

              <div className="row bg-light bord mt-4">
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={profile}
                    alt="Card image cap"
                  />
                </div>
                <div className="col-8 col-md-9 text-start">
                  <h4 className="card-title">Ashwini Gite</h4>
                  <h5>Sr. Business Development Executive</h5>
                </div>
              </div>

              <div className="row bg-light bord mt-4">
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={profile}
                    alt="Card image cap"
                  />
                </div>
                <div className="col-8 col-md-9 text-start">
                  <h4 className="card-title">Vrushali Varpe</h4>
                  <h5 className="text-right">
                    Jr. Business Development Executive
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-3">
          <div class="row justify-content-center">
            <div class="col-md-5 col-lg-4 me-md-3 mb-3 mb-md-0 row bg-light bor ">
              <div class="col-md-8 text-white mt-3">
                <h4 class="card-title">Aarti Pawar</h4>
                <h5>Accountant</h5>
              </div>
              <div class="col-md-4 col-lg-4 clearfix">
                <img
                  class="card-img rounded"
                  src={profile}
                  alt="Card image cap"
                  width="40rem"
                  height="90rem"
                />
              </div>
            </div>

            <div class="col-md-5 col-lg-4 ms-md-4 row bg-light bord">
              <div class="col-md-4 col-lg-4">
                <img
                  class="card-img rounded"
                  src={profile}
                  alt="Card image cap"
                  width="90rem"
                  height="90rem"
                />
              </div>
              <div class="col-md-8 col-lg-8 text-white mt-3">
                <h4 class="card-title text-right">Shivam Shinde</h4>
                <h5 class="text-right">System Engineer</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Management team ends here*/}

        {/* Digital marketing team starts here*/}
        <div>
          <h2 className="text-white text-center mt-5">
            DIGITAL MARKETING AND DESIGNING TEAM
          </h2>
          <div className="d-flex justify-content-center">
            <hr className=" text-white w-25 text-center"></hr>
          </div>
        </div>
        <h3 className="text-center">Meet our team of Creators</h3>
        <h3 className="text-center">
          <span className="text-danger fw-bold ms-2 me-2">Designers</span>
          and world-class
          <span className="text-danger fw-bold ms-2 me-2">Problem Solvers</span>
        </h3>

        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12  me-0 ">
              <img
                className="img-fluid ms-md-3 ms-0 me-2"
                src={frame1}
                style={{ width: "20Rem", height: "15Rem" }}
              />
              <h5 className="text-center ms-md-5 ms-0 text-white">
                MONIKA KOTHAVADE
              </h5>
              <p className="text-center ms-md-5 ms-0 text-white">
                Social Media Manager
              </p>
            </div>

            <div className="col-md-4 col-12 mt-md-5">
              <img
                className="img-fluid ms-md-2 mt-md-5 ms-0 me-5"
                src={frame1}
                style={{ width: "20Rem", height: "15Rem" }}
              />
              <h5 className="text-center  ms-0 text-white">SHWETA JADE</h5>
              <p className="text-center  ms-0 text-white">Ui/Ux Designer</p>
            </div>

            <div className="col-md-4 col-12">
              <img
                className="img-fluid me-0"
                src={frame1}
                style={{ width: "20Rem", height: "15Rem" }}
              />
              <h5 className="text-center  ms-0 text-white">CHAITALI CHAVAN</h5>
              <p className="text-center  ms-0 text-white">Graphics Designer</p>
            </div>
          </div>
        </div>
        {/* Digital marketing team ends here*/}

        {/* Call to Action Part starts  here*/}
        <div className="container-fluid p-3 p-md-5 mt-2 calltoaction">
          <div className="row">
            <div className="col-12 col-md-7">
              <h1 className="text-left ms-md-5 p-3 p-md-4 fs-3 fs-md-1 fw-bold">
                Call To Action
              </h1>
              <p className="ms-md-5 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi a aliquam dolores reiciendis ratione voluptatem minima.
              </p>
            </div>
            <div className="col-12 col-md-5 text-center text-md-right">
              <button
                type="button"
                className="btn btn-danger btn-lg mt-3 mt-md-5 ms-md-5"
              >
                Call To Action &nbsp;&nbsp;
                <BiCaretRightCircle />
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action Part ends  here*/}
        <div className="text-center">
          <h2>DEVELOPMENT TEAM</h2>
          <div className="d-flex justify-content-center">
            <hr className=" text-white w-25 text-center"></hr>
          </div>
          <h2>
            "Manage your{" "}
            <span className="text-danger">
              Project
              <br />
            </span>{" "}
            with the <span className="text-danger">Team"</span>
          </h2>
        </div>

        {/*Development team  DESKTOP view starts here*/}
        <div className="container desktophead">
          <div className="desktopview mt-5">

            {/*OUTER CIRCLE */}
            <img src={dtmahesh} width={"150rem"} height={"150rem"} style={{marginLeft:"30rem",marginTop:"-3.75rem"}}/>
                  <h5 style={{marginLeft:"39rem",marginTop:"-5rem"}}><CiLinkedin/></h5>
                  <h6 style={{marginLeft:"39rem",marginTop:".40rem"}}>Mahesh Mahajan</h6>
                  <p  style={{marginLeft:"40rem",marginTop:"-0.35rem"}}>Developer</p>

            <img src={dtshubham} width={"150rem"} height={"150rem"} style={{marginLeft:"51rem",marginTop:"-4rem"}}/>
                  <h5 style={{marginLeft:"58rem",marginTop:"-1.25rem"}}><CiLinkedin/></h5>
                  <h6 style={{marginLeft:"52rem",marginTop:"-.50rem"}}>Shubham Kothavade</h6>
                  <p style={{marginLeft:"58rem",marginTop:"-0.35rem"}}>Developer</p>
                  
            <img src={dtakshada} width={"150rem"} height={"150rem"} style={{marginLeft:"63rem",marginTop:"3rem"}}/>
                  <h5 style={{marginLeft:"68rem",marginTop:"-0.90rem"}}><CiLinkedin/></h5>
                  <h6 style={{marginLeft:"62rem",marginTop:"-.50rem"}}>Akshada Sanap</h6>
                  <p style={{marginLeft:"64.5rem",marginTop:"-0.35rem"}}>Developer</p>
                  
            <img src={dtrutuja} width={"150rem"} height={"150rem"} style={{marginLeft:"62rem",marginTop:"6.80rem"}}/>
                  <h5 style={{marginLeft:"63rem",marginTop:"-1.70rem"}}><CiLinkedin/></h5>
                  <h6 style={{marginLeft:"59.5rem",marginTop:"-.50rem"}}>Rutuja Patil</h6>
                  <p style={{marginLeft:"60rem",marginTop:"-0.50rem"}}>Developer</p>
                  
            <img src={dtrajnandini} width={"150rem"} height={"150rem"} style={{marginLeft:"52rem",marginTop:"4.5rem"}}/>
                  <h5 style={{marginLeft:"51rem",marginTop:"-6rem"}}><CiLinkedin/></h5>
                  <h6 style={{marginLeft:"45rem",marginTop:"-0.50rem"}}>Rajnandini Rajput</h6>
                  <p style={{marginLeft:"48rem",marginTop:"-0.50rem"}}>Developer</p>

            <img src={dtmitisha} width={"150rem"} height={"150rem"} style={{marginLeft:"32rem",marginTop:"-1.5rem"}}/>
                  <h6 style={{marginLeft:"27rem",marginTop:"-8rem"}}>Mitisha Patel</h6>
                  <p style={{marginLeft:"28rem",marginTop:"-0.50rem"}}>Developer</p>
                  <h5 style={{marginLeft:"31rem",marginTop:"-1.50rem"}}><CiLinkedin/></h5>


            <img src={dtaditi} width={"150rem"} height={"150rem"} style={{marginLeft:"8rem",marginTop:"-17rem"}}/>
                  <h6 style={{marginLeft:"7rem",marginTop:"-17rem"}}>Aditi Sonawane</h6>
                  <p style={{marginLeft:"8rem",marginTop:"-1rem"}}>Developer</p>
                  <h5 style={{marginLeft:"10rem",marginTop:"-1rem"}}><CiLinkedin/></h5>

                  
            <img src={dtpurva} width={"150rem"} height={"150rem"} style={{marginLeft:"-3rem",marginTop:"-28rem"}}/>
                   <h5 style={{marginLeft:"1rem",marginTop:"-20rem"}}><CiLinkedin/></h5>
                  <h6 style={{marginLeft:"0.5rem",marginTop:"-4rem"}}>Purva Diwate</h6>
                  <p style={{marginLeft:"1rem",marginTop:"-1rem"}}>Developer</p>
                  
            <img src={dtmansi} width={"150rem"} height={"150rem"} style={{marginLeft:"-3rem",marginTop:"-33rem"}}/>
                  <h6 style={{marginLeft:"4.8rem",marginTop:"-25rem"}}>Mansi Sonawane</h6>
                  <p style={{marginLeft:"4rem",marginTop:"-0.50rem"}}>Developer</p>
                  <h5 style={{marginLeft:"3rem",marginTop:"-1rem"}}><CiLinkedin/></h5>

                  
            <img src={dtpiyush} width={"150rem"} height={"150rem"} style={{marginLeft:"7rem",marginTop:"-30rem"}}/>
                  <h5 style={{marginLeft:"18rem",marginTop:"-20rem"}}><CiLinkedin/></h5>
                  <h6 style={{marginLeft:"16rem",marginTop:"-.50rem"}}>Piyush Rajendra</h6>
                  <p style={{marginLeft:"16rem",marginTop:"-0.50rem"}}>Developer</p>
                  

            {/*INNER CIRCLE */}
          </div>
        </div>
        {/*Development team  DESKTOP view ends here*/}

        {/*Development team  Mobile view starts here*/}
        <div className="container d-lg-none">
          <div className="row main">
            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card">
                <div class="img">
                  <img src={profile} />
                </div>
                <div class="caption">
                  <h3>Vin Diesel</h3>
                  <p>Senior App Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card">
                <div className="img">
                  <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" />
                </div>
                <div className="caption">
                  <h3>David Corner</h3>
                  <p>Front End Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card">
                <div className="img">
                  <img src="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg" />
                </div>
                <div className="caption">
                  <h3>Tom Cruise</h3>
                  <p>Full Stact Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card">
                <div className="img">
                  <img src="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg" />
                </div>
                <div className="caption">
                  <h3>Tom Cruise</h3>
                  <p>Full Stact Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row main mt-md-4 mt-0">
            <div className="col-md-3 col-6 d-flex justify-content-center">
              <div className="profile-card">
                <div className="img">
                  <img src="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg" />
                </div>
                <div className="caption">
                  <h3>Vin Diesel</h3>
                  <p>Senior App Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card">
                <div className="img">
                  <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" />
                </div>
                <div className="caption">
                  <h3>David Corner</h3>
                  <p>Front End Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card">
                <div className="img">
                  <img src="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg" />
                </div>
                <div className="caption">
                  <h3>Tom Cruise</h3>
                  <p>Full Stact Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card">
                <div className="img">
                  <img src="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg" />
                </div>
                <div className="caption">
                  <h3>Tom Cruise</h3>
                  <p>Full Stact Developer</p>
                </div>
              </div>
            </div>
            <nav aria-label="...">
              <ul className="pagination pagination-lg justify-content-end ">
                <li className="page-item active bg-danger" aria-current="page">
                  <span className="page-link bg-danger">1</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*Development Ends here*/}

        {/*Training team section starts here */}
        <div className="text-center">
          <h2 className="mt-5">TRAINING TEAM</h2>
          <div className="d-flex justify-content-center">
            <hr className=" text-white w-25 text-center"></hr>
          </div>
          <h2>
            "We believe in{" "}
            <span className="text-danger">
              Helping
              <br />
            </span>{" "}
            people pay<span className="text-danger">Attention</span> to what
            matters"
          </h2>
        </div>

        <div className="tree ">
          <ul>
            <li>
              <a href="#">
                <div className="mx-auto">
                  <div
                    className="card training-card bgc "
                    style={{ width: "15rem" }}
                  >
                    <center>
                      <img
                        src={profile}
                        className="card-img-top pro-image img-fluid"
                        alt="..."
                      />
                    </center>
                    <div className="card-body" style={{ height: "5rem" }}>
                      <h5 className="card-title training-card-title ">
                        Amol Pawar
                      </h5>
                      <p className="card-title training-card-title ">
                        L&D Head
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <ul className="inn_line">
                <li>
                  <a href="#">
                    <div className="mx-auto">
                      <div
                        className="card training-card bgc"
                        style={{ width: "15rem" }}
                      >
                        <center>
                          <img
                            src={profile}
                            className="card-img-top pro-image"
                            alt="..."
                          />
                        </center>
                        <div className="card-body">
                          <h5 className="card-title training-card-title ">
                            Pratiksha Karwate
                          </h5>
                          <p>Trainer</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="mx-auto">
                      <div
                        className="card training-card bgc "
                        style={{ width: "15rem" }}
                      >
                        <center>
                          <img
                            src={profile}
                            className="card-img-top pro-image"
                            alt="..."
                          />
                        </center>
                        <div className="card-body">
                          <h5 className="card-title training-card-title ">
                            Shweta Jade
                          </h5>
                          <p>Trainer</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="mx-auto">
                      <div
                        className="card training-card bgc"
                        style={{ width: "15rem" }}
                      >
                        <center>
                          <img
                            src={profile}
                            className="card-img-top pro-image"
                            alt="..."
                          />
                        </center>
                        <div className="card-body">
                          <h5 className="card-title training-card-title ">
                            Mahesh Mahajan
                          </h5>
                          <p>Trainer</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="mx-auto">
                      <div
                        className="card training-card bgc"
                        style={{ width: "15rem" }}
                      >
                        <center>
                          <img
                            src={profile}
                            className="card-img-top pro-image"
                            alt="..."
                          />
                        </center>
                        <div className="card-body">
                          <h5 className="card-title training-card-title ">
                            Vikas Wagh
                          </h5>
                          <p>Trainer</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="mx-auto">
                      <div
                        className="card training-card bgc"
                        style={{ width: "15rem" }}
                      >
                        <center>
                          <img
                            src={profile}
                            className="card-img-top pro-image"
                            alt="..."
                          />
                        </center>
                        <div className="card-body">
                          <h5 className="card-title training-card-title ">
                            Aakash Rajput
                          </h5>
                          <p>Trainer</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/*Training team section ends here */}

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 mt-4">
              <img src={aboutus} className="img-fluid" />
            </div>
            <div class="col-md-6 col-12 mt-4">
              <h4 className="d-md-block d-none">Success Stories</h4>
              <div className="d-flex justify-content-right">
                <hr className="  w-25 text-center"></hr>
              </div>
              <h1 className="fs-1">Our Achievement</h1>
              <br />
              <h5 className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                Nihil quaerat, sed fugiat facilis asperiores eveniet mollitia
                <br /> animi dolore aliquam esse. Quod quidem iure temporibus
                <br />
                maxime, omnis veritatis quibusdam nam velit. Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
                <br />
                Quibusdam laborum unde deserunt accusamus ex aut,aspernatur
                temporibus, quasi aperiam, voluptate sint sit
                <br />
                reiciendis expedita mollitia magni ullam sequi ratione delectus!
              </h5>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutuspage;
