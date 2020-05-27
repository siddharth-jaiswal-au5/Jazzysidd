import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { movieDetails } from '../Actions/actions'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class Details extends Component {
    componentDidMount = () => {
        this.props.movieDetails(Number(this.props.match.params.id))
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.match.params.id != Number(this.props.match.params.id)){
            this.componentDidMount()
        }
    }
    render() {
        console.log(this.props.movie)
        return (
            <div className="text-light" style={{ height:'92vh', backgroundImage: `url(${this.props.movie.background_image})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
                <div className="row py-5">
                    <div className="col-4 text-center">
                        <img className="rounded mt-3" src={this.props.movie.large_cover_image} alt="" height="430vh" />
                        
                    </div>
                    <div className="col-7">
                        <div className="mt-3 ml-5">
                            <h1>{this.props.movie.title}</h1>
                            <p><strong>Year: </strong>{this.props.movie.year}</p>
                            <p><strong>Language: </strong>{this.props.movie.language}</p>
                            <p><strong>Rating: </strong>{this.props.movie.rating}/10 ({this.props.movie.like_count} votes)</p>
                            <p className="text-wrap"><strong>Synopsis: </strong>  {this.props.movie.description_full}</p>
                            <p><strong>MPA Rating: </strong>{this.props.movie.mpa_rating}</p>
                            <p><strong>Runtime: </strong>{this.props.movie.runtime} mins.</p>
                            <p><i> Watch trailer <a className='text-success' target="_blank" href={`https://www.youtube.com/watch?v=${this.props.movie.yt_trailer_code}`}>here</a>.</i></p>
                            <div>
                                <p><strong>Downloads:</strong> <i>({this.props.movie.download_count} times downloaded)</i> </p>
                                {this.props.torrents.map((e,i)=>{
                                    return <a key={i} href={e.url} className="btn btn-sm btn-outline-light m-2" target="_blank">{e.quality} {e.type}</a>
                                })}
                            </div>

                        </div>

                    </div>
                </div>
            </div>);
    }
}


const getState = (state) => {
    return {
        movie: state.movieDetails,
        torrents: state.movieTorrents
    }

}

const changeState = (dispatch) => {
    return bindActionCreators({ movieDetails }, dispatch)
}

export default connect(getState, changeState)(Details);
