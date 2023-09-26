import React from "react";
import Image from "next/image";
import phoneicon from "/public/images/phone_icon.svg";
import mailicon from "/public/images/mail_icon.png";
import IframeMap from "../../components/IframeMap";
import ContactForm from "../../components/ContactForm";

function contact() {
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
                      <li class="breadcrumb-item active" aria-current="page">
                        Contact
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div>
                  <h4 class="contact-header">Contact Us</h4>
                  <ContactForm />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div>
                  <h4 class="contact-header">Address</h4>
                  <div class="contact-details-block">
                    <address>
                      <p>
                        Special Projects International , Inc.
                        <br />
                        1720 West Lee St <br />
                        Louisville, KY 40210
                      </p>
                    </address>
                    <ul>
                      <li>
                        <a href="tel:502 778 3883" title="502-778-3883">
                          <Image src={phoneicon} alt="Recaptcha" />
                          502-778-3883
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:sales@specialprojects.com"
                          title=" sales@specialprojects.com"
                        >
                          <Image src={mailicon} alt="Recaptcha" />
                          sales@specialprojects.com
                        </a>
                      </li>
                    </ul>
                    <p class="info-open-text">
                      Open Monday through Friday, 8 AM to 5 PM EST
                    </p>
                    <div class="contact-map-block">
                      <h4>Visit our warehouse</h4>
                      <div class="contact-map-frame">
                        <IframeMap />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default contact;
