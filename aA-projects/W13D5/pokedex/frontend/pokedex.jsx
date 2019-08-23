import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", function (){
    const store = configureStore();
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootEl);
    window.store = store
    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.getState = store.getState; 
    window.dispatch = store.dispatch;
    window.selectAllPokemon = selectAllPokemon;
})

//testing 
import { fetchAllPokemon, requestAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selector';
