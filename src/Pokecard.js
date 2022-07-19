import './Pokecard.css'

const Pokecard = ({id, name, type, base_experience}) => (
    <div className="Pokecard">
        <h3 className="Pokecard-name">{name}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`${name} picture`} />
        <p className="Pokecard-text">Type: {type}</p>
        <p className="Pokecard-text">EXP: {base_experience}</p>
    </div>
);

export default Pokecard;