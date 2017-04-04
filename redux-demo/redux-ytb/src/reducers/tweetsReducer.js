const initialstate = {
  fetching: false,
  fetched: false,
  tweets: [],
  error: null
};

export default function reducer (state=initialstate, action) {
  switch (action.type) {
    case "FETCH_TWEETS_PENDING":
      return {...state, fetching:true}
    case "FETCH_TWEETS_FULFILLED":
      return {...state, fetching:false, fetched: true, tweets: action.payload}
    case "FETCH_TWEETS_REJECTED":
      return {...state, fetching:false, fetched: false, error: action.payload}
    case "ADD_TWEET":
      return {...state, tweets:[...state.tweets, action.payload]}
    default:
      return state;
  }
}
