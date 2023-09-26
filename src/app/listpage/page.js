import Productlist from "../../components/Productlist";
import Filter from "../../components/Filter";
import Image from "next/image";
import gridicon from "/public/images/grid_icon.svg";
import listicon from "/public/images/list_icon.svg";
import fullgridicon from "/public/images/fullgrid_icon.svg";

export default function listPage() {
  return (
    <>
      <div>
        <main class="main-container list-page-main">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-12">
                <Filter />
              </div>
              <div class="col-lg-9 col-md-9 col-12">
                <section>
                  <div class="breadcrumb-block">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">Used equipment</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="#">Material handling equipment</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          Data
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div class="list-page-header">
                    <h4>Used Material Handling Equipment</h4>
                    <p>
                      Material handling equipment is used to handle material
                      that is not practical to move by hand. Chain hoists,
                      scissor lift tables, and drum dumpers make holding work,
                      product, or material safer and easier. When selecting
                      material handling equipment, capacity and dimensions are
                      important features.
                    </p>
                  </div>
                  <div class="pagination-list-block">
                    <h4>
                      Results <span>1 - 30 of 49 items</span>
                    </h4>
                    <nav
                      class="pagination-product"
                      aria-label="Page navigation example"
                    >
                      <ul class="pagination">
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="list-icon-block">
                    <h4>View as</h4>
                    <ul>
                      <li>
                        <button class="btn" id="product-grid-btn">
                          <Image src={gridicon} alt="My SVG" />
                        </button>
                      </li>
                      <li>
                        <button class="btn" id="product-list-btn">
                          <Image src={listicon} alt="My SVG" />
                        </button>
                      </li>
                      <li>
                        <button class="btn" id="product-table-btn">
                          <Image src={fullgridicon} alt="My SVG" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </section>
                <section>
                  <Productlist />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
