import React from 'react';
import moment from 'moment';

export const CarCard = props => {
  let days = 1;
  if (props.rentedDates.to !== undefined) {
    days = moment(props.rentedDates.to).diff(moment(props.rentedDates.from), 'days') + 1
  }

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="balance-box bg-light">
        <header className="car-header">
          <h6 className="category">{props.item.type}</h6>

          <div className="row">
            <div className="col-sm">
              <h6>{props.item.name}</h6>
            </div>
            <div className="col-sm">
              <h6 className="price">{(props.item.price * days).toFixed(2)}€</h6>
            </div>
          </div>
        </header>

        <figure className="car-container image-placeholder">
          <img
            className="responsive-image car-image" 
            src={require(`../../../assets/img/cars/${props.item.image}`)}
            alt="car"
          />
        </figure>

        {props.children}
      </div>
    </div>

  );
};