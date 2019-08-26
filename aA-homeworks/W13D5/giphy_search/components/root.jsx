import React from 'react';
import { Provider } from 'react-redux';

import GiphysSearchContainer from './giphys_search_container';

// testing fetchSearchGiphys from util
// import { fetchSearchGiphys } from '../util/api_util'
// window.fetchSearchGiphys = fetchSearchGiphys
// fetchSearchGiphys("puppies").then((res) => console.log(res.data));

//testing receiveSearchGiphys
// import { receiveSearchGiphys } from '../actions/giphy_actions';
// window.receiveSearchGiphys = receiveSearchGiphys;

// testing the store
// import configureStore from '../store/store';
// const store = configureStore();
// window.store = store;

// testing fetchSearchGiphys from the action file
// import { fetchSearchGiphys } from '../actions/giphy_actions';
// window.fetchSearchGiphys = fetchSearchGiphys;

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <GiphysSearchContainer />
        </Provider>
    );
};

export default Root;




