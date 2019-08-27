import React from 'react' 

class PokemonForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            image_url: "",
            poke_type: "bug",
            attack: "",
            defense: "",
            move_1: "",
            move_2: ""
        };

        this.types = [
            'fire',
            'electric',
            'normal',
            'ghost',
            'psychic',
            'water',
            'bug',
            'dragon',
            'grass',
            'fighting',
            'ice',
            'flying',
            'poison',
            'ground',
            'rock',
            'steel'
        ]
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // create the new pokemon and call this.props.createPokemon(pokemon)
        const pokemon = {
            name: this.state.name, 
            image_url: this.state.image_url, 
            poke_type: this.state.poke_type, 
            attack: this.state.attack,
            defense: this.state.defense,
            moves: [this.state.move_1, this.state.move_2]
        }
        this.props.createPokemon(pokemon);
    }


    render() {
        const typesmapped = this.types.map(type => 
            <option value={type}>{type}</option>
        )



        return <form onSubmit={ this.handleSubmit }>
            <input type="text" 
            placeholder="Name"
            value={this.state.name} 
            onChange={ this.update("name")}
            />

            <input type="text"
                placeholder="Image Url"
                value={this.state.image_url}
                onChange={this.update('image_url')}
            />          
            <select
                value={this.state.poke_type}
                onChange={this.update('poke_type')}>
                    {typesmapped}
            </select>
                
            <input type="number"
                placeholder="Attack"
                value={this.state.attack}
                onChange={this.update('attack')}
            />

            <input type="number"
                placeholder="Defense"
                value={this.state.defense}
                onChange={this.update('defense')}
            />

            <input type="text"
                placeholder="Move 1"
                value={this.state.move_1}
                onChange={this.update('move_1')}
            />  
            
            <input type="text"
                placeholder="Move 2"
                value={this.state.move_2}
                onChange={this.update('move_2')}
            /> 

            <button>Create Pokemon</button>

        </form>
    }
}

export default PokemonForm