import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SEARCH_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT
} from './types';

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();
//
//     const res = await fetch('/logs');
//     const data = await res.json();
//
//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };


// Get logs from server
export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        console.log("error!!")
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

// // Add new log
export const addLog = log => async dispatch => {
    console.log("insert add log at logAction")
    try {
        setLoading();

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log("succed to post fetch")

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (err) {
        console.log("fail to post fetch")

        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};
//
// // Delete log from server
export const deleteLog = id => async dispatch => {
    try {
        setLoading();

        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

// // Update log on server
export const updateLog = log => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        console.log(data)

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};
//
// Search server logs
export const searchLogs = text => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

// // Set current log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    };
};
//
// // Clear current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    };
};

// // Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
