import { useContext, useState } from "react";
import "./Test2.css";

const Test2 = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSignUp, setShowSignUp] = useState(false);
    const [signUpDetails, setSignUpDetails] = useState({name: "", email: "", password: ""});
    return(
        <section>
            <h2>Test 2</h2>
            <form id="loginForm">
                <label for="email" >Email:</label><br />
                <input id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)} required/><br /> <br />
                <label for="password">Password:</label><br />
                <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required/><br /><br />
                <button type="submit" for="loginForm">Submit</button><br /><br />
            </form>
            <button onClick={() => setShowSignUp(signUp => !signUp)}>Sign Up?</button><br /><br />
            {showSignUp && <section>
                    <form id="signUpForm">
                        <label for="nameSignUp">Your Name: </label><br />
                        <input id="nameSignUp" type="text" value={signUpDetails.name} onChange={(event) => setSignUpDetails(details => {
                            const name = event.target.value;
                            const newDetails = {...details, name};
                            return newDetails})} required/><br /><br />
                        <label for="emailSignUp">Your Email:</label><br />
                        <input id="emailSignUp" type="text" value={signUpDetails.email} onChange={(event) => setSignUpDetails(details => {
                            const email = event.target.value;
                            const newDetails = {...details, email};
                            return newDetails;
                        })} required/><br /><br />
                        <label for="passwordSignUp">Password:</label><br />
                        <input id="passwordSignUp" type="password" value={signUpDetails.password} onChange={event => setSignUpDetails(details => {
                            const password = event.target.value;
                            const newDetails = {...details, password};
                            return newDetails;
                        })} required/><br /><br />
                        <button type="submit" for="signUpForm">Sign Up</button> 
                    </form>
                </section>}
        </section>
    )
}

export default Test2;