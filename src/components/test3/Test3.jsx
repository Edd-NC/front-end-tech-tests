import "./Test3.css";
import { useEffect, useState } from "react";

const Test3 = () => {
    const states = ['Alabama','Alaska', 'Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
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
            <button onClick={() => {
                setCorrectAnswers([]);
                setAnswer("");
            }}>Restart?</button><br /><br />
            <label for="answerInput">Guess Here:</label><br />
            <input id="answerInput" type="text" value={answer} onChange={event => {
                setAnswer(event.target.value)
                
            }} /> <br /><br />
            <p>Total: {correctAnswers.length} / 50</p>
            <textarea cols="100" rows="10" value={correctAnswers.join(", ")} /><br /><br />
            <button onClick={() => {
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