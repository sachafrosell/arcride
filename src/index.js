import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import * as serviceWorker from './serviceWorker';
import LandingPage from './LandingPage.js'
import Contact from './Contact.js'
import LoginPage from './LoginPage.js'
import EmployeePortal from './EmployeePortal.js'
import PillarPage from './PillarPage.js'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";



// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
import "./assets/demo/demo.css";


ReactDOM.render(

    <HashRouter>

      <Switch>
        <Route
          path="/arcride"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/our-approach"
          render={(props) => <PillarPage {...props} />}
        />

        <Route
          path="/contact"
          render={(props) => <Contact {...props} />}
        />

        <Route
          path="/login"
          render={(props) => (
            <Auth0Provider
              domain="arc-ride-global.eu.auth0.com"
              clientId="WhYQUjHAqHhD7P87c6OJ0krbyOW08THr"
              redirectUri="https://sachafrosell.github.io/#/login"
            >
              <LoginPage {...props} />
            </Auth0Provider>
          )}
        />


        <Route
          path="/admin-portal"
          render={(props) => (
            <Auth0Provider
              domain="arc-ride-employee.eu.auth0.com"
              clientId="WVQl1bzIIHV1VU2jRJfcolnVL7GlZfey"
              redirectUri="https://sachafrosell.github.io/login"
            >
              <EmployeePortal {...props} />
            </Auth0Provider>
              )}
              />


          <Redirect from="/" to="/arcride" />
        </Switch>
      </HashRouter>
      ,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
