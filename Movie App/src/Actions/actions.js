import axios from 'axios';

export const getInitialData = (page) => {
    let req = axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}&sort_by=download_count`);
    return dispatch => {
        req.then(res => {
            dispatch({
                type : 'get_movies',
                payload: res.data.data.movies
            })
        })
    }
}

export const previous = (page) => {
    return {
        type: 'previous',
        payload: page-1
    }

}

export const next = (page) => {
    return {
        type: 'next',
        payload: page+1
    }

}

export const changePage = (page) => {
    return {
        type: 'change_page',
        payload: page
    }
}

export const setPage = (num) => {
    return {
        type: 'set_page',
        payload: num
    }
}

export const movieDetails = (id) => {
    let req = axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    // req.then(res=>console.log(res))
    return dispatch => {
        req.then(res =>{
            dispatch({
                type: 'movie_details',
                payload: res.data.data.movie
            })
        })
    }
}

