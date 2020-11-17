import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RouterURL from '../RouteURL/RouterURL';
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    
    <Router>
     <div className="body-wrapper">
       <Header></Header>
      <RouterURL></RouterURL>
      <Footer></Footer>
     </div>
     </Router>
  );
}

export default App;
