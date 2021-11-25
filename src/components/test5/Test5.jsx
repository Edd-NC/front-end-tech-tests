import "./Test5.css";

const Test5 = () => {
    return (
        <section>
            <h2>Test 5</h2>
            <section className="menu">
            <ul className="dropMenu">
                <li>Home</li>
                <li>About Us</li>
                <li>Tests<ul className="dropDown">
                    <li>Test 1</li>
                    <li>Test 2</li>
                    <li>Test 3</li>
                    <li>Test 4</li>
                    <li>Test 5</li>
                    <li>Test 6</li>
                    </ul></li>
                <li>Companies<ul className="dropDown">
                    <li>Northcoders</li>
                    <li>Apple</li>
                    <li>Google</li>
                    <li>Twitter</li>
                    </ul></li>
                <li>Contact Us</li>
            </ul>
            </section>
        </section>
    )
}

export default Test5;