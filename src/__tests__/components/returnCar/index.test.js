import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import { CarCard } from '../../../components/common/CarCard';
import ReturnCard from '../../../components/returnCar';

import CarImage from "../../../assets/img/cars/bmw-7-series.jpg"

configure({ adapter: new Adapter() })

describe('Car Card', () => {
  let props = { 
    rentedDates: {
      "from": "Wed May 29 2019 12:00:00 GMT+0300",
      "to": "Thu May 30 2019 12:00:00 GMT+0300"
    },
    "rentedCard": {
      "id": 1,
      "name": "BMW 7 Series",
      "type": "LARGE",
      "price": 618.77,
      "seats": "5",
      "transmission": "Automatic",
      "engine": "Diesel",
      "image": "bmw-7-series.jpg"
    }
  };
  let returnCard = shallow(<ReturnCard {...props} />);

  it('renders properly', () => {
    expect(returnCard).toMatchSnapshot();
  });

  it('displays the correct car type', () => {
    expect(returnCard.find('h3').text()).toEqual('Return car');
  });

  it('displays the correct price', () => {
    expect(returnCard.find('h5').text()).toEqual('Return date: 30-05-2019');
  });
});