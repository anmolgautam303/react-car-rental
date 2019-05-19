import React from 'react';
import moment from 'moment';

import './signUp.css';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      email: '',
      password: '',
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password, firstName } = this.state;

    const body = {
      "verification": {
        "callback": "https://localhost:3000/login",
        "person": {
          firstName,
          "lastName": "Toomas",
          "idNumber": "1234567890"
        },
        "document": {
          "number": "B01234567",
          "type": "PASSPORT",
          "country": "EE"
        },
        "additionalData": {
          "citizenship": "EE",
          "placeOfResidence": "Tallinn"
        },
        "lang": "en",
        "features": ["selfid"],
        "timestamp": moment().utc().format()
      }
    };

    if (email && password && firstName) {
      this.props.signUpUser(body);
    }
  };

  render() {
    const { email, password, submitted, firstName } = this.state;

    return (
      <div className="container login-container">
        <div className="col-md-6 col-md-offset-3 card">
          <h2>Sign Up</h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !firstName ? ' has-error' : '')}>
              <label htmlFor="firstName">First name</label>
              <input type="text" className="form-control" name="firstName" value={firstName} onChange={this.handleChange} />
              {submitted && !firstName &&
                <div className="help-block">First name is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
              {submitted && !email &&
                <div className="help-block">Email is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
              {submitted && !password &&
                <div className="help-block">Password is required</div>
              }
            </div>
            <div className="form-group">
              <button
                className="btn btn-danger signup-custom-button"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default Login;