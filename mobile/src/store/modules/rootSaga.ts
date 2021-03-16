import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import facebook from './facebook/sagas';
import dashboard from './dashboard/sagas';
import companies from './companies/sagas';
import company from './company/sagas';
import rewards from './rewards/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    user,
    facebook,
    dashboard,
    companies,
    company,
    rewards
  ]);
}
