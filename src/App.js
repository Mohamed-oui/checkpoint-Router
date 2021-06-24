import {moviedata } from "./Components/MovieData";
import "./App.css";
import { useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import CardDetail from "./Components/CardDetail";

function App() {
  const [movielist, setMovielist] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);

  const handleChange = (elm) => {
    setTitle(elm.target.value);
  };
  const ratingChanged = (note) => {
    setRate(note);
  };
  const handleAdd = (newMovie) => {
    setMovielist([...movielist, newMovie]);
  };

  return (
    <div className="App">
      <Router>
      <Route exact path="/" render={(props) =>
            <Filter
              handleChange={handleChange}
              title={title}
              ratingChanged={ratingChanged}
              rate={rate}
            /> } />
          
            <Route exact path="/" render={(props) =>
            <MovieList
              movielist={movielist.filter(
                (movie) =>
                  movie.title.toUpperCase().includes(title.toUpperCase()) &&
                  movie.rate >= rate
              )}
            />
              } />
            <Route exact path="/" render={(props) =>
          <AddMovie handleAdd={handleAdd} />
            } />
        <Route exact path="/moviedata/:id" render={(props) => <CardDetail {...props} moviedata={moviedata}/>} />
      </Router>
    </div>
  );
}

export default App;
