import { useState } from "react";
import "./Test1.css";
const movieData = require("./movies.json");

const Test1 = () => {
    const [query, setQuery] = useState("");

    return (
        <section>
            <h2>Movie List Filter:</h2>
            <form for="movieQuery" />
            <input id="movieQuery" value={query} onChange={(event) => setQuery(event.target.value)} />
            <br /><br />
                <table>
                <tr><th>Title</th><th>Director</th><th>Year</th><th>Genre</th><th></th></tr>
                {movieData.map(movie => {
                    if(movie.title.toLowerCase().includes(query.toLowerCase())) {
                        return (
                            <tr><td>{movie.title}</td><td>{movie.director}</td><td>{movie.year}</td><td>{movie.genre}</td></tr>
                    )
                }
            })}
            </table>
        </section>
    )
}

export default Test1;