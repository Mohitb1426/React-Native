const initialState = {
  people: [],
  loading: true,
  errorMessage: '',
};

const GET_PEOPLE = 'GET_PEOPLE';
const GET_PEOPLE_FULFILLED = 'GET_PEOPLE_FULFILLED';
const GET_PEOPLE_REJECTED = 'GET_PEOPLE_REJECTED';

const flightListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_FULFILLED:
      console.log('ok2');
      return { ...state, people: action.payload, loading: action.loading };
    default:
      return state;
  }
};

export default flightListReducer;
