import React, { useEffect, useState } from "react";
import './App.css';

function App() {
    const [Movie, setMovie] = useState('');
    const fetchData = async () => {
        const response = await fetch(`http://www.omdbapi.com/?s=${document.getElementById('search').value}&apikey=7e4fb20f`);
        const json = await response.json();
        var list = []
        var search = json.Search;
        search.map((search) => {
            return (
                list.push(
                    <div className="grid">
                        <img className="Part10" alt="random" src={search.Poster} width="300px" height="auto"></img>
                        <h2 className="Part1">{search.Title}</h2>
                        <h2 className="Part1">{search.Year}</h2>
                    </div>
                )
            )
        })
        setMovie(list)
    };
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="quote">
            <nav>
                <div className="header">
                    <h1 id="name">Illegal-Movie-Website.com</h1>
                    <div className="search">
                        <input type='text' defaultValue='avengers' id="search" placeholder="Search Here" />
                        <button onClick={() => fetchData()}>Search</button>
                    </div>

                </div>

            </nav>
            <h1 id="head">Movies</h1>
            <div id="meow">
                {Movie}
            </div>
        </div>
    );
};

export default App;
