import './App.css';

   function BookList({ books }) {
     return (
       <section className="book-list animate-fade-in">
         <h2>Computer Engineering Books</h2>
         {books.length === 0 ? (
           <p className="no-results">No books found.</p>
         ) : (
           <div className="book-grid">
             {books.map((book, index) => (
               <div
                 key={book.id}
                 className="book-card animate-slide-up"
                 style={{ animationDelay: `${index * 0.2}s` }}
               >
                 <h3>{book.title}</h3>
                 <p className="book-price">Price: ${book.price.toFixed(2)}</p>
                 <p className="book-rating">Rating: {book.rating} / 5</p>
                 <p className="book-synopsis">{book.synopsis}</p>
                 <button className="book-button">Borrow</button>
               </div>
             ))}
           </div>
         )}
       </section>
     );
   }

   export const books = [
     // Computer Science
     { id: 1, title: 'Computer Organization and Architecture', price: 59.99, rating: 4.5, synopsis: 'A comprehensive guide to computer hardware and architecture, covering CPU design, memory systems, and performance optimization.', genre: 'Computer Science' },
     { id: 2, title: 'Introduction to Algorithms', price: 79.99, rating: 4.8, synopsis: 'A definitive resource on algorithm design, covering sorting, graph algorithms, and dynamic programming with practical examples.', genre: 'Computer Science' },
     { id: 3, title: 'Operating Systems: Three Easy Pieces', price: 39.99, rating: 4.7, synopsis: 'An accessible introduction to operating systems, focusing on virtualization, concurrency, and file systems.', genre: 'Computer Science' },
     { id: 4, title: 'Data Structures and Algorithms in Python', price: 64.99, rating: 4.5, synopsis: 'Explores data structures and algorithms using Python, with practical coding examples.', genre: 'Computer Science' },
     // Electronics
     { id: 5, title: 'Embedded Systems: Real-Time Interfacing', price: 54.99, rating: 4.4, synopsis: 'Focuses on real-time interfacing in embedded systems, including microcontrollers and sensors.', genre: 'Electronics' },
     { id: 6, title: 'Microelectronic Circuits', price: 89.99, rating: 4.6, synopsis: 'Covers the design and analysis of microelectronic circuits, including amplifiers and digital circuits.', genre: 'Electronics' },
     { id: 7, title: 'Digital Signal Processing', price: 74.99, rating: 4.3, synopsis: 'Explores digital signal processing techniques for audio, image, and communication systems.', genre: 'Electronics' },
     { id: 8, title: 'Fundamentals of Electric Circuits', price: 69.99, rating: 4.5, synopsis: 'A comprehensive introduction to electric circuits, covering analysis and design techniques.', genre: 'Electronics' },
     // ... (remaining 36 books truncated for brevity, include all 44 from the previous BookList.js)
     { id: 44, title: 'Parallel and Distributed Computing', price: 69.99, rating: 4.4, synopsis: 'Covers parallel computing architectures and distributed systems design.', genre: 'Computer Science' },
   ];

   export default BookList;