import React from "react";
import "./Aboutuspage.css";
import "../App.css";
import group_img from "./images/Img2.png";
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
import dtsavita from "../Components/images/savita.png";
import dtmaheshm from "../Components/images/maheshm.png";
import dtvikas from "../Components/images/vikas.png";
import dtvivek from "../Components/images/vivek.png";
import dtrupali from "../Components/images/rupali.png";
import dtpratiksha from "../Components/images/pratiksha.png";
import dtpayal from "../Components/images/payal.png";
import dtmonika from "../Components/images/monika.png";
import dtshweta from "../Components/images/shwetauiux.png";
import dtashwini from "../Components/images/ashwini.png";
import dtdeepika from "../Components/images/deepika.png";
import dtsatish from "../Components/images/satisha.png";
import dtsatishm from "../Components/images/satishm.png";
import dtprasad from "../Components/images/prasad.png";
import dtaarti from "../Components/images/aarti.png";
import dtdipti from "../Components/images/dipti.png";
import dtshivam from "../Components/images/shivam.png";
import dtvrushali from "../Components/images/vrushali.png";
import dtamol from "../Components/images/amol.png";
import dtaakash from "../Components/images/aakash.png";
import dtshwetat from "../Components/images/shweta.png";
import dtpratikshat from "../Components/images/pratikshat.png";
import dtmahesht from "../Components/images/mahesht.png";
import dtvikast from "../Components/images/vikast.png";
import dtceo from "../Components/images/ceo.png";
import { CiLinkedin } from "react-icons/ci";
import {FaLinkedin} from "react-icons/fa";
import aboutus from "../Components/images/aboutus.png";
import { BiCaretRightCircle } from "react-icons/bi";
import CountUp from "react-countup";

const Aboutuspage = () => {
  return (
    <>
      <div className="">
        <div className="container-fluid ">
          <br />
          <br />
          <h3 className="text-start d-md-none">Sumago Infotech</h3>
          <hr className="hr d-md-none" />
          <h1 className=" text-start mt-0 d-md-none">About Us</h1>
          <div className="row">
            <div className="mt-1 col-md-5 text-center">
              <img src={frame1} className="img-fluid" alt="Frame 1" />
              <h3 className="ms-5 text-start">
                {" "}
                &nbsp;&nbsp;We Do Everything...{" "}
              </h3>
              <p className="text-white ms-5 fs-5 text-start ">
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
                <div className="d-flex justify-content-center">
                  <hr
                    className="w-25"
                    style={{ color: "white", marginTop: "1rem" }}
                  />
                </div>

                <h1 className=" text-center mt-0 d-none d-md-block">
                  About Us
                </h1>

                <div className="cd shadow-lg rounded ms-md-5 me-0 ms-0">
                  <h1 className="text-center mt-2">Our Mission</h1>

                  <div>
                    <p className="mt-md-4 text-start">
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
                  <h1 className="text-center mt-2 ">Our Vision</h1>
                  <p className="mt-md-4 text-start">
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

        <div className="text-white text-center mt-5 mid-div ">
          <div className="d-flex justify-content-evenly">
            <div className="">
              <h1 className="fw-bolder text-center">
                <CountUp end={100} duration={4} />+
              </h1>
              <h6 className="fs-4 mt-3">Projects Completed</h6>
            </div>
            <div className="">
              <h1 className="fw-bolder text-center ">
                <CountUp end={50} duration={4} />+
              </h1>
              <h6 className="fs-4 mt-3">Case Studies</h6>
            </div>
            <div className="">
              <h1 className="fw-bolder text-center">
                <CountUp end={10} duration={4} />+
              </h1>
              <h6 className="fs-4 mt-3">Years of Experience</h6>
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
            <h2 className=" text-center mt-4">MANAGEMENT TEAM</h2>
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

        <div class="container mt-3">
          <div class="row d-flex justify-content-center">
            <div className="col-md-6 col-lg-4 text-white mx-2">
              <div className="row bg-light bor mt-4 ">
                <div className="col-8 col-md-9 text-md-end ">
                  <h4 className="card-title">Ashwini Chaudhary <FaLinkedin/></h4>
                  <p >HR executive</p>
                </div>
                <div className="col-4 col-md-3">
                 
                  <img
                    className="card-img rounded"
                    src={dtashwini}
                    alt="Card image cap"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mt-4">
              <div className="row bg-light bord">
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={dtdeepika}
                    alt="Card image cap"
                  />
                </div>
                <div className="col-8 col-md-9 text-start">
                  <h4 className="card-title"><FaLinkedin/> Deepika Jagtap</h4>
                  <p>HR Executive</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 text-white">
              <div className="row bg-light bor mt-4">
                <div className="col-8 col-md-9 text-end text-md-end">
                  <h4 className="card-title">Satish Aurange <FaLinkedin/></h4>
                  <p>Chief Technology Officer</p>
                </div>
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={dtsatish}
                    alt="Card image cap"
                  />
                </div>
              </div>
{/*satish marwat mobile view */}
              <div className="row bg-light bord mt-4 d-md-none">
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={dtsatishm}
                    alt="Card image cap"
                  />
                </div>
                <div className="col-8 col-md-9 text-end">
                  <h4 className="card-title"><FaLinkedin/> Satish Marwat</h4>
                  <p>Chief Operation Officer</p>
                </div>
              </div>
{/*satish marwat mobile view */}
              <div className="row bg-light bor mt-4 displaymobile">
                <div className="col-8 col-md-9 text-end text-md-end">
                  <h4 className="card-title">Satish Marwat <FaLinkedin/></h4>
                  <p>Chief Operation Officer</p>
                </div>
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={dtsatishm}
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div className="row bg-light bor mt-4">
                <div className="col-8 col-md-9 text-md-end">
                  <h4 className="card-title">Prasad Pawar <FaLinkedin/></h4>
                  <p>Project Manager</p>
                </div>
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={dtprasad}
                    alt="Card image cap"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3 col-lg-2 mt-4">
              <div class="card back text-center" style={{ width: "18rem;" }}>
                <img src={dtceo} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-title text-white fs-5">Sonali Gorade</h1>
                  <p class="card-text">CE0</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mt-4">
              <div className="row bg-light bord">
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={dtdipti}
                    alt="Card image cap"
                  />
                </div>
                <div className="col-8 col-md-9 text-start">
                  <h4 className="card-title"><FaLinkedin/> Dipti Pawar</h4>
                  <p>Business Analyst</p>
                </div>
              </div>
{/*Ashwini gite mobile view starts */}
              <div className="row bg-light bor mt-4 d-md-none ">
                <div className="col-8 col-md-9 text-end text-md-start">
                  <h4 className="card-title">Ashwini Gite <FaLinkedin/></h4>
                  <p>Sr. Business Development Executive</p>
                </div>
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={profile}
                    alt="Card image cap"
                  />
                </div>
              </div>
{/*Ashwini gite mobile view ends*/}
              <div className="row bg-light bord mt-4 displaymobile">
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={profile}
                    alt="Card image cap"
                  />
                </div>
                <div className="col-8 col-md-9 text-start">
                  <h4 className="card-title"><FaLinkedin/> Ashwini Gite</h4>
                  <p>Sr. Business Development Executive</p>
                </div>
              </div>

              <div className="row bg-light bord mt-4">
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={dtvrushali}
                    alt="Card image cap"
                  />
                </div>
                <div className="col-8 col-md-9 text-start">
                  <h4 className="card-title"><FaLinkedin/> Vrushali Varpe</h4>
                  <p className="text-right">
                    Jr. Business Development Executive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-3">
          <div class="row d-flex justify-content-center ">
            <div className="col-md-6 col-lg-4 text-white mx-2 mt-2">
              <div className="row bg-light bor mt-1">
                <div className="col-8 col-md-9 text-md-end">
                  <h4 className="card-title">Aarti Pawar <FaLinkedin/></h4>
                  <p>Accountant</p>
                </div>
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={dtaarti}
                    alt="Card image cap"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mt-2 ">
              <div className="row bg-light bord">
                <div className="col-4 col-md-3">
                  <img
                    className="card-img rounded"
                    src={dtshivam}
                    alt="Card image cap"
                  />
                </div>
                <div className="col-8 col-md-9 text-start">
                  <h4 className="card-title"><FaLinkedin/> Shivam Shinde</h4>
                  <p>System Engineer</p>
                </div>
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
                className="img-fluid  ms-md-2 mt-md-5  me-5"
                src={dtmonika}
                style={{ width: "20Rem", height: "20Rem" }}
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
                className="img-fluid ms-md-4 mt-md-5  me-5"
                src={dtshweta}
                style={{ width: "20Rem", height: "20Rem" }}
              />
              <h5 className="text-center  ms-0 text-white">SHWETA JADE</h5>
              <p className="text-center  ms-0 text-white">Ui/Ux Designer</p>
            </div>

            <div className="col-md-4 col-12">
              <img
                className="img-fluid ms-md-4 mt-md-5  me-5"
                src={frame1}
                style={{ width: "20Rem", height: "20Rem" }}
              />
              <h5 className="text-center  ms-0 text-white">CHAITALI CHAVAN</h5>
              <p className="text-center  ms-0 text-white">Graphics Designer</p>
            </div>
          </div>
        </div>
        {/* Digital marketing team ends here*/}

        {/* Call to Action Part starts  here*/}
        <div className="container-fluid p-md-1 mt-2 calltoaction">
          <div className="row">
            <div className="col-12 col-md-8 ms-md-5">
              <h1 className="text-left ms-md-4 p-3 p-md-4 fs-1 fs-md-1 fw-bold">
                Call To Action
              </h1>
              <p className="ms-md-5 mt-3 fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi a aliquam dolores reiciendis ratione voluptatem minima.
              </p>
            </div>
            <div className="col-12 col-md-3 text-center">
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
        <div className="text-center mt-2 mb-sm-5">
          <h2>DEVELOPMENT TEAM</h2>
          <div className="d-flex justify-content-center">
            <hr className=" text-white w-25 text-center"></hr>
          </div>
          <h2 className=" mb-sm-5">
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
            <img
              src={dtmahesh}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "30rem", marginTop: "-3.75rem" }}
            />
            <h5 style={{ marginLeft: "39rem", marginTop: "-5rem" }}>
              <CiLinkedin />
            </h5>
            <h6 style={{ marginLeft: "39rem", marginTop: ".40rem" }}>
              Mahesh Mahajan
            </h6>
            <p style={{ marginLeft: "40rem", marginTop: "-0.35rem" }}>
              Developer
            </p>

            <img
              src={dtshubham}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "51rem", marginTop: "-4rem" }}
            />
            <h5 style={{ marginLeft: "58rem", marginTop: "-1.25rem" }}>
              <CiLinkedin />
            </h5>
            <h6 style={{ marginLeft: "52rem", marginTop: "-.50rem" }}>
              Shubham Kothavade
            </h6>
            <p style={{ marginLeft: "58rem", marginTop: "-0.35rem" }}>
              Developer
            </p>

            <img
              src={dtakshada}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "63rem", marginTop: "3rem" }}
            />
            <h5 style={{ marginLeft: "68rem", marginTop: "-0.90rem" }}>
              <CiLinkedin />
            </h5>
            <h6 style={{ marginLeft: "62rem", marginTop: "-.50rem" }}>
              Akshada Sanap
            </h6>
            <p style={{ marginLeft: "64.5rem", marginTop: "-0.35rem" }}>
              Developer
            </p>

            <img
              src={dtrutuja}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "62rem", marginTop: "6.80rem" }}
            />
            <h5 style={{ marginLeft: "63rem", marginTop: "-1.70rem" }}>
              <CiLinkedin />
            </h5>
            <h6 style={{ marginLeft: "59.5rem", marginTop: "-.50rem" }}>
              Rutuja Patil
            </h6>
            <p style={{ marginLeft: "60rem", marginTop: "-0.50rem" }}>
              Developer
            </p>

            <img
              src={dtrajnandini}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "52rem", marginTop: "4.5rem" }}
            />
            <h5 style={{ marginLeft: "51rem", marginTop: "-6rem" }}>
              <CiLinkedin />
            </h5>
            <h6 style={{ marginLeft: "45rem", marginTop: "-0.50rem" }}>
              Rajnandini Rajput
            </h6>
            <p style={{ marginLeft: "48rem", marginTop: "-0.50rem" }}>
              Developer
            </p>

            <img
              src={dtmitisha}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "32rem", marginTop: "-1.5rem" }}
            />
            <h6 style={{ marginLeft: "27rem", marginTop: "-8rem" }}>
              Mitisha Patel
            </h6>
            <p style={{ marginLeft: "28rem", marginTop: "-0.50rem" }}>
              Developer
            </p>
            <h5 style={{ marginLeft: "31rem", marginTop: "-1.50rem" }}>
              <CiLinkedin />
            </h5>

            <img
              src={dtaditi}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "8rem", marginTop: "-17rem" }}
            />
            <h6 style={{ marginLeft: "7rem", marginTop: "-17rem" }}>
              Aditi Sonawane
            </h6>
            <p style={{ marginLeft: "8rem", marginTop: "-1rem" }}>Developer</p>
            <h5 style={{ marginLeft: "10rem", marginTop: "-1rem" }}>
              <CiLinkedin />
            </h5>

            <img
              src={dtpurva}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "-3rem", marginTop: "-28rem" }}
            />
            <h5 style={{ marginLeft: "1rem", marginTop: "-20rem" }}>
              <CiLinkedin />
            </h5>
            <h6 style={{ marginLeft: "0.5rem", marginTop: "-4rem" }}>
              Purva Diwate
            </h6>
            <p style={{ marginLeft: "1rem", marginTop: "-1rem" }}>Developer</p>

            <img
              src={dtmansi}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "-3rem", marginTop: "-33rem" }}
            />
            <h6 style={{ marginLeft: "4.8rem", marginTop: "-25rem" }}>
              Mansi Sonawane
            </h6>
            <p style={{ marginLeft: "4rem", marginTop: "-0.50rem" }}>
              Developer
            </p>
            <h5 style={{ marginLeft: "3rem", marginTop: "-1rem" }}>
              <CiLinkedin />
            </h5>

            <img
              src={dtpiyush}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "7rem", marginTop: "-30rem" }}
            />
            <h5 style={{ marginLeft: "18rem", marginTop: "-20rem" }}>
              <CiLinkedin />
            </h5>
            <h6 style={{ marginLeft: "16rem", marginTop: "-.50rem" }}>
              Piyush Rajendra
            </h6>
            <p style={{ marginLeft: "16rem", marginTop: "-0.50rem" }}>
              Developer
            </p>

            {/*INNER CIRCLE */}
            <img
              src={dtsavita}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "24rem", marginTop: "1rem" }}
            />
            <h5 style={{ marginLeft: "31rem", marginTop: "-2rem" }}>
              <CiLinkedin />
            </h5>
            <h6 style={{ marginLeft: "31rem", marginTop: "-.50rem" }}>
              Savita Hazare
            </h6>
            <p style={{ marginLeft: "31rem", marginTop: "-0.50rem" }}>
              Developer
            </p>

            <img
              src={dtmaheshm}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "40rem", marginTop: "-16.5rem" }}
            />
            <h5 style={{ marginLeft: "46rem", marginTop: "-6rem" }}>
              <CiLinkedin />
            </h5>
            <h6 style={{ marginLeft: "43rem", marginTop: "-.50rem" }}>
              Mahesh Mhaske
            </h6>
            <p style={{ marginLeft: "44rem", marginTop: "-0.50rem" }}>
              Developer
            </p>

            <img
              src={dtpayal}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "11rem", marginTop: "-1rem" }}
            />
            <h6 style={{ marginLeft: "18rem", marginTop: "-10rem" }}>
              Payal Patil
            </h6>
            <p style={{ marginLeft: "18rem", marginTop: "-0.50rem" }}>
              Developer
            </p>
            <h5 style={{ marginLeft: "19rem", marginTop: "-1.5rem" }}>
              <CiLinkedin />
            </h5>

            <img
              src={dtpratiksha}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "50rem", marginTop: "-4rem" }}
            />
            <h5 style={{ marginLeft: "54rem", marginTop: "-0.5rem" }}>
              <CiLinkedin />
            </h5>
            <h6 style={{ marginLeft: "47rem", marginTop: "-1rem" }}>
              Pratiksha Karwate
            </h6>
            <p style={{ marginLeft: "51rem", marginTop: "-0.50rem" }}>
              Developer
            </p>

            <img
              src={dtvikas}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "10rem", marginTop: "1rem" }}
            />
            <h6 style={{ marginLeft: "14rem", marginTop: "-13rem" }}>
              Vikas Wagh
            </h6>
            <p style={{ marginLeft: "14rem", marginTop: "-0.50rem" }}>
              Developer
            </p>
            <h5 style={{ marginLeft: "14rem", marginTop: "-1rem" }}>
              <CiLinkedin />
            </h5>

            <img
              src={dtrupali}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "49rem", marginTop: "1rem" }}
            />
            <h5 style={{ marginLeft: "50rem", marginTop: "-2rem" }}>
              <CiLinkedin />
            </h5>
            <h6 style={{ marginLeft: "45rem", marginTop: "-1rem" }}>
              Rupali Patil
            </h6>
            <p style={{ marginLeft: "45rem", marginTop: "-0.50rem" }}>
              Developer
            </p>

            <img
              src={dtvivek}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "20rem", marginTop: "-1rem" }}
            />
            <h6 style={{ marginLeft: "18rem", marginTop: "-13rem" }}>
              Vivek patil
            </h6>
            <p style={{ marginLeft: "19rem", marginTop: "-0.50rem" }}>
              Developer
            </p>
            <h5 style={{ marginLeft: "21rem", marginTop: "-1rem" }}>
              <CiLinkedin />
            </h5>

            <img
              src={dtvivek}
              width={"150rem"}
              height={"150rem"}
              style={{ marginLeft: "34rem", marginTop: "0rem" }}
            />
            <h6 style={{ marginLeft: "31rem", marginTop: "-9rem" }}>
              Vivek patil
            </h6>
            <p style={{ marginLeft: "31rem", marginTop: "-0.50rem" }}>
              Developer
            </p>
            <h5 style={{ marginLeft: "33.5rem", marginTop: "-1rem" }}>
              <CiLinkedin />
            </h5>
          </div>
        </div>
        {/*Development team  DESKTOP view ends here*/}

        {/*Development team  Mobile view starts here*/}
        <div className="container grp-cards">
          <div className="row main mt-md-4 mt-sm-5 mt-1">
            <div className="col-md-3 col-6 d-flex justify-content-center mt-sm-4">
              <div className="profile-card">
                <div className="img">
                  <img src={dtmahesh} />
                </div>
                <div className="caption">
                  <h3>Mahesh Mahajan</h3>
                  <p>Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card me-2">
                <div className="img">
                  <img src={dtakshada} />
                </div>
                <div className="caption">
                  <h3>Akshada Sanap</h3>
                  <p>Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card">
                <div className="img">
                  <img src={dtrutuja} />
                </div>
                <div className="caption">
                  <h3>Rutuja Patil</h3>
                  <p>Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card me-2">
                <div className="img">
                  <img src={dtshubham} />
                </div>
                <div className="caption">
                  <h3>Shubham Kothavade</h3>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row main mt-md-4 mt-0">
            <div className="col-md-3 col-6 d-flex justify-content-center">
              <div className="profile-card">
                <div className="img">
                  <img src={dtrajnandini} />
                </div>
                <div className="caption">
                  <h3>Rajnandini Rajput</h3>
                  <p>Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card me-2">
                <div className="img">
                  <img src={dtmitisha} />
                </div>
                <div className="caption">
                  <h3>Mitisha patel</h3>
                  <p>Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card">
                <div className="img">
                  <img src={dtaditi} />
                </div>
                <div className="caption">
                  <h3>Aditi Sonawane</h3>
                  <p>Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center col-6">
              <div className="profile-card me-2">
                <div className="img">
                  <img src={dtpurva} />
                </div>
                <div className="caption">
                  <h3>Purva Diwate</h3>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination text-danger justify-content-center mt-3">
              <li class="page-item ">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/*Training team section starts here */}
        <div class="container">
          <div class="container">
        <div className="text-center mb-5">
          <h2 className="mt-1">TRAINING TEAM</h2>
          <div className="d-flex justify-content-center">
            <hr className=" text-white w-25 text-center"></hr>
          </div>
          <h2>
            "We believe in{" "}
            <span className="text-danger">
              Helping
              <br />
            </span>{" "}
            people pay <span className="text-danger"> Attention</span> to what
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
                    // style={{ width: "14rem" }}
                  >
                    <center>
                      <img
                        src={dtamol}
                        className="card-img-top pro-image img-fluid"
                        alt="..."
                      />
                    </center>
                    <div className="card-body" style={{ height: "5rem" }}>
                      <h5 className="card-title training-card-title ">
                      <FaLinkedin/><br/>
                        Amol Pawar
                      
                      <p className="card-title training-card-title ">
                        L&D Head
                      </p>
                      </h5>
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
                            src={dtpratikshat}
                            className="card-img-top pro-image"
                            alt="..."
                          />
                        </center>
                        <div className="card-body">
                          <h5 className="card-title training-card-title ">
                          <FaLinkedin/><br/>
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
                            src={dtshwetat}
                            className="card-img-top pro-image"
                            alt="..."
                          />
                        </center>
                        <div className="card-body">
                          <h5 className="card-title training-card-title ">
                          <FaLinkedin/><br/>
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
                            src={dtmahesht}
                            className="card-img-top pro-image"
                            alt="..."
                          />
                        </center>
                        <div className="card-body">
                          <h5 className="card-title training-card-title ">
                          <FaLinkedin/><br/>
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
                            src={dtvikast}
                            className="card-img-top pro-image"
                            alt="..."
                          />
                        </center>
                        <div className="card-body">
                          <h5 className="card-title training-card-title ">
                          <FaLinkedin/><br/>
                            Vikas Wagh
                          </h5>
                          <p>Trainer</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <div className="mx-auto ">
                      <div
                        className="card training-card bgc"
                        style={{ width: "15rem" }}
                      >
                        <center>
                          <img
                            src={dtaakash}
                            className="card-img-top pro-image"
                            alt="..."
                          />
                        </center>
                        <div className="card-body">
                          <h5 className="card-title training-card-title ">
                          <FaLinkedin/><br/>
                            Aakash Rajput
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
                          <FaLinkedin/><br/>
                            Shruti Pardeshi
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
        </div>
        </div>
        
        {/*Training team section ends here */}

        <div class="container text-start text-light bg-rgb(20, 20,20) mb-3">
          <div class="row mt-5">
            <div class="col-md-6 ">
              <h3 className="d-md-none d-block mb-3">Success Stories</h3>

              <h1 className=" d-md-none d-block mb-3">Our Achievements</h1>
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img
                    src={group_img}
                    alt=""
                    width="400rem"
                    className="img-fluid"
                  />{" "}
                </a>
              </div>
            </div>

            <div class="col-md-6  mt-4">
              <h4 className="d-md-block d-none">Success Stories</h4>
              <h1 className=" d-md-block d-none">Our Achievements</h1>
              <br />
              <p>
                Lorem ipsum is simply dummy text of the printing
                <br />
                and typesetting industry.Lorem ipsum is simply
                <br />
                dummy text of the printing and typesetting industry.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutuspage;
