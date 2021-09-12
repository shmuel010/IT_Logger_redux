import {
    GET_LOGS,
    ADD_LOG,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR,
    LOGS_ERROR,
    GET_TECHS,
    ADD_TECH
} from "../actions/types";


const initialSate = {
    techs: null,
    loading:false,
    error:null
}
export default (state = initialSate,action)=>{
    switch (action.type){
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_TECHS:
            return {
                loading: false,
                ...state,
                techs: action.payload
            }
        case ADD_TECH:
            return {
                loading: false,
                ...state,
                techs: [...state.techs, action.payload]
            }
        case DELETE_TECH:
            return {
                loading: false,
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload),
            }
        case TECHS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}