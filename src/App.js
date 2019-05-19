import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from './helpers/history';
import { PrivateRoute } from './helpers/PrivateRoute';
import LoginPage from './pages/login';
import MainPage from './pages/main';
import SignUpPage from './pages/signUp';

import RentPage from './pages/rent';
import ReturnCarPage from './pages/returnCar';

const App = () => {
    return (
        <div>
          <Router history={history}>
            <div>
              <PrivateRoute path="/" exact strict component={MainPage} />
              <PrivateRoute path="/rent" exact strict component={RentPage} />
              <PrivateRoute path="/return" exact strict component={ReturnCarPage} />

              <Route path="/login" exact strict component={LoginPage} />
              <Route path="/sign-up" exact strict component={SignUpPage} />
            </div>
          </Router>
        </div>
    );
}
    
export default App;