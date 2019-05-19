import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from '../../components/signUp';
import { signUpUser } from '../../actions/Auth';

class SignUpContainer extends Component {
  render() {
    return (
      <SignUp
        signUpUser={this.props.signUpUser}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: (body) => { dispatch(signUpUser(body)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)