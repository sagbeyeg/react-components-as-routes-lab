// import { render } from 'enzyme';
import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, idx) => (
          <div key={idx}>
            <h3>{movie.title} (<em>{movie.time} minutes</em>)</h3>
            <ul>
              {movie.genres.map((genre, idx) => (
                <li key={idx}>{genre}</li>
              ))}
            </ul>
          </div>
        )
        )}
    </div>
  );
};

export default Movies;
