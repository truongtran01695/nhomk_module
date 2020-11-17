import React, { Component } from 'react';

class ooo extends Component {
    render() {
        return (
            <div>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="breadcrumb-content">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li className="active">404 Error</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="error404-area pt-30 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="error-wrapper text-center ptb-50 pt-xs-20">
                                    <div className="error-text">
                                        <h1>404</h1>
                                        <h2>Opps! PAGE NOT BE FOUND</h2>
                                        <p>Sorry but the page you are looking for does not exist, have been removed, <br /> name changed or is temporarity unavailable.</p>
                                    </div>
                                    <div className="search-error">
                                        <form id="search-form" action="#">
                                            <input type="text" placeholder="Search" />
                                            <button><i className="zmdi zmdi-search" /></button>
                                        </form>
                                    </div>
                                    <div className="error-button">
                                        <a href="index.html">Back to home page</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ooo;