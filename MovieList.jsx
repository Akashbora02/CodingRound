import React, { useState, useEffect } from 'react';
import axios from 'axios';
const MovieList = () => {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        loadmovie();
    })
    const loadmovie = async () => {
        const result = await axios.get("http://localhost:3000/movies");
        setmovie(result.data);
    }
    console.log(movie);
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center d-flex">
                    <div className="col-8 alert alert-info text-center">
                        <h1>Movie List</h1>
                    </div>
                </div>
                <div className="row justify-content-center d-flex">
                    <div className="col-4">
                        {movie.map((item) => {
                            return (
                                <div className="card mt-3 ml-4 mr-4">
                                    <div className="card-body text-center bg-light shadow">
                                        <h3>Name: {item.name}</h3>
                                        <h3>Rating: {item.rating}</h3>
                                        <h3>Released Date: {item.released_date}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MovieList;
