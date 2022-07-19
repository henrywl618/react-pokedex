import Pokedex,{defaultPokedex} from "./Pokedex";
import {shuffle} from "./helpers";

const PokeGame = () =>{
    const shuffledPokedex = shuffle(defaultPokedex);
    const hand1 = shuffledPokedex.slice(0,4);
    const hand2 = shuffledPokedex.slice(4,8);

    const hand1TotalEXP = hand1.reduce( (previousValue,{base_experience}) => previousValue+base_experience,0);
    console.log(hand1TotalEXP);
    const hand2TotalEXP = hand2.reduce( (previousValue,{base_experience}) => previousValue+base_experience,0);

    let hand1Wins = false; 
    let hand2Wins = false;
    if(hand1TotalEXP > hand2TotalEXP){
        hand1Wins = true;
    } else {
        hand2Wins = true;
    };

    return (
        <>
        <h3>Hand 1</h3>
        <Pokedex key="player1" pokedex={hand1} totalEXP={hand1TotalEXP} isWinner = {hand1Wins}/>
        <h3>Hand 2</h3>
        <Pokedex key="player2" pokedex={hand2} totalEXP={hand2TotalEXP} isWinner = {hand2Wins}/>
        </>
    );

};

export default PokeGame;