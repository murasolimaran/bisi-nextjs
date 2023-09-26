import React from "react";

function Productlist() {
  const listDetails = [
    {
      productImage: "/images/list-img1.png",
      productTitle:
        "SPC-5425 Material Handling Equipment 1500 lbs capacity Econ",
      productDesc:
        'Economy 1,500 lbs capacity lift-stacker. Lifter has a 54" lift and a 24"wide x 24" long platform. Model CW-54. Serial number 0035376. Runs on12 vdc batteries. Back cover is missing. (see more)',
      productPrice: "$575.00",
    },
    {
      productImage: "/images/list-img2.png",
      productTitle:
        "SPC-5425 Material Handling Equipment 1500 lbs capacity Econ",
      productDesc:
        '55 gallon drum dumper or drum flipper. This unit was used for cleaning out used 55 gallon drums in a drum cleaning operation. Drum dumper is on a 24" wide x 60" long roller conveyor.(see more)',
      productPrice: "$350.00",
    },
    {
      productImage: "/images/list-img3.png",
      productTitle: "SPC-6212 Miscellaneous Equipment miscellaneous, concrete ",
      productDesc:
        '5 cu ft steel drum concrete mixer. Concrete mixer is driven by a 1 hp 1750 rpm electric motor through gear drive, chain and sprocket combination. Steel drum has 18" diameter opening  (see more)',
      productPrice: "$750.00",
    },
    {
      productImage: "/images/list-img1.png",
      productTitle:
        "SPC-5425 Material Handling Equipment 1500 lbs capacity Econ",
      productDesc:
        'Economy 1,500 lbs capacity lift-stacker. Lifter has a 54" lift and a 24"wide x 24" long platform. Model CW-54. Serial number 0035376. Runs on12 vdc batteries. Back cover is missing. (see more)',
      productPrice: "$575.00",
    },
  ];
  return (
    <>
      <div>
        <div class="grid-view-block" id="product-grid">
          <div class="row">
            {listDetails.map((listDetail) => {
              return (
                <>
                  <div class="col-lg-4 col-md-6 col-12">
                    <div class="grid-view-card">
                      <div class="grid-img-block">
                        <img src={listDetail.productImage} />
                      </div>
                      <div class="list-view-details">
                        <div>
                          <h4>{listDetail.productTitle}</h4>
                          <p>{listDetail.productDesc}</p>
                        </div>
                        <div class="list-price-block">
                          <span>{listDetail.productPrice}</span>
                          <button class="btn">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div class="list-view-block" id="product-list">
          <ul>
            {listDetails.map((listDetail) => {
              return (
                <>
                  <li>
                    <div>
                      <img src={listDetail.productImage} />
                    </div>
                    <div class="list-view-details">
                      <div>
                        <h4>{listDetail.productTitle}</h4>
                        <p>{listDetail.productDesc}</p>
                      </div>
                      <div class="list-price-block">
                        <span>{listDetail.productPrice}</span>
                        <button class="btn">Buy Now</button>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div class="table-view-block" id="product-table">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Prize</th>
                </tr>
              </thead>
              <tbody>
                {listDetails.map((listDetail, index) => {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={listDetail.productImage}
                            alt="product image"
                          />
                        </td>
                        <td>
                          <h4>{listDetail.productTitle}</h4>
                        </td>
                        <td>
                          <p>{listDetail.productDesc}</p>
                        </td>
                        <td>
                          <span>{listDetail.productPrice}</span>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productlist;
