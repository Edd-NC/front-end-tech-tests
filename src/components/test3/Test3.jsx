import "./Test3.css";
import { useEffect, useState } from "react";

const Test3 = () => {
    const states = ['Alabama','Alaska', 'Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

    const [showInstructions, setShowInstructions] = useState(false);
    const [answer, setAnswer] = useState("");
    const [correctAnswers, setCorrectAnswers] = useState([]);

    useEffect(() => {
        const regex = new RegExp(`^${answer}$`, "i");
        states.forEach(state => {
            const value = state[0].toUpperCase() + state.slice(1).toLowerCase();
            if(regex.test(state) && !correctAnswers.some(state => regex.test(state))) {
                setCorrectAnswers(answers => {
                    const newAnswers = [...answers];
                    const newState = states.filter(state => regex.test(state))
                    newAnswers.push(newState[0]);
                    return newAnswers;
                })
                setAnswer("");
            }
        })
    },[answer])
    return (
        <section>
            <h2>50 US States Game:</h2>
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
            <button className="t3button" onClick={() => {
                setCorrectAnswers([]);
                setAnswer("");
            }}>Restart?</button><br /><br />
            <label for="answerInput">Guess Here:</label><br />
            <input id="answerInput" type="text" value={answer} onChange={event => {
                setAnswer(event.target.value)
                
            }} /> <br /><br />
            <p>Total: {correctAnswers.length} / 50</p>
            <textarea cols="100" rows="10" value={correctAnswers.join(", ")} disabled /><br /><br />
            <button className="t3button" onClick={() => {
                states.forEach(state => {
                    if (!correctAnswers.includes(state)) {
                        setCorrectAnswers(answers => {
                            const newAnswers = [...answers];
                            newAnswers.push(state);
                            return newAnswers;
                        })
                    }
                })
            }}>Give Up?</button>
            </section>
    )
}

export default Test3;