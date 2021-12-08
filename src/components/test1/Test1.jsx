import { useState } from "react";
import "./Test1.css";
const movieData = require("./movies.json");

const Test1 = () => {
    const [titleQuery, setTitleQuery] = useState("");
    const [directorQuery, setDirectorQuery] = useState("");

    return (
        <section>
            <h2>Movie List Filter:</h2>
            <form>
            <label for="titleQuery">Query Title: </label><br />
            <input id="titleQuery" value={titleQuery} onChange={(event) => setTitleQuery(event.target.value)} /><br />
            <label for="directorQuery">Query Director: </label><br />
            <input id="directorQuery" value={directorQuery} onChange={(event) => setDirectorQuery(event.target.value)} /><br /> 
            </form>
            <br /><br />
                <table>
                <tr><th>Title</th><th>Director</th><th>Year</th><th>Genre</th><th>Cast</th><th>Average Rating</th></tr>
                {movieData.map(movie => {
                    const titleQ = movie.title.toLowerCase().includes(titleQuery.toLowerCase());
                    const directorQ = movie.director.toLowerCase().includes(directorQuery.toLowerCase());
                    const ratings = Object.values(movie.ratings).flat();
                    ratings[0] *= 10;
                    if(titleQ && directorQ) {
                        return (
                            <tr><td>{movie.title}</td><td>{movie.director}</td><td>{movie.year}</td><td>{movie.genre}</td><td>{movie.cast.join(", ")}</td><td>{(ratings.reduce((sum, num) => sum + num, 0)/ratings.length).toFixed(2)}</td></tr>
                        )
                    } 
                })}
            </table>
        </section>
    )
}

export default Test1;