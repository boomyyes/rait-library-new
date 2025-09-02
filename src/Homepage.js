import './App.css';
import { useState } from 'react';
import BookList, { books } from './BookList';
import bgImage from './bg.gif';

function NavBar({ onSearch }) {
  const handleSearchChange = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <header className="header animate-fade-in">
      <div className="header-content">
        <img
          src="https://yt3.googleusercontent.com/d6j9ziqAsID49q-DNq6khtNnoYzPBbt8qzLqUSSv5UEiUsLeIYOPgZVY5W4-WCY9-IusQ5rvog=s900-c-k-c0x00ffffff-no-rj"
          alt="RAIT Logo"
          className="logo animate-scale-in"
        />
        <h1>RAIT Library</h1>
        <div className="nav-menu">
          <div className="search-form">
            <input
              type="text"
              name="search"
              placeholder="Search books..."
              className="search-input"
              onChange={handleSearchChange}
            />
            <button type="button" className="search-button">Search</button>
          </div>
        </div>
      </div>
    </header>
  );
}

function GenreList({ onGenreSelect, selectedGenre }) {
  const genres = [
    'All',
    'Computer Science',
    'Electronics',
    'Mechanical',
    'Civil',
    'Business',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Data Science',
    'Artificial Intelligence',
  ];

  return (
    <aside className="genre-list animate-fade-in">
      <h3>Genres</h3>
      <ul>
        {genres.map((genre, index) => (
          <li
            key={index}
            className={`genre-item ${selectedGenre === genre ? 'active' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <button
              onClick={() => onGenreSelect(genre)}
              className="genre-button"
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="footer animate-fade-in">
      <p>&copy; {new Date().getFullYear()} RAIT Library. All rights reserved.</p>
    </footer>
  );
}

function Homepage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="app animate-page-load" style={{ '--bg-image': `url(${bgImage})` }}>
      <NavBar onSearch={setSearchQuery} />
      <main className="main-content">
        <GenreList onGenreSelect={handleGenreSelect} selectedGenre={selectedGenre} />
        <BookList books={filteredBooks} />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;