import React, { Component } from 'react';
import Contenalls from '../ContentPane/contentalls/Contenalls';

class Content2 extends Component {
    render() {
        return (
            <div>
             <div className="slider-with-banner">
        <div className="container">
          <div className="row">
            {/* Begin Category Menu Area */}
            <div className="col-lg-3">
              {/*Category Menu Start*/}
              <div className="category-menu">
                <div className="category-heading">
                  <h2 className="categories-toggle"><span>categories</span></h2>
                </div>
                <div id="cate-toggle" className="category-menu-list">
                  <ul>
                    <li className="right-menu"><a href="shop-left-sidebar.html">Laptops</a>
                      <ul className="cat-mega-menu" style={{}}>
                        <li className="right-menu cat-mega-title">
                          <a href="shop-left-sidebar.html">Prime Video</a>
                          <ul style={{}}>
                            <li><a href="#">All Videos</a></li>
                            <li><a href="#">Blouses</a></li>
                            <li><a href="#">Evening Dresses</a></li>
                            <li><a href="#">Summer Dresses</a></li>
                            <li><a href="#">T-shirts</a></li>
                            <li><a href="#">Rent or Buy</a></li>
                            <li><a href="#">Your Watchlist</a></li>
                            <li><a href="#">Watch Anywhere</a></li>
                            <li><a href="#">Getting Started</a></li>
                          </ul>
                        </li>
                        <li className="right-menu cat-mega-title">
                          <a href="shop-left-sidebar.html">Computers</a>
                          <ul style={{}}>
                            <li><a href="#">More to Explore</a></li>
                            <li><a href="#">TV &amp; Video</a></li>
                            <li><a href="#">Audio &amp; Theater</a></li>
                            <li><a href="#">Camera, Photo</a></li>
                            <li><a href="#">Cell Phones</a></li>
                            <li><a href="#">Headphones</a></li>
                            <li><a href="#">Video Games</a></li>
                            <li><a href="#">Wireless Speakers</a></li>
                          </ul>
                        </li>
                        <li className="right-menu cat-mega-title">
                          <a href="shop-left-sidebar.html">Electronics</a>
                          <ul style={{}}>
                            <li><a href="#">Amazon Home</a></li>
                            <li><a href="#">Kitchen &amp; Dining</a></li>
                            <li><a href="#">Furniture</a></li>
                            <li><a href="#">Bed &amp; Bath</a></li>
                            <li><a href="#">Appliances</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="right-menu"><a href="shop-left-sidebar.html">TV &amp; Audio</a>
                      <ul className="cat-mega-menu" style={{}}>
                        <li className="right-menu cat-mega-title">
                          <a href="shop-left-sidebar.html">Chamcham</a>
                          <ul style={{}}>
                            <li><a href="#">Office</a></li>
                            <li><a href="#">Gaming</a></li>
                            <li><a href="#">Chromebook</a></li>
                            <li><a href="#">Refurbished</a></li>
                            <li><a href="#">Touchscreen</a></li>
                            <li><a href="#">Ultrabooks</a></li>
                            <li><a href="#">Netbook</a></li>
                          </ul>
                        </li>
                        <li className="right-menu cat-mega-title">
                          <a href="shop-left-sidebar.html">Meito</a>
                          <ul style={{}}>
                            <li><a href="#">Hard Drives</a></li>
                            <li><a href="#">Graphic Cards</a></li>
                            <li><a href="#">Processors (CPU)</a></li>
                            <li><a href="#">Memory</a></li>
                            <li><a href="#">Motherboards</a></li>
                            <li><a href="#">Fans &amp; Cooling</a></li>
                            <li><a href="#">CD/DVD Drives</a></li>
                          </ul>
                        </li>
                        <li className="right-menu cat-mega-title">
                          <a href="shop-left-sidebar.html">Sony Bravia</a>
                          <ul style={{}}>
                            <li><a href="#">Sound Cards</a></li>
                            <li><a href="#">Cases &amp; Towers</a></li>
                            <li><a href="#">Casual Dresses</a></li>
                            <li><a href="#">Evening Dresses</a></li>
                            <li><a href="#">T-shirts</a></li>
                            <li><a href="#">Tops</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="right-menu"><a href="shop-left-sidebar.html">Smartphone</a>
                      <ul className="cat-mega-menu cat-mega-menu-2" style={{}}>
                        <li className="right-menu cat-mega-title">
                          <a href="shop-left-sidebar.html">Camera Accessories</a>
                          <ul style={{}}>
                            <li><a href="#">Octa Core</a></li>
                            <li><a href="#">Quad Core</a></li>
                            <li><a href="#">Dual Core</a></li>
                            <li><a href="#">7.0 Screen</a></li>
                            <li><a href="#">9.0 Screen</a></li>
                            <li><a href="#">Bags &amp; Cases</a></li>
                          </ul>
                        </li>
                        <li className="right-menu cat-mega-title">
                          <a href="shop-left-sidebar.html">XailStation</a>
                          <ul style={{}}>
                            <li><a href="#">Batteries</a></li>
                            <li><a href="#">Microphones</a></li>
                            <li><a href="#">Stabilizers</a></li>
                            <li><a href="#">Video Tapes</a></li>
                            <li><a href="#">Memory Card Readers</a></li>
                            <li><a href="#">Tripods</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="#">Cameras</a></li>
                    <li><a href="#">Headphone</a></li>
                    <li><a href="#">Smartwatch</a></li>
                    <li><a href="#">Out Door Room</a></li>
                    <li><a href="#">Chamcham</a></li>
                    <li className="rx-child"><a href="#">Mobile &amp; Tablets</a></li>
                    <li className="rx-child"><a href="#">Accessories</a></li>
                    <li className="rx-parent">
                      <a className="rx-default">More Categories</a>
                      <a className="rx-show">Less Categories</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Category Menu End*/}
            </div>
            {/* Category Menu Area End Here */}
            {/* Begin Slider Area */}
            <div className="col-lg-9">
              <div className="slider-area pt-sm-30 pt-xs-30">
                <div className="slider-active owl-carousel owl-loaded owl-drag">
                  {/* Begin Single Slide Area */}
                  {/* Single Slide Area End Here */}
                  {/* Begin Single Slide Area */}
                  {/* Single Slide Area End Here */}
                  {/* Begin Single Slide Area */}
                  {/* Single Slide Area End Here */}
                  <div className="owl-stage-outer owl-height" style={{height: '475px'}}><div className="owl-stage" style={{transform: 'translate3d(-2610px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '6090px'}}><div className="owl-item cloned" style={{width: '870px'}}><div className="single-slide align-center-left animation-style-01 bg-5">
                          <div className="slider-progress" />
                          <div className="slider-content">
                            <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                            <h2>Work Desk Surface Studio 2018</h2>
                            <h3>Starting at <span>$1599.00</span></h3>
                            <div className="default-btn slide-btn">
                              <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned" style={{width: '870px'}}><div className="single-slide align-center-left animation-style-02 bg-6">
                          <div className="slider-progress" />
                          <div className="slider-content">
                            <h5>Sale Offer <span>-10% Off</span> This Week</h5>
                            <h2>Phantom 4 Pro+ Obsidian</h2>
                            <h3>Starting at <span>$809.00</span></h3>
                            <div className="default-btn slide-btn">
                              <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                            </div>
                          </div>
                        </div></div><div className="owl-item" style={{width: '870px'}}><div className="single-slide align-center-left animation-style-02 bg-4">
                          <div className="slider-progress" />
                          <div className="slider-content">
                            <h5>Sale Offer <span>-20% Off</span> This Week</h5>
                            <h2>Chamcham Galaxy S9 | S9+</h2>
                            <h3>Starting at <span>$589.00</span></h3>
                            <div className="default-btn slide-btn">
                              <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                            </div>
                          </div>
                        </div></div><div className="owl-item active" style={{width: '870px'}}><div className="single-slide align-center-left animation-style-01 bg-5">
                          <div className="slider-progress" />
                          <div className="slider-content">
                            <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                            <h2>Work Desk Surface Studio 2018</h2>
                            <h3>Starting at <span>$1599.00</span></h3>
                            <div className="default-btn slide-btn">
                              <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                            </div>
                          </div>
                        </div></div><div className="owl-item" style={{width: '870px'}}><div className="single-slide align-center-left animation-style-02 bg-6">
                          <div className="slider-progress" />
                          <div className="slider-content">
                            <h5>Sale Offer <span>-10% Off</span> This Week</h5>
                            <h2>Phantom 4 Pro+ Obsidian</h2>
                            <h3>Starting at <span>$809.00</span></h3>
                            <div className="default-btn slide-btn">
                              <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned" style={{width: '870px'}}><div className="single-slide align-center-left animation-style-02 bg-4">
                          <div className="slider-progress" />
                          <div className="slider-content">
                            <h5>Sale Offer <span>-20% Off</span> This Week</h5>
                            <h2>Chamcham Galaxy S9 | S9+</h2>
                            <h3>Starting at <span>$589.00</span></h3>
                            <div className="default-btn slide-btn">
                              <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned" style={{width: '870px'}}><div className="single-slide align-center-left animation-style-01 bg-5">
                          <div className="slider-progress" />
                          <div className="slider-content">
                            <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                            <h2>Work Desk Surface Studio 2018</h2>
                            <h3>Starting at <span>$1599.00</span></h3>
                            <div className="default-btn slide-btn">
                              <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                            </div>
                          </div>
                        </div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="fa fa-angle-left" /></div><div className="owl-next"><i className="fa fa-angle-right" /></div></div><div className="owl-dots"><div className="owl-dot"><span /></div><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div></div></div>
              </div>
            </div>
            {/* Slider Area End Here */}
          </div>
        </div>
      </div>
      <div className="li-static-banner pt-20 pt-sm-30 pt-xs-30">
        <div className="container">
          <div className="row">
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4">
              <div className="single-banner pb-xs-30">
                <a href="#">
                  <img src="images/banner/1_3.jpg" alt="Li's Static Banner" />
                </a>
              </div>
            </div>
            {/* Single Banner Area End Here */}
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4">
              <div className="single-banner pb-xs-30">
                <a href="#">
                  <img src="images/banner/1_4.jpg" alt="Li's Static Banner" />
                </a>
              </div>
            </div>
            {/* Single Banner Area End Here */}
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4">
              <div className="single-banner">
                <a href="#">
                  <img src="images/banner/1_5.jpg" alt="Li's Static Banner" />
                </a>
              </div>
            </div>
            {/* Single Banner Area End Here */}
          </div>
        </div>
      </div>
        <Contenalls></Contenalls>
         </div>
        );
    }
}

export default Content2;