import {
  SET_RENTED_CAR,
  SET_RENTED_DATES
} from '../../constants/Rent';

import * as actions from '../../actions/Rent';

it('creates an action to set a selected car', () => {
  const response = {
    "engine": "Petrol",
    "id": "4",
    "image": "porsche-911.jpg",
    "name": "Porsche 911 Carrera GTS Cabriolet",
    "price": "1587.38",
    "seats": "2",
    "transmission": "Automatic",
    "type": "SPORTS"
    };

  const expectedAction = { type: SET_RENTED_CAR, payload: response };

  expect(actions.setRentedCard(response)).toEqual(expectedAction);
});

it('creates an action to set the selected dates', () => {
  const response = {
    "from": "2019-05-29T09:00:00.000Z",
    "to": "2019-05-30T09:00:00.000Z"
  };

  const expectedAction = { type: SET_RENTED_DATES, payload: response };

  expect(actions.setRentedDates(response)).toEqual(expectedAction);
});