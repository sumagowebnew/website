import React from 'react'
import miro from '../Life/LifeImages/miro.png'
import women from '../Life/LifeImages/women.png'
import build from '../Life/LifeImages/build.png'
import dell from '../Life/LifeImages/dell.png'
import award from '../Life/LifeImages/award.png'
import mann from '../Life/LifeImages/mann.png'
import team from '../Life/LifeImages/team.png'
import lead from '../Life/LifeImages/lead.png'
import leader from '../Life/LifeImages/leader.png'
import key from '../Life/LifeImages/key.png'
import world from '../Life/LifeImages/world.png'
import co from '../Life/LifeImages/co.png'
import work from '../Life/LifeImages/work.png'
import hand from '../Life/LifeImages/hand.png'
import goal from '../Life/LifeImages/goal.png'

import Img from '../Life/LifeImages/Img.png'
import Img2 from '../Life/LifeImages/Img2.png'
import image1 from '../Life/LifeImages/image1.png'
import { AiOutlineRightCircle } from "react-icons/ai";



export default function Life() {
  return (
    <>
      {/* life */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="col-md-6 text-white">
              <h6>Events....... </h6>
              <h2> Our Moments</h2>
              <p>It Takes a lot of hard to make something simple, to truly  understand the underlying
                challenges and come up with  elegant solutions</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mt-5 d-flex justify-content-space-between">
              <div className="img-fluid">
                <img className='img-Group ms-md-5' src={miro} alt="" />

              </div>
              <div className="img-fluid">
                <img className='img-Group ms-md-4' src={women} alt="" />
              </div>
              <div className="img-fluid">
                <img className='img-Group' src={mann} alt="" />
              </div>

            </div>
            <div className="mt-2 d-flex justify-content-space-between">
              <div className="img-fluid">
                <img className='img-Group ms-md-5 ' src={dell} alt="" />

              </div>
              <div className="img-fluid">
                <img className='img-Group ms-md-4' src={miro} alt="" />
              </div>
              <div className="img-fluid">
                <img className='img-Group' src={build} alt="" />
              </div>
            </div>
            <div className="mt-2 d-flex justify-content-space-between">
              <div className="img-fluid">
                <img className='img-Group ms-md-5' src={lead} alt="" />

              </div>
              <div className="img-fluid">
                <img className='img-Group ms-md-4 ' src={women} alt="" />
              </div>
              <div className="img-fluid">
                <img className='img-Group' src={miro} alt="" />
              </div>

            </div>
          </div>
        </div>
        {/* latestblogs */}
        <div className="row text-center mb-5 mt-5">

          <h6>Lates Blogs</h6>
          <div className="">
                        <hr className='d-flex-text-align-center ' style={{ margin: "0 auto", width: "5rem" }}></hr>
                    </div>
          <h2>Trendings On Our Blogs</h2>
          <div className="col-md-12 mt-1 d-flex justify-content-end">
          <button type="button" class="btn btn-outline-danger">View More <AiOutlineRightCircle /></button>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col ">
              <div class="card bg-transparent text-start img-fluid ">
                <img src={world} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Blog Title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-transparent text-start img-fluid ">
                <img src={key} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Blog Title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-transparent text-start img-fluid">
                <img src={leader} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Blog Title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Awards  */}

        <div className="row mt-5">
          <div className="col-md-6 d-flex justify-content-center img-fluid">
            <img className='img-Group' src={award} alt="" height='80%' />
          </div>
          <div className="col-md-6 text-start">
            <h6>Success Stories________</h6>
            <h2>Awards</h2>
            <div className='d-flex justify-content-center'>
              <p >Lorem ipsum dolor is sapiente odit doloribus harum error voluptatem? Totam ex delectus quae perspiciatis odio distinctio ratione. Expedita minus sunt veniam? Aperiam quam voluptatibus praesentium optio nesciunt impedit nemo veniam, vitae voluptate, incidunt dolor porro mollitia fugit natus molestiae vero corporis animi autem aut ratione voluptates! Ratione assumenda praesentium debitis, commodi placeat, dolore reiciendis esse doloremque reprehenderit quaerat ducimus. Labore tempore est voluptatibus aperiam commodi delectus asperiores odio repellendus, consequuntur totam qui dolore fugiat minus deleniti explicabo praesentium, veniam error dicta blanditiis dolores cupiditate. Dolorum dolorem molestiae aut, vel rem saepe vitae nam, sit ipsa minus animi ducimus debitis odit, facere unde qui cum explicabo tempore laudantium placeat amet! Est eligendi qui ipsa a, eius neque eveniet nulla itaque ducimus esse, odit adipisci.</p>
            </div>

          </div>
        </div>


        <div className='text-center'>
          <h4> Portfolio</h4>
          <nav class="navbar navbar-expand-lg  text-center  mt-2">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mx-auto ">
                <li class="nav-item d-block">
                  <a class="nav-link active text-light" aria-current="page" href="#">All</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Events</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Awards</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Media</a>
                </li>

              </ul>
            </div>
          </nav>

        </div>
        <div className="d-flex justify-content-space-evenly mb-5 mt-5">
          <div className="ms-md-3">
            <div className="mb-3 img-fluid ">
              <img className='img-Group ms-md-5' src={team} alt="" />
            </div>
            <div className="mb-3 img-fluid">
              <img className='img-Group ms-md-5' src={co} alt="" />

            </div>
            <div className="mt-1 img-fluid">
              <img className='img-Group ms-md-5' src={hand} alt="" />

            </div>
          </div>
          <div className="">
            <div className="mb-2 img-fluid">
              <img className='img-Group ms-md-4 ' src={Img} alt=""  />
            </div>
            <div className="mb-2 img-fluid">
              <img className='img-Group ms-md-4 ' src={team} alt="" />

            </div>
            <div className="mt-2 img-fluid">
              <img className='img-Group ms-md-4' src={work} alt="" />

            </div>
          </div>
          <div className="">
            <div className="mb-2 img-fluid">
              <img className='img-Group' src={goal} alt="" />
            </div>
            <div className="mb-2 img-fluid">
              <img className='img-Group' src={Img2} alt="" />
            </div>
            <div className="img-fluid">
              <img className='img-Group' src={image1} alt="" />

            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
