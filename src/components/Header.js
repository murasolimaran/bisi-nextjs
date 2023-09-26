import Image from "next/image";
import mainLogo from "/public/images/spi-logo.png";

const Header = () => {
  return (
    <>
      <div>
        <header>
          <section className="navigation">
            <div className="nav-container">
              <div className="brand">
                <a href="/" title="main-logo">
                  <Image src={mainLogo} className="img-fluid" alt="Logo" />
                </a>
              </div>
              <nav>
                <div className="nav-mobile">
                  <a id="nav-toggle" href="javascript:;">
                    <span></span>
                  </a>
                </div>

                <ul className="nav-list">
                  <li>
                    <a
                      type="button"
                      id="dropdownMenuClickableInside"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Equipment
                    </a>
                    <div
                      className="dropdown-menu mega-menu-section"
                      aria-labelledby="dropdownMenuClickableInside"
                    >
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            data-bs-toggle="tab"
                            data-bs-target="#all"
                            type="button"
                          >
                            All equipment
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#chemical"
                            type="button"
                          >
                            Chemical
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#food"
                            type="button"
                          >
                            Food
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#industrial"
                            type="button"
                          >
                            Industrial
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#packaging"
                            type="button"
                          >
                            Packaging
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#pharmaceutial"
                            type="button"
                          >
                            Pharmaceutial
                          </button>
                        </li>
                      </ul>

                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="all"
                          role="tabpanel"
                        >
                          <div className="mega-tab-menu-section">
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Accumulation Table</a>
                                </li>
                                <li>
                                  <a href="#">Agitator</a>
                                </li>
                                <li>
                                  <a href="#">Bagger</a>
                                </li>
                                <li>
                                  <a href="#">Baler</a>
                                </li>
                                <li>
                                  <a href="#">Bin Hopper Silo</a>
                                </li>
                                <li>
                                  <a href="#">Blower</a>
                                </li>
                                <li>
                                  <a href="#">Boiler</a>
                                </li>
                                <li>
                                  <a href="#">Calciner</a>
                                </li>
                                <li>
                                  <a href="#">Can & Bottle Cleaning Machine</a>
                                </li>
                                <li>
                                  <a href="#">Canning Machine</a>
                                </li>
                                <li>
                                  <a href="#">Capping Machine</a>
                                </li>
                                <li>
                                  <a href="#">Cartoner</a>
                                </li>
                                <li>
                                  <a href="#">Case Former</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Case Packer</a>
                                </li>
                                <li>
                                  <a href="#">Case Sealer</a>
                                </li>
                                <li>
                                  <a href="#">Centrifuge</a>
                                </li>
                                <li>
                                  <a href="#">
                                    Checkweighter Metal Detector And Xray
                                    Inspection
                                  </a>
                                </li>
                                <li>
                                  <a href="#">Coder</a>
                                </li>
                                <li>
                                  <a href="#">Complete Packaging Line</a>
                                </li>
                                <li>
                                  <a href="#">Compressor</a>
                                </li>
                                <li>
                                  <a href="#">Conveyor</a>
                                </li>
                                <li>
                                  <a href="#">Crusher</a>
                                </li>
                                <li>
                                  <a href="#">Dicer And Slicer</a>
                                </li>
                                <li>
                                  <a href="#">Distillation Column And Still</a>
                                </li>
                                <li>
                                  <a href="#">Dryer</a>
                                </li>
                                <li>
                                  <a href="#">Dust Collector</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Enrober</a>
                                </li>
                                <li>
                                  <a href="#">Evaporator</a>
                                </li>
                                <li>
                                  <a href="#">Extruder</a>
                                </li>
                                <li>
                                  <a href="#">Feeder</a>
                                </li>
                                <li>
                                  <a href="#">Filler</a>
                                </li>
                                <li>
                                  <a href="#">Filters & Filtration Equipment</a>
                                </li>
                                <li>
                                  <a href="#">Flaker</a>
                                </li>
                                <li>
                                  <a href="#">Forklift</a>
                                </li>
                                <li>
                                  <a href="#">Form Fill And Seal</a>
                                </li>
                                <li>
                                  <a href="#">Granulator</a>
                                </li>
                                <li>
                                  <a href="#">Heat Exchanger</a>
                                </li>
                                <li>
                                  <a href="#">Homogenizer</a>
                                </li>
                                <li>
                                  <a href="#">Hot Melt Dispenser</a>
                                </li>
                                <li>
                                  <a href="#">Kettle</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Labeling Equipment</a>
                                </li>
                                <li>
                                  <a href="#">Machine Tool</a>
                                </li>
                                <li>
                                  <a href="#">Material Handling Equipment</a>
                                </li>
                                <li>
                                  <a href="#">Mill</a>
                                </li>
                                <li>
                                  <a href="#">Miscellaneous Equipment</a>
                                </li>
                                <li>
                                  <a href="#">Mixer And Blender</a>
                                </li>
                                <li>
                                  <a href="#">Oven</a>
                                </li>
                                <li>
                                  <a href="#">Pasteurizer Tunnel</a>
                                </li>
                                <li>
                                  <a href="#">Press</a>
                                </li>
                                <li>
                                  <a href="#">Pulverizer</a>
                                </li>
                                <li>
                                  <a href="#">Pump</a>
                                </li>
                                <li>
                                  <a href="#">Reactor</a>
                                </li>
                                <li>
                                  <a href="#">Rotary Cooler</a>
                                </li>
                                <li>
                                  <a href="#">Scale</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Sealer</a>
                                </li>
                                <li>
                                  <a href="#">Shrink Tunnel</a>
                                </li>
                                <li>
                                  <a href="#">Tamper Evident Sealer</a>
                                </li>
                                <li>
                                  <a href="#">Tank</a>
                                </li>
                                <li>
                                  <a href="#">Transformers And Switchgear</a>
                                </li>
                                <li>
                                  <a href="#">Tray Former Packer</a>
                                </li>
                                <li>
                                  <a href="#">Turbine</a>
                                </li>
                                <li>
                                  <a href="#">Uncaser And Decaser</a>
                                </li>
                                <li>
                                  <a href="#">Unscrambler</a>
                                </li>
                                <li>
                                  <a href="#">Valve</a>
                                </li>
                                <li>
                                  <a href="#">Vibratory Screener AndSifter</a>
                                </li>
                                <li>
                                  <a href="#">Washer</a>
                                </li>
                                <li>
                                  <a href="#">Wrapping Machine</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="chemical"
                          role="tabpanel"
                        >
                          <div className="mega-tab-menu-section">
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Agitator</a>
                                </li>
                                <li>
                                  <a href="#">Bin Hopper Silo</a>
                                </li>
                                <li>
                                  <a href="#">Centrifuge</a>
                                </li>
                                <li>
                                  <a href="#">
                                    Checkweighter Metal Detector And Xray
                                    Inspection
                                  </a>
                                </li>
                                <li>
                                  <a href="#">Complete Packaging Line</a>
                                </li>
                                <li>
                                  <a href="#">Conveyor</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Distillation Column And Still</a>
                                </li>
                                <li>
                                  <a href="#">Dryer</a>
                                </li>
                                <li>
                                  <a href="#">Enrober</a>
                                </li>
                                <li>
                                  <a href="#">Evaporator</a>
                                </li>
                                <li>
                                  <a href="#">Extruder</a>
                                </li>
                                <li>
                                  <a href="#">Feeder</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Filler</a>
                                </li>
                                <li>
                                  <a href="#">Filters & Filtration Equipment</a>
                                </li>
                                <li>
                                  <a href="#">Flaker</a>
                                </li>
                                <li>
                                  <a href="#">Granulator</a>
                                </li>
                                <li>
                                  <a href="#">Heat Exchanger</a>
                                </li>
                                <li>
                                  <a href="#">Homogenizer</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Kettle</a>
                                </li>
                                <li>
                                  <a href="#">Mill</a>
                                </li>
                                <li>
                                  <a href="#">Miscellaneous Equipment</a>
                                </li>
                                <li>
                                  <a href="#">Mixer And Blender</a>
                                </li>
                                <li>
                                  <a href="#">Pasteurizer Tunnel</a>
                                </li>
                                <li>
                                  <a href="#">Pulverizer</a>
                                </li>
                                <li>
                                  <a href="#">Pump</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Reactor</a>
                                </li>
                                <li>
                                  <a href="#">Rotary Cooler</a>
                                </li>
                                <li>
                                  <a href="#">Tank</a>
                                </li>
                                <li>
                                  <a href="#">Vibratory Screener AndSifter</a>
                                </li>
                                <li>
                                  <a href="#">Washer</a>
                                </li>
                                <li>
                                  <a href="#">Wrapping Machine</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="food"
                          role="tabpanel"
                        >
                          <div className="mega-tab-menu-section">
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Agitator</a>
                                </li>
                                <li>
                                  <a href="#">Bin Hopper Silo</a>
                                </li>
                                <li>
                                  <a href="#">
                                    Checkweighter Metal Detector And Xray
                                    Inspection
                                  </a>
                                </li>
                                <li>
                                  <a href="#">Conveyor</a>
                                </li>
                                <li>
                                  <a href="#">Crusher</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Dicer And Slicer</a>
                                </li>
                                <li>
                                  <a href="#">Distillation Column And Still</a>
                                </li>
                                <li>
                                  <a href="#">Dryer</a>
                                </li>
                                <li>
                                  <a href="#">Enrober</a>
                                </li>
                                <li>
                                  <a href="#">Evaporator</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Feeder</a>
                                </li>
                                <li>
                                  <a href="#">Filler</a>
                                </li>
                                <li>
                                  <a href="#">Filters & Filtration Equipment</a>
                                </li>
                                <li>
                                  <a href="#">Flaker</a>
                                </li>
                                <li>
                                  <a href="#">Heat Exchanger</a>
                                </li>
                                <li>
                                  <a href="#">Scale</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Homogenizer</a>
                                </li>
                                <li>
                                  <a href="#">Kettle</a>
                                </li>
                                <li>
                                  <a href="#">Mill</a>
                                </li>
                                <li>
                                  <a href="#">Miscellaneous Equipment</a>
                                </li>
                                <li>
                                  <a href="#">Pasteurizer Tunnel</a>
                                </li>
                                <li>
                                  <a href="#">Pulverizer</a>
                                </li>
                                <li>
                                  <a href="#">Rotary Cooler</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Tank</a>
                                </li>
                                <li>
                                  <a href="#">Vibratory Screener AndSifter</a>
                                </li>
                                <li>
                                  <a href="#">Washer</a>
                                </li>
                                <li>
                                  <a href="#">Wrapping Machine</a>
                                </li>
                                <li>
                                  <a href="#">Pump</a>
                                </li>
                                <li>
                                  <a href="#">Reactor</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="industrial"
                          role="tabpanel"
                        >
                          <div className="mega-tab-menu-section">
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Baler</a>
                                </li>
                                <li>
                                  <a href="#">Bin Hopper Silo</a>
                                </li>
                                <li>
                                  <a href="#">Blower</a>
                                </li>
                                <li>
                                  <a href="#">Boiler</a>
                                </li>
                                <li>
                                  <a href="#">Compressor</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Conveyor</a>
                                </li>
                                <li>
                                  <a href="#">Dryer</a>
                                </li>
                                <li>
                                  <a href="#">Dust Collector</a>
                                </li>
                                <li>
                                  <a href="#">Filler</a>
                                </li>
                                <li>
                                  <a href="#">Forklift</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Heat Exchanger</a>
                                </li>

                                <li>
                                  <a href="#">Machine Tool</a>
                                </li>
                                <li>
                                  <a href="#">Material Handling Equipment</a>
                                </li>
                                <li>
                                  <a href="#">Mill</a>
                                </li>
                                <li>
                                  <a href="#">Miscellaneous Equipment</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Mixer And Blender</a>
                                </li>
                                <li>
                                  <a href="#">Oven</a>
                                </li>
                                <li>
                                  <a href="#">Pump</a>
                                </li>
                                <li>
                                  <a href="#">Scale</a>
                                </li>
                                <li>
                                  <a href="#">Tank</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Transformers And Switchgear</a>
                                </li>
                                <li>
                                  <a href="#">Valve</a>
                                </li>
                                <li>
                                  <a href="#">Wrapping Machine</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="packaging"
                          role="tabpanel"
                        >
                          <div className="mega-tab-menu-section">
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Accumulation Table</a>
                                </li>
                                <li>
                                  <a href="#">Bin Hopper Silo</a>
                                </li>
                                <li>
                                  <a href="#">Blower</a>
                                </li>
                                <li>
                                  <a href="#">Case Former</a>
                                </li>
                                <li>
                                  <a href="#">Case Packer</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Case Sealer</a>
                                </li>
                                <li>
                                  <a href="#">Centrifuge</a>
                                </li>
                                <li>
                                  <a href="#">
                                    Checkweighter Metal Detector And Xray
                                    Inspection
                                  </a>
                                </li>
                                <li>
                                  <a href="#">Coder</a>
                                </li>
                                <li>
                                  <a href="#">Conveyor</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Feeder</a>
                                </li>
                                <li>
                                  <a href="#">Form Fill And Seal</a>
                                </li>
                                <li>
                                  <a href="#">Homogenizer</a>
                                </li>
                                <li>
                                  <a href="#">Hot Melt Dispenser</a>
                                </li>
                                <li>
                                  <a href="#">Mill</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Miscellaneous Equipment</a>
                                </li>
                                <li>
                                  <a href="#">Oven</a>
                                </li>
                                <li>
                                  <a href="#">Pump</a>
                                </li>
                                <li>
                                  <a href="#">Scale</a>
                                </li>
                                <li>
                                  <a href="#">Sealer</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Shrink Tunnel</a>
                                </li>
                                <li>
                                  <a href="#">Tray Former Packer</a>
                                </li>
                                <li>
                                  <a href="#">Unscrambler</a>
                                </li>
                                <li>
                                  <a href="#">Wrapping Machine</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pharmaceutial"
                          role="tabpanel"
                        >
                          <div className="mega-tab-menu-section">
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Agitator</a>
                                </li>
                                <li>
                                  <a href="#">Bin Hopper Silo</a>
                                </li>
                                <li>
                                  <a href="#">Capping Machine</a>
                                </li>
                                <li>
                                  <a href="#">Centrifuge</a>
                                </li>
                                <li>
                                  <a href="#">
                                    Checkweighter Metal Detector And Xray
                                    Inspection
                                  </a>
                                </li>
                                <li>
                                  <a href="#">Conveyor</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Distillation Column And Still</a>
                                </li>
                                <li>
                                  <a href="#">Dryer</a>
                                </li>
                                <li>
                                  <a href="#">Enrober</a>
                                </li>
                                <li>
                                  <a href="#">Evaporator</a>
                                </li>
                                <li>
                                  <a href="#">Feeder</a>
                                </li>
                                <li>
                                  <a href="#">Filler</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Filters & Filtration Equipment</a>
                                </li>
                                <li>
                                  <a href="#">Flaker</a>
                                </li>
                                <li>
                                  <a href="#">Heat Exchanger</a>
                                </li>
                                <li>
                                  <a href="#">Homogenizer</a>
                                </li>
                                <li>
                                  <a href="#">Kettle</a>
                                </li>
                                <li>
                                  <a href="#">Mill</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Miscellaneous Equipment</a>
                                </li>
                                <li>
                                  <a href="#">Mixer And Blender</a>
                                </li>
                                <li>
                                  <a href="#">Pasteurizer Tunnel</a>
                                </li>
                                <li>
                                  <a href="#">Pulverizer</a>
                                </li>
                                <li>
                                  <a href="#">Pump</a>
                                </li>
                                <li>
                                  <a href="#">Reactor</a>
                                </li>
                              </ul>
                            </div>
                            <div className="mega-tab-menu-block">
                              <ul>
                                <li>
                                  <a href="#">Rotary Cooler</a>
                                </li>
                                <li>
                                  <a href="#">Tank</a>
                                </li>
                                <li>
                                  <a href="#">Vibratory Screener AndSifter</a>
                                </li>
                                <li>
                                  <a href="#">Washer</a>
                                </li>
                                <li>
                                  <a href="#">Wrapping Machine</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <a href="javascript:;" title="Services">
                      Services
                    </a>
                    <ul className="nav-dropdown">
                      <li>
                        <a href="javascript:;" title="Web Design">
                          We Buy
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" title="Web Development">
                          Rigging and Dismantling
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:;" title="Toolbox">
                      Toolbox
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" title="Contact US">
                      Contact US
                    </a>
                  </li>
                </ul>
                <ul className="nav-list">
                  <li>
                    <a
                      href="javascript:;"
                      className="shopping-cart-icon"
                      title="shipping"
                    >
                      <span className="icon icon-shipping"></span>0
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
          <div className="subNav bg-new">
            <div className="nav-info">
              <ul class="sub-menu-link">
                <li>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search Special, equipments, service here..."
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <button
                      class="btn btn-outline-secondary btn-search"
                      type="button"
                      id="button-addon2"
                    >
                      <i class="icon icon-search"></i>
                    </button>
                  </div>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    class="nav-link menu-hover"
                    title="502-778-3883"
                  >
                    <span class="icon icon-phone"></span>502-778-3883
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    class="nav-link menu-hover"
                    title="sales@specialprojects.com"
                  >
                    <span class="icon icon-mail"></span>
                    sales@specialprojects.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
