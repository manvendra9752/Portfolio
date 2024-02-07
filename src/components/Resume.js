import React, { Fragment } from "react";
import {
  SiCodechef,
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodingninjas,
} from "react-icons/si";

function Resume() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Manvendra Chouhan</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EXPERIENCE</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">Web developer</h4>
                  <h6 className="blue-label px-2 py-1">
                    11 Nov 2023 - 11 Dec 2023
                  </h6>
                  <p className="m-0">CodeCasa · Internship</p>
                  <p>Remote</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    B.TECH - Computer Science
                  </h4>
                  <h6 className="blue-label px-2 py-1">2021 - 2025</h6>
                  <p className="m-0">
                    Indore Institute Of Science And Technology
                  </p>
                  <p>Current CGPA: 7.94</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Higher Secondary School
                  </h4>
                  <h6 className="blue-label px-2 py-1">2020-21</h6>
                  <p className="m-0">GreenLand Educational Academy Karnawad</p>
                  <p>Grade: 87 %</p>
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4 className="ff-jose ls-2">CERTIFICATES</h4>
              <ul>
                <li>
                  <a href="https://coursera.org/share/86896881be1a776b85cf2a9e549c1474">
                    IBM Developing Front-End Apps with React
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://coursera.org/share/845df27ad99b72a92cce63e6980ef085">
                    IBM Developing Back-end Apps with Nodejs and Expressjs
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://coursera.org/share/13460617c2d1561c1bead27d0102b28f">
                    IBM Web Development with HTML, CSS, JavaScript
                  </a>
                </li>
                <li>
                  <a href="https://courses.edx.org/certificates/96b28110513c46389f58a46b4dfa1906">
                    EDX Html Css JavaScript
                  </a>
                </li>
                <li>
                  <a href="https://courses.edx.org/certificates/3f085d8f6e3941af914404a54d71436a">
                    EDX Cyber Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">PROFILE</h4>
              <h1>
                <a
                  href="https://www.codechef.com/users/manvendra9752"
                  target="/blank"
                  className="text-white text-decoration-none mx-4"
                >
                  <SiCodechef className="zoom-on-hover" />
                </a>
                <a
                  href="https://leetcode.com/manvendra9752/"
                  target="/blank"
                  className="text-white text-decoration-none mx-4"
                >
                  <SiLeetcode className="zoom-on-hover" />
                </a>
                <a
                  href="https://auth.geeksforgeeks.org/user/manvendrac30rj/"
                  target="/blank"
                  className="text-white text-decoration-none mx-4"
                >
                  <SiGeeksforgeeks className="zoom-on-hover" />
                </a>

                <a
                  href="https://www.codingninjas.com/studio/profile/manvendra9752"
                  target="/blank"
                  className="text-white text-decoration-none mx-4"
                >
                  <SiCodingninjas className="zoom-on-hover" />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
