import React, { Component } from 'react';
import { connect } from 'react-redux';

import Rent from '../../components/rent';
import { setRentedCard } from '../../actions/Rent';
import Navigation from '../../components/navigation';

class RentContainer extends Component {
render() {
  return (
    <div>
      <Navigation />
      <Rent
        availableCars={this.props.availableCars}
        rentedDates={this.props.rentedDates}
        setRentedCard={this.props.setRentedCard}
      />
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    availableCars: state.rentCarReducer.availableCars,
    rentedDates: state.rentCarReducer.rentedDates,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setRentedCard: (item) => { dispatch(setRentedCard(item)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RentContainer)