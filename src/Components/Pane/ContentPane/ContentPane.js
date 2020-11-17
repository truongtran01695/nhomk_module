import React, { Component } from 'react';
import Contenalls from './contentalls/Contenalls';

class ContentPane extends Component {
    render() {
        return (
          <div>
            <div className="slider-with-banner">
            <div className="container">
              <div className="row">
                {/* Begin Slider Area */}
                <div className="col-lg-8 col-md-8">
                  <div className="slider-area">
                    <div className="slider-active owl-carousel owl-loaded owl-drag">
                      {/* Begin Single Slide Area */}
                      {/* Single Slide Area End Here */}
                      {/* Begin Single Slide Area */}
                      {/* Single Slide Area End Here */}
                      {/* Begin Single Slide Area */}
                      {/* Single Slide Area End Here */}
                      <div className="owl-stage-outer owl-height" style={{height: '475px'}}><div className="owl-stage" style={{transform: 'translate3d(-3080px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '5390px'}}><div className="owl-item cloned" style={{width: '770px'}}><div className="single-slide align-center-left animation-style-02 bg-2">
                              <div className="slider-progress" />
                              <div className="slider-content">
                                <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                                <h2>Work Desk Surface Studio 2018</h2>
                                <h3>Starting at <span>$824.00</span></h3>
                                <div className="default-btn slide-btn">
                                  <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                </div>
                              </div>
                            </div></div><div className="owl-item cloned" style={{width: '770px'}}><div className="single-slide align-center-left animation-style-01 bg-3">
                              <div className="slider-progress" />
                              <div className="slider-content">
                                <h5>Sale Offer <span>-10% Off</span> This Week</h5>
                                <h2>Phantom 4 Pro+ Obsidian</h2>
                                <h3>Starting at <span>$1849.00</span></h3>
                                <div className="default-btn slide-btn">
                                  <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                </div>
                              </div>
                            </div></div><div className="owl-item" style={{width: '770px'}}><div className="single-slide align-center-left  animation-style-01 bg-1">
                              <div className="slider-progress" />
                              <div className="slider-content">
                                <h5>Sale Offer <span>-20% Off</span> This Week</h5>
                                <h2>Chamcham Galaxy S9 | S9+</h2>
                                <h3>Starting at <span>$1209.00</span></h3>
                                <div className="default-btn slide-btn">
                                  <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                </div>
                              </div>
                            </div></div><div className="owl-item" style={{width: '770px'}}><div className="single-slide align-center-left animation-style-02 bg-2">
                              <div className="slider-progress" />
                              <div className="slider-content">
                                <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                                <h2>Work Desk Surface Studio 2018</h2>
                                <h3>Starting at <span>$824.00</span></h3>
                                <div className="default-btn slide-btn">
                                  <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                </div>
                              </div>
                            </div></div><div className="owl-item active" style={{width: '770px'}}><div className="single-slide align-center-left animation-style-01 bg-3">
                              <div className="slider-progress" />
                              <div className="slider-content">
                                <h5>Sale Offer <span>-10% Off</span> This Week</h5>
                                <h2>Phantom 4 Pro+ Obsidian</h2>
                                <h3>Starting at <span>$1849.00</span></h3>
                                <div className="default-btn slide-btn">
                                  <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                </div>
                              </div>
                            </div></div><div className="owl-item cloned" style={{width: '770px'}}><div className="single-slide align-center-left  animation-style-01 bg-1">
                              <div className="slider-progress" />
                              <div className="slider-content">
                                <h5>Sale Offer <span>-20% Off</span> This Week</h5>
                                <h2>Chamcham Galaxy S9 | S9+</h2>
                                <h3>Starting at <span>$1209.00</span></h3>
                                <div className="default-btn slide-btn">
                                  <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                </div>
                              </div>
                            </div></div><div className="owl-item cloned" style={{width: '770px'}}><div className="single-slide align-center-left animation-style-02 bg-2">
                              <div className="slider-progress" />
                              <div className="slider-content">
                                <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                                <h2>Work Desk Surface Studio 2018</h2>
                                <h3>Starting at <span>$824.00</span></h3>
                                <div className="default-btn slide-btn">
                                  <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                </div>
                              </div>
                            </div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="fa fa-angle-left" /></div><div className="owl-next"><i className="fa fa-angle-right" /></div></div><div className="owl-dots"><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot active"><span /></div></div></div>
                  </div>
                </div>
                {/* Slider Area End Here */}
                {/* Begin Li Banner Area */}
                <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                  <div className="li-banner">
                    <a href="#">
                      <img src="images/banner/1_1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="li-banner mt-15 mt-sm-30 mt-xs-30">
                    <a href="#">
                      <img src="images/banner/1_2.jpg" alt="" />
                    </a>
                  </div>
                </div>
                {/* Li Banner Area End Here */}
              </div>
            </div>
          </div>
         <Contenalls></Contenalls>
         </div>
        );
    }
}

export default ContentPane;