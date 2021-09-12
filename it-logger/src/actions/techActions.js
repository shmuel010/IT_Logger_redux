import {GET_LOGS, ADD_LOG, DELETE_TECH, SET_LOADING, TECHS_ERROR, LOGS_ERROR, GET_TECHS, ADD_TECH} from "./types";

//Get techs from server

//set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (err) {
        console.log("error!!")
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }


};
export const addTechs = (tech) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/techs',
            {
                method:'POST',
                body: JSON.stringify(tech),
                headers:{
                    'Content-Type': 'application/json'
                }

            });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (err) {
        console.log("error!!")
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
}
export const deleteTechs = (id) => async dispatch => {
    try {
        setLoading();

        await fetch('/techs',
            {
                method:'DELETE',

            });

        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (err) {
        console.log("error!!")
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
}