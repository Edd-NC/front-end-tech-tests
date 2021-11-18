import {Link} from "react-router-dom"

const Nav = () => {
    const numOfTests = 6;
    const createLinks = () => {
        for (let i = 1; i <= numOfTests; i++) {
            <Link><ul>`Test {i}</ul></Link>
        }
    }
    return (
        <section>
            <ul>
                {createLinks()}
            </ul>
        </section>
    )
}

export default Nav;