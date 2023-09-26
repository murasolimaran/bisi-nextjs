"use client";
import React from "react";
var $ = require("jquery");
import Image from "next/image";
import slider1 from "/public/images/banner-slider1.png";
import slider2 from "/public/images/banner-slider1.png";
import slider3 from "/public/images/banner-slider1.png";

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  items: 1,
  nav: false,
  dots: true,
  mouseDrag: true,
  responsiveClass: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    769: {
      items: 1,
    },
  },
};

export default function Slider() {
  return (
    <div className="home-slider">
      <OwlCarousel
        className="owl-carousel owl-theme banner-owl-carousel"
        {...options}
      >
        <div className="item">
          <div class="banner-slider">
            <Image src={slider1} alt="Ocean" width={1600} height={450} />
            <div class="banner-content">
              <h4>
                Special Projects offers outstanding values in quality used
                equipment & exports worldwide!
              </h4>
              <a
                href="javascript:;"
                class="btn btn-outline-primary"
                title="Browse Inventory"
              >
                Browse Inventory
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="banner-slider">
            <Image src={slider2} alt="Ocean" width={1600} height={450} />
            <div class="banner-content">
              <h4>
                Special Projects offers outstanding values in quality used
                equipment & exports worldwide!
              </h4>
              <a
                href="javascript:;"
                class="btn btn-outline-primary"
                title="Browse Inventory"
              >
                Browse Inventory
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="banner-slider">
            <Image src={slider3} alt="Ocean" width={1600} height={450} />
            <div class="banner-content">
              <h4>
                Special Projects offers outstanding values in quality used
                equipment & exports worldwide!
              </h4>
              <a
                href="javascript:;"
                class="btn btn-outline-primary"
                title="Browse Inventory"
              >
                Browse Inventory
              </a>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
