import { call, put } from 'redux-saga/effects'
import { requestGetUser } from 'store/sagas/userRequests'
import { setUser } from 'store/sagas/userReducer'

export function* handleGetUser(action) {
    try {
      //Calling API Method
      //yield: similar to await
      // allows to execute one after another
      const response = yield call(requestGetUser)

      const { data } = response 

      //Dispatching recevied data into reducer
      yield put(setUser(data))

    } catch (error) {
      console.log("error on handler",error);
    }
}