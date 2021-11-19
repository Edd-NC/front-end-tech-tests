import {Link} from "react-router-dom"

const Nav = () => {
    const numOfTests = 6;
    const createLinks = () => {
        const links = [];
        for (let i = 1; i <= numOfTests; i++) {
            links.push(<Link to={"Test " + i}><ul>{"Test " + i}</ul></Link>);
        }
        return links;
    }
    return (
        <section>
                {createLinks()}
        </section>
    )
}

export default Nav;