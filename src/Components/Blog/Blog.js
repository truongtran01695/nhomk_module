import React, { Component } from 'react';
import Home from '../Home/Home';

class Blog extends Component {
    render() {
        return (
            <div>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="breadcrumb-content">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li className="active">About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="about-us-wrapper pt-60 pb-40">
                    <div className="container">
                        <div className="row">
                            {/* About Text Start */}
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="about-text-wrap">
                                    <h2><span>Provide Best</span>Product For You</h2>
                                    <p>We provide the best Beard oile all over the world. We are the worldd best store in indi for Beard Oil. You can buy our product without any hegitation because they truste us and buy our product without any hagitation because they belive and always happy buy our product.</p>
                                    <p>Some of our customer say’s that they trust us and buy our product without any hagitation because they belive us and always happy to buy our product.</p>
                                    <p>We provide the beshat they trusted us and buy our product without any hagitation because they belive us and always happy to buy.</p>
                                </div>
                            </div>
                            {/* About Text End */}
                            {/* About Image Start */}
                            <div className="col-lg-5 col-md-10">
                                <div className="about-image-wrap">
                                    <img className="img-full" src="images/product/large-size/13.jpg" alt="About Us" />
                                </div>
                            </div>
                            {/* About Image End */}
                        </div>
                    </div>
                </div>
                <Home></Home>
            </div>
        );
    }
}

export default Blog;