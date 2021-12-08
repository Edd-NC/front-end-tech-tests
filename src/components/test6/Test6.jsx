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
                        <li>Make sure to remove any unecessary whitespace at the start and end of a message,</li>
                        <li>If a message is pure whitespace, make sure the message doesn't send,</li>
                    </ul>
                    <h4>Challenge:</h4>
                    <p></p>
                <hr />
                </section>}
                <section className="IMS">
                    <form id="chat1Form" onSubmit={event => {
                         event.preventDefault(); 
                         let chat = chat1.trim();
                         if (chat.length > 0) {
                         setGenChat(genChat => {
                                 const newGenChat = [...genChat];
                                 newGenChat.push("User 1: " + chat)
                                 return newGenChat;
                                })
                            }
                         setChat1("");
                    }}>
                    <label htmlFor="chat1">User 1:</label><br /><br />
                    <textarea id="chat1" value={chat1} onChange={(event) => setChat1(event.target.value)} cols="20" rows="20"/><br />
                    <button className="chatSendButton" htmlFor="chat1Form">Send</button><br /><br />
                    </form><br />
                    <form onSubmit={event => {
                        event.preventDefault();
                        setGenChat([]);
                    }}>
                    <label htmlFor="genChat">General Chat:</label><br /><br />
                    <textarea id="genChat" value={genChat.join("\n")} cols="70" rows="20" /><br />
                    <button htmlFor="genChat" className="chatSendButton">Clear</button>
                    </form>
                    <form id="chat2Form" onSubmit={event => {
                         event.preventDefault(); 
                         let chat = chat2.trim();
                         if (chat) {
                         setGenChat(genChat => {
                                 const newGenChat = [...genChat];
                                 newGenChat.push("User 2: " + chat)
                                 return newGenChat;
                                })
                            }
                         setChat2("");
                    }}>
                    <label htmlFor="chat2">User 2:</label><br /><br />
                    <textarea id="chat2" value={chat2} onChange={(event) => setChat2(event.target.value)} cols="20" rows="20"/><br />
                    <button className="chatSendButton" htmlFor="chat2Form">Send</button>
                    </form>
                </section>
        </section>
    )
}

export default Test6;