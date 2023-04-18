import React from "react";
import Header from "./Header";
import grp_2 from "./industries/Group 2949.png";
import pic from "./industries/Healthcare.png";
import pic1 from "./industries/Finance.png";
import pic2 from "./industries/Retail1.png";
import Slider2 from "./Slider2";
import photo from "./industries/Rectangle 1636.png";
import pic3 from "./industries/Group 3314.png";
import './Industries.css';
export default function Industries() {
  return (
    <>
    <div className="align">
      <div className="mt-3">
        {/* <span className="fs-6 text-light">We work with you, Not for you</span> */}

        <span
          className="fs-6 text-white mb-3"
          style={{ display: "block", marginTop: "-0.4em" }}
        >
          Sumago Infotech
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
          ...Our Company Expertise...
        </span>
      </div>
      <div className="d-flex justify-content-space-around mt-4 mb-4">
        <div>
          <img src={pic} alt="pic" className="img-fluid" width="80%" />
          <h3>Healthcare</h3>
        </div>
        <div>
          <img src={pic1} alt="pic1" className="img-fluid" width="80%" />
          <h3>Finance</h3>
        </div>
        <div>
          <img src={pic2} alt="pic2" className="img-fluid" width="80%" />
          <h3 className="mt-md-4 mt-1">Retail</h3>
        </div>
      </div>

      <div class="container text-start text-light bg-rgb(20, 20,20)">
        <div class="row">
          <div class="col-md-6  mt-5">
            <h6> We Are Here For You ____________________</h6>

            <h2>Industry Specific Solutions And Services</h2>
            <br />
          <p>
              Lorem ipsum is simply dummy text of the printing
              <br />
              and typesetting industry.Lorem ipsum is simply dummy
              <br />
              text of the printing and typesetting industry.
              <br />
              Lorem ipsum is simply dummy text of the printing
              <br />
              and typesetting industry.
              <br />
              </p>
          </div>

          <div class=" col-md-6">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={grp_2} alt="" width="400rem" className="img-fluid" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row container ms-md-5 ms-0">
        <div className="col-md-2">
          <img className="img-fluid" src={photo} alt="" />
          <h6>Lorem Ipsum</h6>
        </div>
        <div className="col-md-2">
          <img className="img-fluid" src={photo} alt="" />
          <h6>Lorem Ipsum</h6>
        </div>
        <div className="col-md-2">
          <img className="img-fluid" src={photo} alt="" />
          <h6>Lorem Ipsum</h6>
        </div>
        <div className="col-md-2">
          <img className="img-fluid" src={photo} alt="" />
          <h6>Lorem Ipsum</h6>
        </div>
        <div className="col-md-2">
          <img className="img-fluid" src={photo} alt="" />
          <h6>Lorem Ipsum</h6>
        </div>
        <div className="col-md-2">
          <img className="img-fluid" src={photo} alt="" />
          <h6>Lorem Ipsum</h6>
        </div>
      </div>

      <Slider2 />

      <div className="mt-3">
        {/* <span className="fs-6 text-light">We work with you, Not for you</span> */}

        <span
          className="fs-6 text-white mb-3"
          style={{ display: "block", marginTop: "-0.4em" }}
        >
          Sumago Infotech
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
          Case Studies
        </span>
      </div>
      <div className="d-flex justify-content-space-around mt-4 mb-4">
        <div>
          <img src={pic3} alt="pic" className="img-fluid" width="80%" />
        </div>
        <div>
          <img src={pic3} alt="pic1" className="img-fluid" width="80%" />
        </div>
        <div>
          <img src={pic3} alt="pic2" className="img-fluid" width="80%" />
        </div>
        <div>
          <img src={pic3} alt="pic2" className="img-fluid" width="80%" />
        </div>
      </div>
      </div>
    </>
  );
}
