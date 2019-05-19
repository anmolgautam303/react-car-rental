import {
    SET_RENTED_CAR,
    SET_RENTED_DATES
} from '../constants/Rent';

export const setRentedCard = payload => {
    return {
        type: SET_RENTED_CAR,
        payload: payload
    }
}

export const setRentedDates = payload => {
    return {
        type: SET_RENTED_DATES,
        payload: payload
    }
}