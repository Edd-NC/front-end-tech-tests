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
            <ul>
                {movieData.map(movie => {
                    if(movie.title.toLowerCase().includes(query.toLowerCase())) {
                        return (
                            <li key={movie.title}>
                            {`${movie.title}, ${movie.genre}, ${movie.year}, ${movie.director}`}
                        </li>
                    )
                }
                })}
            </ul>
        </section>
    )
}

export default Test1;