import "./Test6.css";
import "../instructionsButton.css";
import { useState } from "react";

const Test6 = () => {
    const [showInstructions, setShowInstructions] = useState(false);
    return (
        <section>
            <h2>Build a Pseudo Instant Messaging Service</h2>
            <button className="instructionsButton" onClick={() => setShowInstructions(bool => !bool)}>Show/Hide Instructions</button><br /><br />
            {showInstructions && <section>
                <hr />
                    <h3>Instructions:</h3>
                    <p>Your task is to build messaging service, on one screen!</p>
                    <h4>You must complete the following:</h4>
                    <ul>
                        <li>Build a box that contains all the messages and who sent them in chronological order,</li>
                        <li>Build 2 seperate chat boxes where a user can type a message and send it to the general chat box,</li>
                    </ul>
                    <h4>Challenge:</h4>
                    <p></p>
                <hr />
                </section>}

        </section>
    )
}

export default Test6;