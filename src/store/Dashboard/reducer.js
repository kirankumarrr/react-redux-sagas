import {
    CHECK,
} from 'store/types'
const initialState = {
    a : 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHECK:
            return { ...state, a: action.payload };
        default:
            return state;
    }
}