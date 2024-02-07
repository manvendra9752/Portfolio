import React, { Fragment } from "react";
import { BsLaptop } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

function MyWork() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls1"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/wheatherapp.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>

                <span className="visually-hidden">Next</span>
              </div>
              <h5 className="ff-jose my-1">Weather App</h5>
              <div className="row d-flex justify-content-center">
                <a
                  href="https://main--harmonious-conkies-c685e7.netlify.app/"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <BsLaptop /> Watch Live
                </a>
                <a
                  href="https://github.com/manvendra9752/WheatherForcast"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <AiFillGithub /> Source Code
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 text-center my-2">
                <div
                  id="carouselExampleControls1"
                  className="carousel slide my-1"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="../portfolio-images/towerofhanoi.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>

                  <span className="visually-hidden">Next</span>
                </div>
                <h5 className="ff-jose my-1">Tower of hanoi</h5>
                <div className="row d-flex justify-content-center">
                  <a
                    href="https://tower-of-hanoi-alpha.vercel.app/"
                    className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                    target="_blank"
                  >
                    <BsLaptop /> Watch Live
                  </a>
                  <a
                    href="https://github.com/manvendra9752/towerofhanoi"
                    className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                    target="_blank"
                  >
                    <AiFillGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls2"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/Platform.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>

                  <span className="visually-hidden">Next</span>
                </div>
                <div>
                  <h5 className="ff-jose my-1">Platform design</h5>
                  <div className="row d-flex justify-content-center">
                    <a
                      href="https://peppy-sunburst-effa6e.netlify.app"
                      className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                      target="_blank"
                    >
                      <BsLaptop /> Watch Live
                    </a>
                    <a
                      href="https://github.com/manvendra9752/Msctechnical"
                      className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                      target="_blank"
                    >
                      <AiFillGithub /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center my-2">
            <div
              id="carouselExampleControls2"
              className="carousel slide my-1"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="../portfolio-images/countdown.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>

                <span className="visually-hidden">Next</span>
              </div>
              <div>
                <h5 className="ff-jose my-1">Platform design</h5>
                <div className="row d-flex justify-content-center">
                  <a
                    href="https://msctechnical.vercel.app/"
                    className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                    target="_blank"
                  >
                    <BsLaptop /> Watch Live
                  </a>
                  <a
                    href="https://github.com/manvendra9752/eventmanager"
                    className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                    target="_blank"
                  >
                    <AiFillGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyWork;
