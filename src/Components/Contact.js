import React from "react";
import Header from "./Header";
import call from "./socialmedia/call 3d 1.png";
import mail from "./socialmedia/gmail 1.png";
import locate from "./socialmedia/location 3d 1.png";
import '../App.css'
import '../Components/Contact.css'
export default function Contact() {
  return (
    <>
      <div className=""style={{ marginTop: "7rem" }}>
      <div>
        <h2 className="text-light align">Get In Touch</h2>
      </div>
      <div className="row mt-5 ms-md-5 ms-0 container mb-5">
        <div className="col-lg-1 col-md-1"></div>
        <div className="col-lg-5 col-md-5 col-12 p-3 p-lg-5 p-md-3 back text-start rounded-3 image">
          <h3>Let's make something great!</h3>
       <p className=""style={{textAlign:"justify"}}>
            If you would like to find out more about what
            
            Sumago Infotech can do for your business or to
            
            receive a project quote,don't hesitate to contact us.
          </p>

          <div>
            <h4>Contact Us</h4>
          </div>
          <hr
            className="w-75"
            style={{ backgroundColor: "white"}}
          />

          {/* <div className="row">
            <div className="col-md-1 col-lg-1 col-1"><img src={call}className=""width="25rem"/></div>
            <div className="col-md-3 col-lg-3 col-3">Call Us:</div>
            <div className="col-md-7 col-lg-7 col-7">
              <div>+91 908 907 1245</div>
              <div>+91 9089071245</div>
              <div>+91 9089071245</div>
            </div>
          </div> */}

          <div className="d-flex justify-content-space-around ">
            <div className="">
              <img src={call} className="" width="36rem" />
            </div>
            <div className=""></div>
            <div className="ms-3">
              <div>+91 908 907 1245</div>
              <div>+91 908 907 1245</div>
              <div>+91 908 907 1245</div>
            </div>
          </div>

          <div className="d-flex justify-content-space-around mt-2">
            <div className="">
              <img src={mail} className="" width="25rem" />
            </div>
            <div className=""></div>
            <div className="ms-3">
              <p><a href="mailto:infotech@sumagoinfotech.com" class="link-underline-primary">info@sumagoinfotech.com</a></p>
              <p><a href="mailto:sumagoinfotech@gmail.com" class="link-underline-primary"> sumagoinfotech@gmail.com </a></p>
            </div>
          </div>

          <div className="d-flex justify-content-space-around mt-2">
            <div className="">
              <img src={locate} className="" width="25rem" />
            </div>
            <div className=""></div>
            <div className="ms-3">
              <div>
                3rd Floor, Gajra Chambers, Kamod Nagar, Indira Nagar, Near Hotel Sai
                Saya, Nashik-422009
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 mt-md-5">
          <h4>Drop us a line</h4>
          <input 
            class="form-control bg-transparent text-white "
            type="text" 
            placeholder="Your Name"
            aria-label="default input example"
          ></input>

          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label"></label>
            <input
              type="email"
              className="form-control bg-transparent text-white"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          <input
            class="form-control bg-transparent text-white"
            type="text"
            placeholder="Subject"
            aria-label="default input example"
          ></input>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"></label>
           <textarea
              class="form-control bg-transparent text-white"
              id="exampleFormControlTextarea1"
              placeholder="Message"
              rows="3"
            ></textarea>
          </div>
          <div className="d-flex justify-content-start">
            <button type="button" class="btn text-white" style={{backgroundColor:"#E21818"}}>
              Send Message
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
