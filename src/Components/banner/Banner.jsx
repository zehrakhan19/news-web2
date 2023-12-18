import React from "react";
import "./Banner.css";
import { Button } from "@mui/material";
import Marquee from "react-fast-marquee";
import AdSection from "../google-ad-section/AdSection";

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="btn-container">
          <div className="breakingBtn">Breaking</div>
        </div>
        <div className="marqee-container">
          <Marquee className="marquee" pauseOnHover autoFill>
            <div className="content">
              <i className="fa-brands fa-pinterest"></i>
              <div>Latest News</div>
            </div>
          </Marquee>
        </div>
      </div>
      <AdSection />
    </div>
  );
};

export default Banner;
