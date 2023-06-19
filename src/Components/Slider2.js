import React, { useEffect } from "react";
import data2 from "./data2";
import axios from "axios";
export default function Slider2() {
  useEffect(() => {
    axios
      .get("")
      .then((resp) => {
        console.log("resp in client logo", resp);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return (
    <>
      <div className="mt-3">
        <span
          className="fs-5 text-white  mt-5 mb-2"
          style={{ display: "block", marginTop: "-0.4em" }}
        >
          Our Partnership
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
          Trusted Companies
        </span>
      </div>
      <div className="row mt-5">
        {data2.map((item, index) => {
          // console.log("item", item.pic);
          return (
            <div className="col-md-4 mb-4">
              <img className="img-fluid" src={item.pic} alt="" width="60%" />
              <h5 className="text-white mt-2"> {item.heading}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
}
