import React from "react";
import Image from "next/image";
import recaptcha from "/public/images/captcha.png";

function ContactForm() {
  return (
    <>
      <div>
        <div class="contact-field-block">
          <form>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <label>First name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <label>Last name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <label>Email ID</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email ID"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <label>Confirm your Email ID</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Confirm your Email ID"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <label>Company name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Company name"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <label>Title</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Title</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <label>Phone</label>
                <input type="text" class="form-control" placeholder="Phone" />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <label>Fax</label>
                <input type="text" class="form-control" placeholder="Fax" />
              </div>
              <div class="col-12">
                <label>Address 1 </label>
                <input type="text" class="form-control" placeholder="Address" />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <label>City</label>
                <input type="text" class="form-control" placeholder="City" />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <label>State</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select State</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <label>Postal code</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Postal code"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <label>Country</label>
                <input type="text" class="form-control" placeholder="Country" />
              </div>
              <div class="col-12">
                <label>Address 2 </label>
                <input type="text" class="form-control" placeholder="Address" />
              </div>
              <div class="col-12">
                <label>Comments </label>
                <textarea
                  class="form-control"
                  placeholder="Comments"
                  rows="5"
                ></textarea>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <label>Rewrite characters from picture </label>
                <Image src={recaptcha} alt="Recaptcha" />
              </div>
              <div class="col-lg-6 col-md-6 col-12 captcha-field">
                <label></label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <button class="btn contact-form-submit-btn">
                  Submit form to SPI
                </button>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <button class="btn contact-form-submit-btn cancel-btn-contact">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
