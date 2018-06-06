import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

import './styles/app.css';
import Landing from './containers/landing';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>

            <Switch>
                <Route path="/" component={Landing} />
            </Switch>

        </BrowserRouter>
    </Provider>

    , document.getElementById('root')
);
registerServiceWorker();
