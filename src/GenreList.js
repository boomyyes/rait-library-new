import React from 'react';
   import { books } from './BookList';

   const genres = ['All', ...new Set(books.map((book) => book.genre))];

   function GenreList({ onGenreSelect, selectedGenre }) {
     return (
       <div className="genre-list">
         {genres.map((genre) => (
           <button
             key={genre}
             onClick={() => onGenreSelect(genre)}
             className={selectedGenre === genre ? 'active' : ''}
           >
             {genre}
           </button>
         ))}
       </div>
     );
   }

   export default GenreList;