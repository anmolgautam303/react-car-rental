import {
  SET_RENTED_CAR,
  SET_RENTED_DATES
} from '../../../constants/Rent';
import RentCarReducer from '../../../reducers/rentCarReducer';

describe('RentCarReducer', () => {
  const rentedCard =     {
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
  const rentedDates = {
    rentedDates: {
      "from": "Wed May 29 2019 12:00:00 GMT+0300",
      "to": "Thu May 30 2019 12:00:00 GMT+0300"
    }
  };

  it('sets selected car as rented', () => {
    expect(RentCarReducer({}, { type: SET_RENTED_CAR, payload: rentedCard.rentedCard }))
      .toEqual(rentedCard);
  });

  it('sets selected car as rented', () => {
    expect(RentCarReducer({}, { type: SET_RENTED_DATES, payload: rentedDates.rentedDates }))
      .toEqual(rentedDates);
  });
});