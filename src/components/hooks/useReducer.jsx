import React, { useState, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { name: action.movie }];
    case "remove":
      return [
        ...state.slice(0, action.movieIndex),
        ...state.slice(action.movieIndex + 1)
      ];
    default:
      throw new Error();
  }
}

function FavoriteMovies() {
  const [movies, dispatch] = useReducer(reducer, []);
  const [newMovie, setNewMovie] = useState("");

  const handleAddClick = () => {
    if (newMovie === "") {
      return;
    }
    dispatch({ type: "add", movie: newMovie });
    setNewMovie("");
  };

  const handleRemoveClick = (index) => {
    dispatch({ type: "remove", movieIndex: index });
  };

  return (
    <>
      <div className="movies">
        {movies.map((movie, index) => ( // movies.map - movies comes from FavoriteMovies() const [movies, dispatch] || index - .map comes with two statements always (name and index)
          <div key={index} className="movie">
            { <span>{movie.name}</span> /* Shows the value that was inputed corresponds to: return [...state, { name: action.movie }]; */}
            <button onClick={() => handleRemoveClick(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="add-movie">
        <input
          type="text"
          value={newMovie}
          onChange={(event) => setNewMovie(event.target.value)}
          placeholder="Movie Name"
        />
        <button onClick={handleAddClick}>Add movie</button>
      </div>
    </>
  );
}

export default FavoriteMovies;
