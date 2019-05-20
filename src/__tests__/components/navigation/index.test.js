import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navigation from '../../../components/navigation';

configure({ adapter: new Adapter() })

describe('Joke', () => {
  let login = shallow(<Navigation />);

  it('renders properly', () => {
    expect(Navigation).toMatchSnapshot();
  });
});