const initialstate = {
  fetching: false,
  fetched: false,
  user: {
    id: null,
    name: null,
    age: null
  },
  error: null
};

export default function userReducer(state=initialstate, action){
  switch (action.type) {
    case "FETCH_USERS_PENDING":
      return {...state, fetching:true}
    case "FETCH_USERS_FULFILLED":
      return {...state, fetching:false, fetched: true, user: action.payload}
    case "FETCH_USERS_REJECTED":
      return {...state, fetching:false, fetched: false, error: action.payload}
    case "SET_USER_NAME":
      return {...state, user: {...state.user, name: action.payload}}
    case "SET_USER_AGE":
      return {...state, user: {...state.age, age: action.payload}}
    default:
      return state;
  }
}
