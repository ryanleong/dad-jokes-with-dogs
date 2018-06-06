import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCorgi } from '../actions';

class Corgi extends Component {

    componentDidMount() {
        this.props.fetchCorgi();
    }

    render() {

        if(!this.props.image.data) {
            return (
                <p className="loading">Loading...</p>
            )
        }

        return (
            <img src={this.props.image.data.message} alt="" className="cover img" />
        );
    }
}

function mapStateToProps(state) {
    return { image: state.image };
}

export default connect(mapStateToProps, { fetchCorgi })(Corgi);