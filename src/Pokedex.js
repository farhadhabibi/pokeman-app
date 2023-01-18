import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 class="Pokedex-winner">Winner Hand</h1>
        } else {
            title = <h1 class="Pokedex-loser">Loser Hand</h1>
        }
        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {
                        this.props.pokeArr.map(el => {
                            return <Pokecard
                                id={el.id}
                                name={el.name}
                                type={el.type}
                                exp={el.base_experience}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Pokedex;