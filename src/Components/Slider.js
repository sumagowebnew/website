import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "./slider/Group 3171.png";
import image2 from "./slider/Group 3172 (1).png";
import image3 from "./slider/Group 3173.png";
import image4 from "./slider/Group 3174.png";
import image5 from "./slider/Group 3175.png";
import { AiOutlineRightCircle } from "react-icons/ai";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
export default function Slider() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [typeOfServices, setTypeOfServices] = useState("");
  const [other, setOther] = useState("");
  const [city, setCity] = useState("");
  const [comment, setComment] = useState("");

  const SubmitData = (e) => {
    e.preventDefault();
    let newData = {
      name: name,
      contact: contact,
      email: email,
      typeOfServices: typeOfServices,
      other: other,
      city: city,
      comment: comment,
    };
    console.log("newData", newData);
    axios
      .post("http://localhost/main-main/main/getAquote/add", newData)
      .then((resp) => {
        console.log("resp", resp.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
    setName("");
    setEmail("");
    setContact("");
    setTypeOfServices("");
    setOther("");
    setCity("");
    setComment("");
  };
  return (
    <>
      <div className="ms-4">
        <div class="col-md-6  mt-4 mb-4 d-flex flex-column align-items-start">
          <h5 className="d-md-block d-none text-light">We Work On...</h5>
          <h1 className="text-danger">Technology</h1>
        </div>
      </div>
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={1000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              paritialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              paritialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              paritialVisibilityGutter: 30,
            },
          }}
          // showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <img src={image1} alt="image1" className="img-fluid" width="75%" />
          <img src={image2} alt="image2" className="img-fluid" width="75%" />
          <img src={image3} alt="image3" className="img-fluid" width="75%" />
          <img src={image4} alt="image4" className="img-fluid" width="75%" />
          <img src={image5} alt="image5" className="img-fluid" width="75%" />
        </Carousel>
      </div>

      <div className="d-flex justify-content-evenly mid-divi mt-4">
        <h3 className="text-light p-4">
          Sumago infotech provides the <br /> smart solution for your business.
        </h3>
        <div className="d-flex align-items-center">
          <button
            type="button"
            class="btn btn-danger btn-sm"
            style={{ backgroundColor: "#E21818" }}
            onClick={handleShow}
          >
            Get Quote <AiOutlineRightCircle />
          </button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={SubmitData}>
            <Modal.Header closeButton>
              <Modal.Title className="text-dark fw-bold">Get Quote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="mb-3 ">
                <label
                  for="exampleFormControlInput1"
                  className="form-label text-dark fw-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="enter your name here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label text-dark fw-500"
                >
                  Contact
                </label>
                <input
                  type="number"
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="ex. 90xxxxxx"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label text-dark fw-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control "
                  placeholder="test@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label text-dark fw-500"
                >
                  Type Of Services
                </label>
                <input
                  type="text"
                  className="form-control text-dark fw-500"
                  id="exampleFormControlInput1"
                  placeholder="services"
                  value={typeOfServices}
                  onChange={(e) => setTypeOfServices(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label text-dark fw-500"
                >
                  Other
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="other"
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label text-dark fw-500"
                >
                  City
                </label>
                <input
                  type="text"
                  className="form-control text-dark fw-500"
                  id="exampleFormControlInput1"
                  placeholder="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label text-dark fw-500"
                >
                  Comment
                </label>
                <textarea
                  class="form-control text-dark fw-500"
                  id="exampleFormControlTextarea1"
                  placeholder="any comment"
                  rows="3"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}
