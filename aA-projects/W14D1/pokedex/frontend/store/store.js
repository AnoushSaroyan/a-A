import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// debugger
// const initialState = {
//     entities: {
//         pokemon: {
//             1: {
//                 name: "Bulbasaur",
//                 image_url: "/assets/pokemon_snaps/110.png",
//             },
//             2: {
//                 name: "Ivysaur",
//                 image_url: "/assets/pokemon_snaps/112.png",
//                 attack: 62,
//                 defense: 63,
//                 poke_type: "grass",
//                 moves: [
//                     "tackle",
//                     "vine whip",
//                     "razor leaf"
//                 ],
//                 item_ids: [3, 4, 5],
//             },
//             3: {
//                 name: "Venusaur",
//                 image_url: "/assets/pokemon_snaps/130.png",
//             },
//             // ... more pokemon
//         },
//         items: {
//             3: {
//                 pokemon_id: 2,
//                 name: "Berry",
//                 price: 5,
//                 happiness: 99,
//                 image_url: "/assets/pokemon_berry.svg",
//             },
//             4: {
//                 pokemon_id: 2,
//                 name: "Egg",
//                 price: 5,
//                 happiness: 99,
//                 image_url: "/assets/pokemon_egg.svg",
//             },
//             5: {
//                 pokemon_id: 2,
//                 name: "Potion",
//                 price: 5,
//                 happiness: 99,
//                 image_url: "/assets/pokemon_potion.svg",
//             },
//             // ... more items
//         }
//     },
//     ui: {
//         errors: {},
//         loading: {},
//     }
// };
const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, logger));

export default configureStore;

