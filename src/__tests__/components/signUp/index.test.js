import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignUp from '../../../components/signUp';

configure({ adapter: new Adapter() })

describe('Sign-Up', () => {
  const handleSubmit = jest.fn();
  SignUp.prototype.handleSubmit = handleSubmit;
  
  const credentials = { firstName: 'anmol', email: 'anmol@test.com', password: 'pass' };
  let signUp = shallow(<SignUp />);

  it('renders properly', () => {
    expect(SignUp).toMatchSnapshot();
  });

  it('displays the first name input', () => {
    expect(signUp.find('#input-auth-firstname').length).toBe(1);
  });

  it('displays the email input', () => {
    expect(signUp.find('#input-auth-username').length).toBe(1);
  });

  it('displays the email input', () => {
    expect(signUp.find('#input-auth-password').length).toBe(1);
  });

  it('email field is filled correctly', () => {
    const firstNameInput = signUp.find('#input-auth-firstname');
    firstNameInput.value = credentials.firstName;
    expect(firstNameInput.value).toBe('anmol');
  });

  it('email field is filled correctly', () => {
    const emailInput = signUp.find('#input-auth-username');
    emailInput.value = credentials.email;
    expect(emailInput.value).toBe('anmol@test.com');
  });

  it('password field is filled correctly', () => {
    const passwordInput = signUp.find('#input-auth-password');
    passwordInput.value = credentials.password;
    expect(passwordInput.value).toBe('pass');
  });

  it('field are filled correctly', () => {
    const mockEvent = {
      target: {"email": "", "firstName": "", "password": "", "submitted": false }
    };
    signUp.instance().handleChange(mockEvent);
    
    expect(signUp.state()).toEqual(mockEvent.target);
  });
});