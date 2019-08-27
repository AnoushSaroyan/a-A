export const selectAllPokemon = (state) => {
    // debugger;
    return Object.values(state.entities.pokemon);
}

export const selectAllItems = (state, pokemon) => {
    const items = state.entities.items;
    if (pokemon) {
       return pokemon.item_ids.map(id => items[id]);
    } else {
       return [];
    }
    // return items.filter(item => item.pokemon.id === pokemonId);
}

export const selectItem = (state, itemId) => {
    const items = state.entities.items;
    return items[itemId];
}



// Sample State Shape
// {
//     entities: {
//         pokemon: {
//             1: {
//                 name: Bulbasaur,
//                     image_url: '/assets/110.png',
//       },
//             2: {
//                 name: 'Ivysaur',
//                     image_url: '/assets/pokemon_snaps/112.png',
//                         attack: 62,
//                             defense: 63,
//                                 poke_type: 'grass',
//                                     moves: [
//                                         'tackle',
//                                         'vine whip',
//                                         'razor leaf'
//                                     ],
//                                         item_ids: [3, 4, 5],
//       },
//             3: {
//                 name: 'Venusaur',
//                     image_url: '/assets/130.png',
//       },
//             // ... more pokemon
//         },
//         items: {
//             3: {
//                 pokemon_id: 2,
//                     name: 'Berry',
//                         price: 5,
//                             happiness: 99,
//                                 image_url: '/assets/pokemon_berry.svg',
//       },
//             4: {
//                 pokemon_id: 2,
//                     name: 'Egg',
//                         price: 5,
//                             happiness: 99,
//                                 image_url: '/assets/pokemon_egg.svg',
//       },
//             5: {
//                 pokemon_id: 2,
//                     name: 'Potion',
//                         price: 5,
//                             happiness: 99,
//                                 image_url: '/assets/pokemon_potion.svg',
//       },
//             // ... more items
//         }
//     },
//     ui: {
//         loading: { },
//     }
// }


