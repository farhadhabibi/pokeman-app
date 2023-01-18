import React, { Component } from 'react';
import './Pokecard.css'

const convertNum = function (num) {
    const str = String(num);
    return str.padStart(3, 0);

}

class Pokecard extends Component {
    render() {
        const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${convertNum(this.props.id)}.png`

        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} />
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export { convertNum };
export default Pokecard;


// render() {
//     const { data } = this.props;
//     return (
//         <div className="Pokecard">
//             {
//                 data.map(el => {
//                     const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${convertNum(el.id)}.png`
//                     return (
//                         <div key={el.id} className="Pokecard-card">
//                             <h1 className="Pokecard-header">{el.name}</h1>
//                             <img className="Pokecard-img" src={img} />
//                             <p>Type: {el.type}</p>
//                             <p>EXP: {el.base_experience}</p>
//                         </div>
//                     )

//                 })
//             }
//         </div>
//     )