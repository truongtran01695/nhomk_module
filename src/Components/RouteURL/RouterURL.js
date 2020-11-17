import React, { Component } from 'react';
import {Route} from "react-router-dom";
import contact from '../Contact/contact';
import Home from '../Home/Home';
import Content2 from '../Pane/Content2/Content2';
import Smartwatch from '../Smartwatch/Smartwatch';
import Shop from '../Shop/Shop';
import Blog from '../Blog/Blog';
import Fager from '../Fages/Fager';
import Accessories from '../Accessories/Accessories';
import aboutus from '../About_us/aboutus';
import ooo from '../ooo/ooo';


import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import CTA from '../AppCT/CTA';
import Log from '../HomeLog/Log';

class RouterURL extends Component {
    render() {
        return (
           
                <div>
               
                <Route path="/index" component={Home} />
                <Route path="/contact" component={contact} />
                <Route path="/index2" component={Content2} />
                <Route path="/smartwatch" component={Smartwatch} />
                <Route path="/blog" component={Blog} />
                <Route path="/fager" component={Fager} />
                <Route path="/accessories" component={Accessories} />
                <Route path="/about" component={aboutus} />
                <Route path="/shop" component={Shop} />
                <Route path="/login" component={Login} />

                <Route path="/ctaaaa" component={CTA} />
                <Route path="/Log" component={Log} />
                {/* <Route component={ooo} /> */}
               
                </div>
         
        );
    }
}

export default RouterURL;