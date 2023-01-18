import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokeArr: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokeArr];
        while (hand1.length < hand2.length) {
            const index = Math.floor(Math.random() * hand2.length);
            const item = hand2.splice(index, 1)[0];
            hand1.push(item);
        }
        const exp1 = hand1.reduce((accu, el) => accu + el.base_experience, 0);
        const exp2 = hand2.reduce((accu, el) => accu + el.base_experience, 0);

        return (
            <div className="Pokegame">
                <Pokedex pokeArr={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokeArr={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        )
    }
}

export default Pokegame;


// const randomArr = function (arr) {
//     return arr.sort(() => Math.random() - 0.5)
// }

{/* {
                    randomArr(pokeArr).map(el => {
                        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${convertNum(el.id)}.png`
                        return (
                            <div key={el.id} className="Pokecard-card">
                                <h1 className="Pokecard-header">{el.name}</h1>
                                <img className="Pokecard-img" src={img} />
                                <p>Type: {el.type}</p>
                                <p>EXP: {el.base_experience}</p>
                            </div>
                        )

                    })
                } */}