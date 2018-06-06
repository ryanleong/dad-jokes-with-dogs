import React, { Component } from 'react';

import Items from '../components/items';

class Landing extends Component {

    render() {
        return (
            <div className="content">
                <p className="instructions">Click image to get another!</p>
                <Items />

            </div>
        );
    }
}

export default Landing;