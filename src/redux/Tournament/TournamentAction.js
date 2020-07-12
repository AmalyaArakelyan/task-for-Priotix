import { SEARCH_RESULT, ERROR, CLEAR_ERROR } from './Types';
import axios from 'axios';
import { API } from "../../config/config.json";

export const searchTournament = () => {
    const result = [];
    
    return async (dispatch, getState) => {
        const keyword= getState().search.keyword
        if(!keyword){
            return dispatch({
                type: CLEAR_ERROR
            });
        }
        if(keyword && keyword.length < 2){
           return dispatch({
                type: ERROR,
                payload: {
                    type:'warning',
                    message:"Text must contain min. 2 characters"
                }
            });
        }
        
        try {
            const response = await axios.get(`${API}/search`, {
                'params': {
                    q:keyword,
                    index:'tournament'
                }
            });
            console.log(response, 'brands')
            debugger
            if(response.data && response.data.length === 0){
                dispatch({
                    type: ERROR,
                    payload: {
                        message:"No search result",
                        type:'info'}
                })
            }else{
                dispatch({
                    type: SEARCH_RESULT,
                    payload: response
                });
                dispatch({
                    type: CLEAR_ERROR
                });
            }
            
        
        } catch (err) {
        
            dispatch({
                type: ERROR,
                payload: {...err, type:'error'}
            })
        }
        
    };
};



