import { 
  SET_RENTED_CAR,
  SET_RENTED_DATES
 } from '../../constants/Rent';

export const initialState = {
  availableCars: [
    {
      "id": 1,
      "name": "BMW 7 Series",
      "type": "LARGE",
      "price": 618.77,
      "seats": "5",
      "transmission": "Automatic",
      "engine": "Diesel",
      "image": "bmw-7-series.jpg"
    },
    {
      "id": 2,
      "name": "Mercedes-Benz E-Class",
      "type": "LARGE",
      "price": 343.65,
      "seats": "5",
      "transmission": "Automatic",
      "engine": "Petrol",
      "image": "merc-e-class.jpg"
    },
    {
      "id": 3,
      "name": "Volkswagen Passat Variant",
      "type": "ESTATES",
      "price": 238.92,
      "seats": "5",
      "transmission": "Manual",
      "engine": "Diesel",
      "image": "fiat-500.jpg"
    },
    {
      "id": 4,
      "name": "Porsche 911 Carrera GTS Cabriolet",
      "type": "SPORTS",
      "price": 1587.38,
      "seats": "2",
      "transmission": "Automatic",
      "engine": "Petrol",
      "image": "porsche-911.jpg"
    }
  ],
  rentedCard: [],
  rentedDates: {
    "from": undefined,
    "to": undefined
  },
};

const rentCarReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_RENTED_CAR:
      return {
        ...state,
        rentedCard: action.payload
      };
    case SET_RENTED_DATES:
      return {
        ...state,
        rentedDates: action.payload
      };
    default:
      return state;
  }
}

export default rentCarReducer;