import "./Test6.css";
import "../instructionsButton.css";
import { useState } from "react";

const Test6 = () => {
    const [showInstructions, setShowInstructions] = useState(false);
    const [genChat, setGenChat] = useState([]);
    const [chat1, setChat1] = useState("");
    const [chat2, setChat2] = useState("");
    return (
        <section>
            <h2>Pseudo Instant Messaging Service</h2>
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
                <section>
                    <form id="chat1Form" onSubmit={event => {
                         event.preventDefault(); 
                         setGenChat(genChat => {
                             const newGenChat = [...genChat];
                             newGenChat.push("User 1: " + chat1)
                             return newGenChat;
                         })
                         setChat1("");
                    }}>
                    <label for="chat1">User 1:</label><br />
                    <textarea id="chat1" value={chat1} onChange={(event) => setChat1(event.target.value)} cols="20" rows="20"/>
                    <button className="chatSendButton" for="chat1Form">Send</button>
                    </form>
                    <label for="genChat">General Chat:</label><br />
                    <textarea id="genChat" value={genChat.join("\n")} cols="70" rows="20" />
                    <form id="chat2Form" onSubmit={event => {
                         event.preventDefault(); 
                         setGenChat(genChat => {
                             const newGenChat = [...genChat];
                             newGenChat.push("User 2: " + chat2)
                             return newGenChat;
                         })
                         setChat2("");
                    }}>
                    <label for="chat2">User 2:</label><br />
                    <textarea id="chat2" value={chat2} onChange={(event) => setChat2(event.target.value)} cols="20" rows="20"/>
                    <button className="chatSendButton" for="chat2Form">Send</button>
                    </form>
                </section>
        </section>
    )
}

export default Test6;