import { combineReducers } from 'redux';
// import catalog from "store/catalog/reducer";
import dashboard from "store/Dashboard/reducer";
import userReducer from 'store/sagas/userReducer';

export default combineReducers({
    users:userReducer,
    dashboard
});