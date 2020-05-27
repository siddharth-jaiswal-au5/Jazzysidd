import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css'

class ListItem extends Component {
    state = {}
    render() {
        return (
            <div key={this.props.i} className="col-3 text-center w-100">
                <Link to={`/movie/${this.props.a.id}`}>
                    <div className="tile w-100">
                        <img src={this.props.a.medium_cover_image} alt={this.props.a.title} className="image" />
                        <div className="overlay">{this.props.a.title}</div>
                    </div>
                    {/* <p className="text-truncate font-weight-lighter mt-2 col-8 offset-2 ">{this.props.a.title}</p> */}
                </Link>
            </div>
        );
    }
}

export default ListItem;