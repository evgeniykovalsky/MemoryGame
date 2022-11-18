import React, {useState, useEffect, useContext} from 'react';
import '../styles/gamefield.css';
import GameFieldInner from './GameFieldInner';
import DetailsInner from './DetailsInner';
import Timer from './Timer';
import useTimer from '../hooks/useTimer';
import { GameContext } from './Context';


export default function GameField () {
    const data = useContext(GameContext);
    
   
    //const [startGame, isStartGame] = useState(null);
    const [minutes, seconds] = useTimer(data.selectLevel);

    useEffect(()=> {
        if (minutes ===0 && seconds ===0) {data.isStartGame(true);
        console.log(data.startGame)};
    }, [minutes, seconds])
    
    
    return (
        <>
            <h2>Рівень складності {data.selectLevel.title} </h2>
            {
                data.selectLevel.title && <Timer minutes = {minutes} seconds = {seconds}/>
            }
            
            <div className = "field">
                <GameFieldInner startGame = {data.startGame} />
            </div>
            <div className = "details">
                <DetailsInner/>
            </div>
        </>
    );
}