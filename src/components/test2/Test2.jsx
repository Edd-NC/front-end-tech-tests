import { useState } from "react";
import "./Test2.css";

const Test2 = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <section>
            <h2>Test 2</h2>
            <form>
                <label for="email" >Email:</label><br />
                <input id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/><br /> <br />
                <label for="password">Password:</label><br />
                <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </form>
        </section>
    )
}

export default Test2;