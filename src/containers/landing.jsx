import React, { Component } from 'react';
import { connect } from 'react-redux';

import Joke from '../components/joke';
// import Shibe from '../components/shibe';
import Corgi from '../components/corgi';

import { fetchShibe, fetchJoke } from '../actions';

class Landing extends Component {
    reload() {
        this.props.fetchJoke();
        this.props.fetchShibe();
    }

    render() {
        return (
            <div className="content" onClick={() => this.reload() }>
                <Corgi />
                <Joke />
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
export default connect(mapStateToProps, { fetchJoke, fetchShibe })(Landing);