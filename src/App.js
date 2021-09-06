import React from 'react';
import { createBrowserHistory } from "history";
import './App.css';
import { Route, Switch,BrowserRouter as Router ,withRouter  } from "react-router-dom";

// pages for this product
import home from "pages/Home";
import Comingsoon from "pages/Comingsoon";
import Company from 'pages/Company';
import Partners from "pages/Partners";
import Outdoorad from "pages/Outdoorad";
import DigitalMar from "pages/DigitalMar";
import DigitalAd from "pages/DigitalAd";
import EventAd from "pages/EventAd";
import Influences from "pages/Influences";
import Pitch2Adcommunity from "pages/Pitch2Adcommunity";
import Adstick from "pages/Adstick";
import Careers from "pages/Careers";
import P2AContact from "pages/P2AContact";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);





var hist = createBrowserHistory();


export default function App(props) {

  const { ...rest } = props;
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
        
       
        <Router history={hist}>
        <Header
        
        rightLinks={<HeaderLinks />}
        fixed
       />
                    <Switch>
                      <Route exact path="/" component={withRouter(home)} />
                      <Route path="/Comingsoon" component={Comingsoon} />
                      <Route path="/Company" component={Company} />
                      <Route path="/Partners" component={Partners} />
                      <Route path="/Outdoorad" component={Outdoorad} />
                      <Route path="/DigitalMar" component={DigitalMar} />
                      <Route path="/DigitalAd" component={DigitalAd} />
                      <Route path="/EventAd" component={EventAd} />
                      <Route path="/Influences" component={Influences} />
                      <Route path="/Pitch2Adcommunity" component={Pitch2Adcommunity} />
                      <Route path="/Adstick" component={Adstick} />
                      <Route path="/Careers" component={Careers} />
                      <Route path="/P2AContact" component={P2AContact} />
                      
                    </Switch>

            
        </Router>
      </div>
      </div>
    </div>
  );
}


