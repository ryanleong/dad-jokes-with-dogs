import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchImage, fetchJoke } from '../actions';

class Items extends Component {

    componentDidMount() {
        this.load();
    }

    load() {
        this.props.fetchJoke();
        this.props.fetchImage();
    }

    render() {

        if(!this.props.image.data || !this.props.joke.data) {
            return (
                <p className="loading">Loading...</p>
            )
        }

        return (
            <div className="item" onClick={() => this.load()}>
                <img src={this.props.image.data.message} alt="" className="cover img" />

                <h4 className="joke">
                    {this.props.joke.data.joke}
                </h4>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        joke: state.joke, 
        image: state.image
    };
}

export default connect(mapStateToProps, { fetchJoke, fetchImage })(Items);