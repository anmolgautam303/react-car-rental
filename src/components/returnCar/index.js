import React, { Component } from 'react';
import moment from 'moment';

import { CarCard } from '../common/CarCard';
import './returnCar.css';

class ReturnCar extends Component {
  render() {
    console.log('this.props.rentedCard', this.props.rentedCard);
    return (
      <div className="return-container">
        <div className="container">
          <h3>Return car</h3>

              <div className="row return-card-center">
                <CarCard
                  item={this.props.rentedCard}
                  rentedDates={this.props.rentedDates}
                >
                  <div className="button-container">
                    <h5 className="return-date">
                      Return date: {moment(this.props.rentedDates.to).format('DD-MM-YYYY')}
                    </h5>
                  </div>
                </CarCard>
              </div>

        </div>
      </div>
    );
  }
}

export default ReturnCar;