import React, { useState } from 'react';
   import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
   import './App.css';
   import GenreList from './GenreList';
   import BookList, { books } from './BookList';
   import Login from './pages/Login';
   import Register from './pages/Register';

   function NavBar() {
     return (
       <nav className="header">
         <div className="flex items-center justify-center gap-2">
           <img
             src="https://yt3.googleusercontent.com/d6j9ziqAsID49q-DNq6khtNnoYzPBbt8qzLqUSSv5UEiUsLeIYOPgZVY5W4-WCY9-IusQ5rvog=s900-c-k-c0x00ffffff-no-rj"
             alt="RAIT Logo"
             className="logo"
           />
           <h1>RAIT Library</h1>
         </div>
       </nav>
     );
   }

   function Footer() {
     return (
       <footer className="footer">
         <p>&copy; {new Date().getFullYear()} RAIT Library. All rights reserved.</p>
       </footer>
     );
   }

   function AppContent() {
     const [selectedGenre, setSelectedGenre] = useState('All');
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const location = useLocation();

     const handleGenreSelect = (genre) => {
       setSelectedGenre(genre);
     };

     const filteredBooks = books.filter((book) => selectedGenre === 'All' || book.genre === selectedGenre);

     if (!isLoggedIn && location.pathname !== '/login' && location.pathname !== '/register') {
       return <Navigate to="/login" replace />;
     }

     return (
       <div className="app animate-page-load">
         {isLoggedIn && location.pathname === '/' && <NavBar />}
         <Routes>
           <Route
             path="/"
             element={
               isLoggedIn ? (
                 <main className="main-content">
                   <GenreList onGenreSelect={handleGenreSelect} selectedGenre={selectedGenre} />
                   <BookList books={filteredBooks} />
                 </main>
               ) : null
             }
           />
           <Route
             path="/login"
             element={<Login setIsLoggedIn={setIsLoggedIn} />}
           />
           <Route
             path="/register"
             element={<Register setIsLoggedIn={setIsLoggedIn} />}
           />
         </Routes>
         <Footer />
       </div>
     );
   }

   function App() {
     return (
       <Router>
         <AppContent />
       </Router>
     );
   }

   export default App;