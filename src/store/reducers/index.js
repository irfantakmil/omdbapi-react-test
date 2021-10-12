import {combineReducers} from 'redux'
import movieReducer from './movies_reducer'

const appReducers = combineReducers({
    movies: movieReducer
})

export default appReducers;