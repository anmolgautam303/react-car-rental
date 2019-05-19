import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReturnCar from '../../components/returnCar';
import Navigation from '../../components/navigation';

class ReturnCarContainer extends Component {
render() {
  return (
    <div>
      <Navigation />
      <ReturnCar
        rentedCard={this.props.rentedCard}
        rentedDates={this.props.rentedDates}
      />
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    rentedCard: state.rentCarReducer.rentedCard,
    rentedDates: state.rentCarReducer.rentedDates,
  }
}

export default connect(mapStateToProps, null)(ReturnCarContainer)