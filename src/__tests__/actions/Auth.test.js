import {
  SIGN_UP_USER
} from '../../constants/Auth';

import * as actions from '../../actions/Auth';

it('creates an action to call the `session` api and get url', () => {
  const response = {"verification":{"id":"b181d597-73af-442b-883f-eb888669c3ae","url":"https://magic.veriff.me/v/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX2lkIjoiYjE4MWQ1OTctNzNhZi00NDJiLTg4M2YtZWI4ODg2NjljM2FlIiwiaWF0IjoxNTU4Mzc2NTY2LCJleHAiOjE1NTg5ODEzNjZ9.0YIzkSNQiaPadyZzZXYrOZOvX5KgXFt63ROZj9tAvoA"}};

  const expectedAction = { type: SIGN_UP_USER, payload: response };

  expect(actions.signUpUser(response)).toEqual(expectedAction);
});