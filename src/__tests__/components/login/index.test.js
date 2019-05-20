import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from '../../../components/login';

configure({ adapter: new Adapter() })

describe('Joke', () => {
  const credentials = { email: 'anmol@test.com', password: 'pass' };
  let login = shallow(<Login />);

  it('renders properly', () => {
    expect(Login).toMatchSnapshot();
  });

  it('displays the email input', () => {
    expect(login.find('#input-auth-username').length).toBe(1);
  });

  it('displays the email input', () => {
    expect(login.find('#input-auth-password').length).toBe(1);
  });

  it('email field is filled correctly', () => {
    const emailInput = login.find('#input-auth-username');
    emailInput.value = credentials.email;
    expect(emailInput.value).toBe('anmol@test.com');
  });

  it('email field is filled correctly', () => {
    const passwordInput = login.find('#input-auth-password');
    passwordInput.value = credentials.password;
    expect(passwordInput.value).toBe('pass');
  });
});