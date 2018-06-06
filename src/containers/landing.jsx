import React, { Component } from 'react';

import Joke from '../components/joke';
// import Shibe from '../components/shibe';
import Corgi from '../components/corgi';

class Landing extends Component {
    render() {
        return (
            <div className="content">
                <Corgi />
                <Joke />
            </div>
        );
    }
}

export default Landing;