let initialState = {
    movies:[],
    movieDetails: [],
    movieTorrents: [],
    page: 1
}

export function appReducer(state=initialState, action){
    let stateCopy = {...state}
    switch (action.type){
        case "get_movies":
            stateCopy.movies = action.payload
            return stateCopy
        case "previous":
            stateCopy.page = action.payload
            return stateCopy
        case "next":
            stateCopy.page = action.payload
            return stateCopy
        case "change_page":
            stateCopy.page = action.payload
            return stateCopy
        case "set_page":
            stateCopy.page = action.payload
            return stateCopy
        case "movie_details":
            stateCopy.movieDetails = action.payload
            stateCopy.movieTorrents = action.payload.torrents
            return stateCopy
        default:
            return stateCopy
    }
}

