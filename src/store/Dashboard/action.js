//TODO : Create methods for Auth
/**
 * SingUP
 * Login
 * Logout
*/

import {
    CHECK
} from 'store/types'
import axios from "axios";

export const checkAction = (data) => async dispatch => {
    dispatch({
        type: CHECK,
        payload:1
    });
};