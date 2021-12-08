import { useEffect, useState } from "react";
import "./Test4.css";

const Test4 = () => {
    const [showInstructions, setShowInstructions] = useState(false);
    const [newGame, setNewGame] = useState([]);
    const [found, setFound] = useState(0);
    const [score, setScore] = useState("");
    useEffect(() => {
            let xCoord = Math.floor(Math.random() * 15);
            let yCoord = Math.floor(Math.random() * 9);
            let game = new Array(9);
            game.fill([]);  
            game = game.map(set => {
                const arr = new Array(15);
                arr.fill(null);
                return arr;
            });
            game[yCoord][xCoord] = "x";
            setNewGame(game);
            if(found === 1) {
                setScore("You've found the X 1 time!")
            } else {
                setScore(`You've found the X ${found} times!`)
            }
        },[found]);

    return (
        <section>
            <h2>Find the Hidden X Game:</h2>
            <button className="instructionsButton" onClick={() => setShowInstructions(bool => !bool)}>Show/Hide Instructions</button><br /><br />
            {showInstructions && <section>
                <hr />
                    <h3>Instructions:</h3>
                    <p>Your task is to build a mini game where a player can guess all 50 US states...</p>
                    <h4>You must complete the following:</h4>
                    <ul>
                        <li>Create an input box where the user can type any case insensitive state and it will accept the answer,</li>
                        <li>Create text box that will store all the correct answers the player has given,</li>
                        <li>The text box should not accept duplicate values, regardless of case sensitvity,</li>
                        <li>Create a restart button that will reset the game,</li>
                        <li>A give up button that will show the remaining answers that the player did not guess,</li>
                        <li>A counter that will tell the player how many states he has correctly guessed</li>
                    </ul>
                    <h4>Challenge:</h4>
                    <p>Add a timer that when it reaches 0 will disable the input box until restart is pressed</p>
                <hr />
                </section>}

            <p>{score}</p>
            <table className="gameTable">
            {newGame.map(row => {
                return (
                    <tr>{
                            row.map(tile => {
                                if(tile === "x") {
                                    return <td><button className="X" onClick={() => setFound(num => num + 1)}>X</button></td>
                                }
                                return <td>{tile}</td>
                            })
                        }</tr>
                )
            })}
            </table>
        </section>
    )
}

export default Test4;