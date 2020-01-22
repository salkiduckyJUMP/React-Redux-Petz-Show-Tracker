import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

import PetzReducer from './store/reducers/petzReducer';
// import ShowPointsReducer from './store/reducers/showPointsReducer';
// import TitleReducer from './store/reducers/titleReducer';

const rootReducer = combineReducers ({
    PetzReducer: PetzReducer,
    // ShowPointsReducer: ShowPointsReducer,
    // TitleReducer: TitleReducer
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

