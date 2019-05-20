import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import { CarCard } from '../../../../components/common/CarCard';
import CarImage from "../../../../assets/img/cars/bmw-7-series.jpg"

configure({ adapter: new Adapter() })

describe('Car Card', () => {
  let props = { 
    rentedDates: {
      "from": "Wed May 29 2019 12:00:00 GMT+0300",
      "to": "Thu May 30 2019 12:00:00 GMT+0300"
    },
    "item": {
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
  let carCard = shallow(<CarCard {...props} />);

  it('renders properly', () => {
    expect(carCard).toMatchSnapshot();
  });

  it('displays the correct car type', () => {
    expect(carCard.find('.category').text()).toEqual('LARGE');
  });

  it('displays the correct price', () => {
    expect(carCard.find('.price').text()).toEqual('1237.54€');
  });

  it('displays the correct image', () => {
    expect(carCard.find('img').prop("src")).toEqual(CarImage);
  });
});