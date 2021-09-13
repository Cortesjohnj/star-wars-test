import { NEXT, PREV, GETDATA } from './actions';

const initialState = {
  page: 1,
  data: [],
};

const reducer = function (state = initialState, action) {
  if (action.type === NEXT) {
    return { ...state, page: state.page + 1 };
  } else if (action.type === PREV) {
    const prevPage = state.page === 1 ? (state.page = 1) : state.page - 1;
    return { ...state, page: prevPage };
  } else if (action.type === GETDATA) {
    return { ...state, data: action.payload };
  }
  return state;
};

export default reducer;
