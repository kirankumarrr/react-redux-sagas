export const GET_USER = "GET_USER"
export const SET_USER = "SET_USER"

//*********ACTIONS********** */
export const getUser = () => { 
  return { type : GET_USER }
}
export const setUser = (users) => { 
  return { type : SET_USER, payload: users }
}
//*********REDUCER********** */

const initialState  = {
  users : undefined
}

export default function (state = initialState, action) {
  console.log('action.type :', action);
  switch (action.type) {
      case SET_USER:
          return { ...state, users: action.payload };
      default:
          return state;
  }
}