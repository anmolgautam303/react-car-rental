import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../../components/main';
import { setRentedDates } from '../../actions/Rent';
import Navigation from '../../components/navigation';

class MainContainer extends Component {
render() {
  return (
    <div>
      <Navigation />
      <Main
        rentedDates={this.props.rentedDates}
        setRentedDates={this.props.setRentedDates}
      />
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    rentedDates: state.rentCarReducer.rentedDates,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setRentedDates: (dates) => { dispatch(setRentedDates(dates)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)