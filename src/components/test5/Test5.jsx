import "./Test5.css";

const Test5 = () => {
    return (
        <section>
            <h2>Build a Drop Down Menu with CSS</h2>
            <ul id="menu">
                <li class="menu"><a href="#">Home</a></li>
                <li class="menu"><a href="#">About Us</a></li>
                <li class="menu"><a href="#">Tests</a>
                    <div class="dropMenu">
                        <ul>
                            <li><a href="#">Test 1</a></li>
                            <li><a href="#">Test 2</a></li>
                            <li><a href="#">Test 3</a></li>
                            <li><a href="#">Test 4</a></li>
                            <li><a href="#">Test 5</a></li>
                            <li><a href="#">Test 6</a></li>
                        </ul>
                    </div>
                </li>
                <li class="menu"><a href="#">Careers</a>
                    <div class="dropMenu">
                        <ul>
                            <li><a href="#">Northcoders</a></li>
                            <li><a href="#">Apple</a></li>
                            <li><a href="#">Google</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </li>
                <li class="menu"><a href="#">Contact Us</a></li>
            </ul>
        </section>
    )
}

export default Test5;