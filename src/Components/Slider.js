import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from './slider/Group 3171.png';
import image2 from './slider/Group 3172 (1).png';
import image3 from './slider/Group 3173.png';
import image4 from './slider/Group 3174.png';
import image5 from './slider/Group 3175.png';
import { AiOutlineRightCircle } from "react-icons/ai";
export default function Slider() {
  return (
    <>
    <div className='ms-4'>
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
            min: 1024
         },
         items: 5,
         paritialVisibilityGutter: 40
      },
      mobile: {
         breakpoint: {
            max: 464,
            min: 0
         },
         items: 1,
         paritialVisibilityGutter: 30
      },
      tablet: {
         breakpoint: {
            max: 1024,
            min: 464
         },
         items: 2,
         paritialVisibilityGutter: 30
      }
   }}
  // showDots
   sliderClass=""
   slidesToSlide={1}
   swipeable
>
   <img src={image1} alt="image1" className='img-fluid' width="75%"/>
   <img src={image2} alt="image2" className='img-fluid' width="75%" />
   <img src={image3} alt="image3"  className='img-fluid' width="75%"/>
   <img src={image4} alt="image4"  className='img-fluid' width="75%"/>
   <img src={image5} alt="image5"  className='img-fluid' width="75%"/>
   
</Carousel>

    </div>

    <div className="d-flex justify-content-evenly mid-divi mt-4">
        
          <h3 className="text-light p-4">Sumago infotech provides the <br/> smart solution for your business.
          </h3>
          <div className="d-flex align-items-center">
          
          <button type="button" class="btn btn-danger btn-sm"style={{backgroundColor:"#E21818"}}>
              Know More <AiOutlineRightCircle />
            </button>
  
          
          </div>
          
    </div>
    </>
  )
}
