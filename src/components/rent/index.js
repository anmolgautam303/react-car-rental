import React, { Component } from 'react';

import { CarCard } from '../common/CarCard';
import { history } from '../../helpers/history';
import './rent.css';

class Rent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rented: false
    };
  }

  render() {
    return (
      <div className="rent-container">
        <div className="container">
          <h3>Select a car</h3>
          <div className="row">
            {
              this.props.availableCars.map((item, i) => {
                return (
                  <CarCard 
                    key={item.id} 
                    item={item}
                    rentedDates={this.props.rentedDates}
                  >
                    <div className="wrap-box">
                      <ul className="spec-list">
                      <li>
                          <i className="fas fa-user"></i>
                          <span>{item.seats}</span>
                      </li>
                      <li>
                          <i className="fas fa-cog"></i>
                          <span>{item.transmission}</span>
                      </li>
                      <li>
                          <i className="fas fa-gas-pump"></i>
                          <span>{item.engine}</span>
                      </li>
                      </ul>
                  </div>

                  <div className="button-container">
                      <button 
                        className="btn btn-success"
                        onClick={() => {
                          this.props.setRentedCard(item);
                          history.push('/return');
                        }}
                      >
                        Rent now
                      </button>
                  </div>
                  </CarCard>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Rent;