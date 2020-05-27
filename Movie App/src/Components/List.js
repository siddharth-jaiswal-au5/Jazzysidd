import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getInitialData, previous, next, changePage, setPage } from '../Actions/actions'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import ListItem from './ListItem'



class List extends Component {
    componentDidMount = () => {
        console.log((this.props.match.params.page))
        if (this.props.page == Number(this.props.match.params.page)) {
            this.props.getInitialData(Number(this.props.match.params.page))
        }
        else {
            this.props.setPage(Number(this.props.match.params.page))
        }
        window.scrollTo(0, 0)

    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.page != Number(this.props.match.params.page)) {
            this.componentDidMount()
        }
    }
    render() {
        return (
            <div className="container text-center">
                <header className="row justify-content-center mt-3">     
                            {this.props.page <= 1
                                ?
                                <button className="btn btn-sm btn-outline-success disabled m-1" >
                                    Prev
                                </button>
                                :
                                <Link to={"/page/" + (this.props.page - 1)}>
                                    <button className="btn btn-sm btn-outline-success m-1" onClick={() => this.props.previous(this.props.page)}>
                                        Prev
                                    </button></Link>
                            }
                            <Link to={"/page/" + (this.props.page)}><button className="btn btn-sm btn-outline-success m-1" onClick={() => this.props.changePage(this.props.page)}>{this.props.page}</button></Link>
                            <Link to={"/page/" + (this.props.page + 1)}><button className="btn btn-sm btn-outline-success m-1" onClick={() => this.props.changePage(this.props.page + 1)}>{this.props.page + 1}</button></Link>
                            <Link to={"/page/" + (this.props.page + 2)}><button className="btn btn-sm btn-outline-success m-1" onClick={() => this.props.changePage(this.props.page + 2)}>{this.props.page + 2}</button></Link>
                            <Link to={"/page/" + (this.props.page + 3)}><button className="btn btn-sm btn-outline-success m-1" onClick={() => this.props.changePage(this.props.page + 3)}>{this.props.page + 3}</button></Link>
                            <Link to={"/page/" + (this.props.page + 4)}><button className="btn btn-sm btn-outline-success m-1" onClick={() => this.props.changePage(this.props.page + 4)}>{this.props.page + 4}</button></Link>
                            <Link to={"/page/" + (this.props.page + 1)}><button className="btn btn-sm btn-outline-success m-1" onClick={() => this.props.next(this.props.page)}>Next</button></Link>
                </header>
                <div className="row text-center mt-5">
                    {this.props.movies.map((a, i) => {
                        return <ListItem a={a} i={i} key={i} />
                    })}
                </div>
            </div>

        );
    }
}

const getState = (state) => {
    return {
        movies: state.movies,
        page: state.page
    }

}

const changeState = (dispatch) => {
    return bindActionCreators({ getInitialData, previous, next, changePage, setPage }, dispatch)
}

export default connect(getState, changeState)(List);