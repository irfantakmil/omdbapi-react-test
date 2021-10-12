import React from 'react'
import Search from '../search'
import MovieContainer from '../movieContainer'
import {useSelector} from 'react-redux'
import Loader from '../../utils/loader'

const Home = () => {
    const loading = useSelector(state=>state.loading)

    return (
        <div className="container">
            <Search/>
            {
                loading ? <Loader/> : <MovieContainer/>
            }
        </div>
    )
}

export default Home