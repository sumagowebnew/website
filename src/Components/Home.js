import React, { useState } from "react";
import grp_img from "./images/Frame with photo.png";
import group_img from "./images/Img2.png";
import grp_img1 from "./photos/grp2.png";
import imp from "./images/Group 3091.png";
import CountUp from "react-countup";
import { AiOutlineRightCircle } from "react-icons/ai";
import "../Components/Home.css";
import data from "./data";
import Slider from "./Slider";
import data1 from "./data1";
import facebook from "./socialmedia/fb 3d.png";
import insta from "./socialmedia/insta 3d.png";
import link from "./socialmedia/linkedin 3d 1.png";
import youtube from "./socialmedia/youtube 3d.png";
export default function Home() {
  const [count, setCount] = useState(0);
  const maxCount = 100;

  const IncreaseCount = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  return (
    <>
    <div className="align">
      <div className="row">
        <div className="col-2" style={{ marginTop: "10rem" }}>
          <div className="d-flex justify-content-start">
            <h6 className="text-light follow ms-2">Follow Us</h6>
          </div>
          <div className="vertical-line"></div>
          {/* <hr
            className="mt-5 d-flex align-self-start follow"
            style={{ color: "white", width: "5rem" }}
          /> */}
          <div className="d-flex flex-column">
            <a
              href="https://www.facebook.com/sumagoinfotech/"
              className="align-self-start"
            >
              <img
                src={facebook}
                className="img-fluid ms-4 mt-2"
                width="27.5rem"
              />
            </a>
            <a
              href="https://www.instagram.com/sumago_infotech/"
              className="align-self-start"
            >
              <img
                src={insta}
                className="img-fluid ms-4 mt-2"
                width="27.5rem"
              />
            </a>
            <a
              href="https://in.linkedin.com/company/sumago-infotech-pvt-ltd"
              className="align-self-start"
            >
              <img src={link} className="img-fluid ms-4 mt-2" width="27.5rem" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCoUCNHO1wXI92HnEmNtIkEg"
              className="align-self-start"
            >
              <img
                src={youtube}
                className="img-fluid ms-4 mt-2"
                width="27.5rem"
              />
            </a>
          </div>
        </div>
        <div className="col-10">
          <div class="container text-start text-light">
            <div class="row">
              <div class="col-md-6  mt-5">
                <h1> BETTER SOLUTIONS FOR YOUR BUSINESS</h1>
                <br />
                <p className="text-start">
                  Lorem ipsum is simply dummy text of the printing
                  <br />
                  and typesetting industry.Lorem ipsum is simply
                  <br />
                  dummy text of the printing and typesetting industry.
                </p>
                <br />
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  style={{ backgroundColor: "#E21818" }}
                >
                  Get Started <AiOutlineRightCircle />
                </button>
              </div>

              <div class=" col-md-6">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    <img
                      src={grp_img}
                      alt=""
                      width="400rem"
                      className="img-fluid"
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-start text-light bg-rgb(20, 20,20) mb-3">
        <div class="row mt-5">
          <div class="col-md-6 ">
            <h3 className="d-md-none d-block mb-3">Our Story...</h3>
            <h1 className=" d-md-none d-block mb-3 text-danger">
              About Sumago Infotech
            </h1>
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
            <h5 className="d-md-block d-none">Our Story...</h5>
            <h1 className="text-danger d-md-block d-none">
              About Sumago Infotech
            </h1>
            <br />
            <p>
              Lorem ipsum is simply dummy text of the printing
              <br />
              and typesetting industry.Lorem ipsum is simply
              <br />
              dummy text of the printing and typesetting industry.
            </p>
            <br />
            <button
              type="button"
              class="btn btn-danger btn-sm"
              style={{ backgroundColor: "#E21818" }}
            >
              Know More <AiOutlineRightCircle />
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-evenly mid-div p-3 mt-5">
        <div className="">
          <h3 className="text-light fs-1">
            <CountUp duration={15} end={100} />+
          </h3>
          <h6 className="text-light fs-4 mt-2"> Projects Completed</h6>
        </div>

        <div className="">
          <h3 className="text-light fs-1">
            <CountUp duration={5} end={10} />+
          </h3>
          <h6 className="text-light fs-4 mt-2"> Years Of Experience</h6>
        </div>
      </div>
      {/* -------------------------------------------------------------- */}

      <div className="mt-5">
        {/* <span className="fs-6 text-light">We work with you, Not for you</span> */}

        <span
          className="fs-1 text-danger"
          style={{ display: "block", marginTop: "-0.4em" }}
        >
          Our Services
        </span>

        <div className="d-flex justify-content-center">
          <hr
            className="w-25"
            style={{ color: "white", marginTop: "-0.4em" }}
          />
        </div>

        <span
          className="fs-3 text-light"
          style={{ display: "block", marginTop: "-0.6em" }}
        >
          We help your brand to grow
        </span>
      </div>
      {/* <h6 className="text-light">We work with you,Not for you</h6>

      <h1 className="text-danger">Our Services</h1>

      <div className="d-flex justify-content-center">
        <hr className="w-25" style={{ color: "white" }} />
      </div>

      <h3 className="text-light">We help your brand to grow</h3> */}

      <div className="row mt-5">
        {data.map((item, index) => {
          // console.log("item", item.pic);
          return (
            <div className="col-md-4  mb-4">
              <img className="img-fluid" src={item.pic} alt="" width="60%" />
              <h5 className="text-white mt-2"> {item.heading}</h5>
            </div>
          );
        })}
      </div>
      <div class="container text-start text-light bg-rgb(20, 20,20)">
        <div class="row">
          <div class="col-md-6  mt-5">
            <h2> We Are Experts,In Our Work!</h2>
            <br />
            <p>
              Lorem ipsum is simply dummy text of the printing
              <br />
              and typesetting industry.Lorem ipsum is simply
              <br />
              dummy text of the printing and typesetting industry.
            </p>
            <p>
              Lorem ipsum is simply dummy text of the printing
              <br />
              and typesetting industry.Lorem ipsum is simply
              <br />
              dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div class=" col-md-6">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src={grp_img1}
                  alt=""
                  width="400rem"
                  className="img-fluid"
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Slider />
      <div class="container text-start text-light">
        <div class="row">
          <div class="col-md-6  mt-5">
            <h6>Sumago Infotech...</h6>
            <h1>Contact Us Today!</h1>

            <p>
              Lorem ipsum is simply dummy text of the printing
              <br />
              and typesetting industry.Lorem ipsum is simply
              <br />
              dummy text of the printing and typesetting industry.
            </p>
            <br />
            <button type="button" class="btn btn-outline-danger">
              Contact Us Now <AiOutlineRightCircle />
            </button>
          </div>

          <div class=" col-md-6">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={imp} alt="" width="400rem" className="img-fluid" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-3"></div>
        <div className="row col-md-6">
          <div>
            <h6 className="text-light text-center">...Our Some...</h6>
            <h2 className="text-light text-center">Our Satisfied Clients</h2>
           
          </div>
          {data1.map((item) => {
            // console.log("item", item.img);
            return (
              <div className="col-md-4 mb-4 mt-4">
                <img className="img-fluid" src={item.img} alt="" width="100%" />
              </div>
            );
          })}
        </div>
        {/* <div className="col-md-3"></div> */}
      </div>
      </div>
    </>
  );
}
