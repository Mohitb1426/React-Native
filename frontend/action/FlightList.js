import axios from 'axios';

export const getPeople = () => {
  return dispatch => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        dispatch({
          type: 'GET_PEOPLE_FULFILLED',
          payload: res.data,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  };
};
