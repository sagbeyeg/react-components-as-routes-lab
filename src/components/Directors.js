import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((dir, idx) => 
        <div key={idx}>
          {dir.name} 
          <ul>
            {dir.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Directors
