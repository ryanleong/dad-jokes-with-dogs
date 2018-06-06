import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchJoke } from '../actions';

class Joke extends Component {

    componentDidMount() {
        this.props.fetchJoke();
    }

    render() {
        if(!this.props.joke.data) {
            return (
                <p className="loading">Loading...</p>
            )
        }

        return (
            <h4 className="joke">
                {this.props.joke.data.joke}
            </h4>
        );
    }
}

function mapStateToProps(state) {
    return { joke: state.joke };
}

export default connect(mapStateToProps, { fetchJoke })(Joke);