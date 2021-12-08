import { useEffect, useState } from "react";
import "./Test4.css";

const Test4 = () => {
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