import { useState } from "react";
import "./Test1.css";
const movieData = require("./movies.json");

const Test1 = () => {
    const [listQuery, setListQuery] = useState("");

    return (
        <section>
            <h2>Movie List Filter:</h2>
            <form>
            <label for="listQuery">Query Movies: </label><br /><br />
            <input id="listQuery" value={listQuery} onChange={(event) => setListQuery(event.target.value)} placeholder="Search by Title, Director, Genre, or Actor/Actress"/><br />
            </form>
            <br /><br />
                <table>
                <tr><th>Title</th><th>Director</th><th>Year</th><th>Genre</th><th>Cast</th><th>Average Rating</th></tr>
                {movieData.map(movie => {
                    const titleQuery = movie.title.toLowerCase().includes(listQuery.toLowerCase());
                    const directorQuery = movie.director.toLowerCase().includes(listQuery.toLowerCase());
                    const genreQuery = movie.genre.toLowerCase().includes(listQuery.toLowerCase());
                    const castQuery = movie.cast.some(actor => actor.toLowerCase().includes(listQuery.toLowerCase()));
                    const ratings = Object.values(movie.ratings).flat();
                    ratings[0] *= 10;
                    const averageRating = (ratings.reduce((sum, num) => sum + num, 0)/ratings.length).toFixed(2);
                    if(titleQuery || directorQuery || genreQuery || castQuery) {
                        return (
                            <tr><td>{movie.title}</td><td>{movie.director}</td><td>{movie.year}</td><td>{movie.genre}</td><td>{movie.cast.join(", ")}</td><td>{averageRating}</td></tr>
                        )
                    } 
                })}
            </table>
        </section>
    )
}

export default Test1;