"use client";
import React from "react";
import Slider from "react-slick";

function Index() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "15px",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const productImages = [
    {
      imgUrl: "/images/list-img1.png",
    },
    {
      imgUrl: "/images/list-img2.png",
    },
    {
      imgUrl: "/images/list-img3.png",
    },
  ];

  return (
    <>
      <div>
        <main class="main-container section-container">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="breadcrumb-block">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="#">Used equipment</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="#">Material handling equipment</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="#">Drum Lift</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Contact
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div className="single-image-slider ">
                  <img
                    src="/images/list-img1.png"
                    className="img-fluid"
                    alt="product image"
                  />
                </div>
                <Slider {...settings}>
                  {productImages.map((imageurl) => {
                    return (
                      <>
                        <div className="slider slider-single">
                          <div className="slider-width">
                            <img
                              src={imageurl.imgUrl}
                              className="img-fluid"
                              alt="product image"
                            />
                          </div>
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="product-deatils-block">
                  <h4>
                    Material Handling Equipment 1500 lbs capacity Economy drum
                    lift model CW-54, 54&quot; lift height.
                  </h4>
                  <div>
                    <ul>
                      <li>
                        <p>Item</p>
                        <span>Material Handling Equipment</span>
                      </li>
                      <li>
                        <p>Stock No</p>
                        <span>5425</span>
                      </li>
                      <li>
                        <p>Model</p>
                        <span>CW-54</span>
                      </li>
                      <li>
                        <p>Type</p>
                        <span>Drum Liftt</span>
                      </li>
                      <li>
                        <p>Manufacturer</p>
                        <span>Economy</span>
                      </li>
                      <li>
                        <p>Material</p>
                        <span>NA</span>
                      </li>
                      <li>
                        <p>Description</p>
                        <span>
                          Economy 1,500 lbs capacity lift stacker. Lifter has a
                          54&quot; lift and a 24&quot; wide x 24&quot;long
                          platform. Model CW-54. Serial number 0035376. Runs on
                          12 vdc batteries. Back cover is missing.
                        </span>
                      </li>
                    </ul>
                    <div class="product-btn-block">
                      <button class="btn">Add to Quote cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <section class="section-wrapper buy-now-sectioon mt-5">
                  <div class="row">
                    <div class="col-12">
                      <div class="text-left product-similar-header">
                        <div>
                          <h3 class="text-primary">Similar products</h3>
                          <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <a href="#" class="menu-hover">
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="row py-5">
                    <div class="col-lg-4 col-md-6 col-12">
                      <div class="card">
                        <div class="card-img-block">
                          <img
                            class="card-img-top"
                            src="./images/card_img1.png"
                            alt="Card image"
                          />
                        </div>
                        <div class="card-body px-0">
                          <p class="card-text">
                            <span>
                              SPC-6212 Miscellaneous Equipment miscellaneous,
                              concrete{" "}
                            </span>
                            <a
                              href="javascript:;"
                              class="text-primary menu-hover"
                              title="View Details"
                            >
                              View Details
                            </a>
                          </p>
                        </div>
                        <div class="card-footer-row">
                          <h6 class="text-primary">$750.00</h6>
                          <a
                            href="javascript:;"
                            class="btn btn-primary"
                            title="Buy Now"
                          >
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div class="card">
                        <div class="card-img-block">
                          <img
                            class="card-img-top"
                            src="./images/card_img2.png"
                            alt="Card image"
                          />
                        </div>
                        <div class="card-body px-0">
                          <p class="card-text">
                            <span>
                              SPC-5425 Material Handling Equipment 1500 lbs
                              capacity Econ
                            </span>
                            <a
                              href="javascript:;"
                              class="text-primary menu-hover"
                              title="View Details"
                            >
                              View Details
                            </a>
                          </p>
                        </div>
                        <div class="card-footer-row">
                          <h6 class="text-primary">$575.00</h6>
                          <a
                            href="javascript:;"
                            class="btn btn-primary"
                            title="Buy Now"
                          >
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div class="card">
                        <div class="card-img-block">
                          <img
                            class="card-img-top"
                            src="./images/card_img1.png"
                            alt="Card image"
                          />
                        </div>
                        <div class="card-body px-0">
                          <p class="card-text">
                            <span>
                              {" "}
                              SSPC-5715 MaterialHandling Equipment drumdumper,
                              55 gallon
                            </span>
                            <a
                              href="javascript:;"
                              class="text-primary menu-hover"
                              title="View Details"
                            >
                              View Details
                            </a>
                          </p>
                        </div>
                        <div class="card-footer-row">
                          <h6 class="text-primary">$350.00</h6>
                          <a
                            href="javascript:;"
                            class="btn btn-primary"
                            title="Buy Now"
                          >
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        <section class="footer-info-section">
          <p>
            This is only a sample of our inventory. If you do not see what you
            are looking for here, call, fax, or email us, we may have it in
            stock or we may be able to find it thru our extensive list of
            contacts.
          </p>
          <p>
            We buy and sell machinery daily, therefore items listed are subject
            to withdrawal, change, and or prior sale without notice. Although we
            strive for complete accuracy, we cannot be responsible for errors in
            description, omissions,
          </p>
          <p>
            typographical errors, etc. We encourage your inspection of any
            equipment you wish to purchase. (map). All items are sold subject to
            Special Projects International`s standard Terms and Conditions
            applying.
          </p>
        </section>
      </div>
    </>
  );
}

export default Index;
