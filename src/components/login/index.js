import React from 'react';

import { history } from '../../helpers/history'; 
import './login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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
    const { email, password } = this.state;

    if (email && password) {
      localStorage.setItem('loggedIn', true);
      //login now!
      history.push('/')
    }
  };

  render() {
    const { email, password, submitted } = this.state;

    return (
      <div className="container login-container">
        <div className="col-md-6 col-md-offset-3 card">
          <h2>Login</h2>
          <form name="form" onSubmit={this.handleSubmit}>
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
                className="btn btn-primary login-custom-button"
              >
                Login
              </button>
            </div>
          </form>

          <hr />
          <div className="form-group">
              <button
                className="btn btn-danger login-custom-button"
                onClick={() => history.push('/sign-up')}
              >
                Sign up
              </button>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Login;