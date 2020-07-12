import {SEARCH_RESULT, ERROR, CLEAR_ERROR } from "./Types.js";

const initState = {
      searchResult:null,
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
            default:
                  return state;
      }

};
