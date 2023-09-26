import Image from "next/image";
import styles from "./page.module.css";
import Slider from "../components/Homeslider";

export default function Home() {
  return (
    <>
      <main class="main-container">
        <section class="">
          <div class="container-fluid px-0">
          <Slider />
          </div>
        </section>
        <section class="section-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="text-center main-header">
                  <span class="text-primary">What we do</span>
                  <h1>Special Projects International</h1>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12 mb-25">
                <div class="card project-card">
                  <div class="card-body">
                    <span class="icon icon-card1"></span>
                    <h4>Used Industrial Equipment</h4>
                    <p>
                      Browse our used industrial equipment inventory online
                      orvisit our 110,000 square foot warehouse conveniently
                      located in Louisville, KY just minutes from Louisville
                      International Airport.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12 mb-25">
                <div class="card project-card">
                  <div class="card-body">
                    <span class="icon icon-card2"></span>
                    <h4>We Buy Used Equipment</h4>
                    <p>
                      Special Projects purchases single items or entire plants.
                      Salvaged equipment can be applied as credit to help keep
                      your plant renovation costs low.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="card project-card">
                  <div class="card-body">
                    <span class="icon icon-card3"></span>
                    <h4>Rigging & Industrial Dismantling</h4>
                    <p>
                      We can help you meet your deadline with minimal disruption
                      to your operations. Our dismantling team offers
                      outstanding experience, reliability and safety!
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="card project-card">
                  <div class="card-body">
                    <span class="icon icon-card4"></span>
                    <h4>We Export Internationally!</h4>
                    <p>
                      Special Projects offers outstanding values in quality used
                      equipment and exports worldwide!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-wrapper">
          <div class="container">
            <div class="row align-items-center bg-primary info-box bg-new">
              <div class="col-lg-8 col-md-12 col-12">
                <p>Since 1986</p>
                <h5>Quality Used Packaging and Processing Equipment</h5>
              </div>
              <div class="col-lg-4 col-md-12 col-12 text-end">
                <a href="javascript:;" class="btn btn-secondary">
                  Contact Us Now!
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="section-wrapper buy-now-sectioon">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="text-left">
                  <h3 class="text-primary">Specials</h3>
                  <p>These items are offered for immediate sale.</p>
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
                        SPC-6212 Miscellaneous Equipment miscellaneous, concrete{" "}
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
                        SPC-5425 Material Handling Equipment 1500 lbs capacity
                        Econ
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
                        SSPC-5715 MaterialHandling Equipment drumdumper, 55
                        gallon
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
                        SPC-5425 Material Handling Equipment scissor lift table,
                        40
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
                    <h6 class="text-primary">$275.00</h6>
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
                        SPC-5425 Material Handling Equipment scissor lift table,
                        40
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
                  <div class="card-body px-0">
                    <a
                      href="./list-page.html"
                      class="text-primary see-all-link menu-hover"
                      title="See all Specials..."
                    >
                      See all <br />
                      Specials...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
