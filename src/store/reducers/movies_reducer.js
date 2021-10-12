import {GET_MOVIES, GET_MOVIES_BY_ID, SEARCH_MOVIES,LOADING} from '../types'

const initialState = {
    search: '',
    movies: [],
    movie: [],
    loading: false
}

export default function movieReducer(state=initialState,action){
    switch(action.type){
        case SEARCH_MOVIES:
            return {...state, search: action.payload, loading: false}
        case GET_MOVIES:
            return {...state, movies: action.payload, loading: false}
        case GET_MOVIES_BY_ID:
            return {...state, movie: action.payload, loading:false}
        case LOADING:
            return {...state, loading:true}
        default:
            return state
    }

}