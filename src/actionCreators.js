import { NEXT, PREV, GETDATA } from './actions';
import axios from 'axios';

export function next() {
  return { type: NEXT };
}

export function prev() {
  return { type: PREV };
}

export function getData(page) {
  return function (dispatch) {
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then(function (response) {
        dispatch({ type: GETDATA, payload: response.data.results });
      });
  };
}
