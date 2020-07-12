import {SEARCH_RESULT, ERROR, CLEAR_ERROR, SELECT, DELETE } from "./Types.js";
const selectedFromStorage = localStorage.getItem('selected');
const selected = JSON.parse(selectedFromStorage)
const initState = {
      searchResult:null,
      selected: selected || {},
      error:null,
};
export const TournamentReducer = (state = initState, action) => {
      switch (action.type) {
            case SEARCH_RESULT:
                  return {
                        ...state,
                        searchResult: action.payload,
                  };
            case ERROR:
                  return {
                        ...state,
                        error: action.payload,
                  };
            case CLEAR_ERROR:
                  return {
                        ...state,
                        error: null,
                  };
            case SELECT:
                  return {
                        ...state,
                        selected: {...action.payload},
                  };
            case DELETE:
                  return {
                        ...state,
                        selected: {...action.payload},
                  };
            default:
                  return state;
      }

};
