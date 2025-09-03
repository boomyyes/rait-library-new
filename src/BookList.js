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
  {
    id: 1,
    title: 'Computer Organization and Architecture',
    price: 59.99,
    rating: 4.5,
    synopsis: 'A comprehensive guide to computer hardware and architecture, covering CPU design, memory systems, and performance optimization.',
    genre: 'Computer Science',
  },
  {
    id: 2,
    title: 'Introduction to Algorithms',
    price: 79.99,
    rating: 4.8,
    synopsis: 'A definitive resource on algorithm design, covering sorting, graph algorithms, and dynamic programming with practical examples.',
    genre: 'Computer Science',
  },
  {
    id: 3,
    title: 'Operating Systems: Three Easy Pieces',
    price: 39.99,
    rating: 4.7,
    synopsis: 'An accessible introduction to operating systems, focusing on virtualization, concurrency, and file systems.',
    genre: 'Computer Science',
  },
  {
    id: 4,
    title: 'Data Structures and Algorithms in Python',
    price: 64.99,
    rating: 4.5,
    synopsis: 'Explores data structures and algorithms using Python, with practical coding examples.',
    genre: 'Computer Science',
  },
  // Electronics
  {
    id: 5,
    title: 'Embedded Systems: Real-Time Interfacing',
    price: 54.99,
    rating: 4.4,
    synopsis: 'Focuses on real-time interfacing in embedded systems, including microcontrollers and sensors.',
    genre: 'Electronics',
  },
  {
    id: 6,
    title: 'Microelectronic Circuits',
    price: 89.99,
    rating: 4.6,
    synopsis: 'Covers the design and analysis of microelectronic circuits, including amplifiers and digital circuits.',
    genre: 'Electronics',
  },
  {
    id: 7,
    title: 'Digital Signal Processing',
    price: 74.99,
    rating: 4.3,
    synopsis: 'Explores digital signal processing techniques for audio, image, and communication systems.',
    genre: 'Electronics',
  },
  {
    id: 8,
    title: 'Fundamentals of Electric Circuits',
    price: 69.99,
    rating: 4.5,
    synopsis: 'A comprehensive introduction to electric circuits, covering analysis and design techniques.',
    genre: 'Electronics',
  },
  // Mechanical
  {
    id: 9,
    title: 'Mechanics of Materials',
    price: 79.99,
    rating: 4.4,
    synopsis: 'Covers the behavior of materials under various loads, essential for mechanical engineering design.',
    genre: 'Mechanical',
  },
  {
    id: 10,
    title: 'Thermodynamics: An Engineering Approach',
    price: 84.99,
    rating: 4.6,
    synopsis: 'Explores thermodynamics principles with applications in engineering systems.',
    genre: 'Mechanical',
  },
  {
    id: 11,
    title: 'Fluid Mechanics',
    price: 69.99,
    rating: 4.3,
    synopsis: 'Covers fluid dynamics and its applications in mechanical and aerospace engineering.',
    genre: 'Mechanical',
  },
  {
    id: 4,
    title: 'Machine Design',
    price: 74.99,
    rating: 4.5,
    synopsis: 'A guide to designing mechanical systems, focusing on components and reliability.',
    genre: 'Mechanical',
  },
  // Civil
  {
    id: 13,
    title: 'Structural Analysis',
    price: 79.99,
    rating: 4.4,
    synopsis: 'Covers techniques for analyzing structures, essential for civil engineering projects.',
    genre: 'Civil',
  },
  {
    id: 14,
    title: 'Reinforced Concrete Design',
    price: 69.99,
    rating: 4.5,
    synopsis: 'Explores the design of reinforced concrete structures, including beams and columns.',
    genre: 'Civil',
  },
  {
    id: 15,
    title: 'Geotechnical Engineering',
    price: 74.99,
    rating: 4.3,
    synopsis: 'Covers soil mechanics and foundation engineering for civil infrastructure.',
    genre: 'Civil',
  },
  {
    id: 16,
    title: 'Transportation Engineering',
    price: 64.99,
    rating: 4.2,
    synopsis: 'Focuses on the design and planning of transportation systems, including highways and railways.',
    genre: 'Civil',
  },
  // Business
  {
    id: 17,
    title: 'Principles of Management',
    price: 59.99,
    rating: 4.3,
    synopsis: 'Introduces management principles, including planning, organizing, and leading.',
    genre: 'Business',
  },
  {
    id: 18,
    title: 'Financial Accounting',
    price: 64.99,
    rating: 4.4,
    synopsis: 'Covers financial accounting principles for engineering and business applications.',
    genre: 'Business',
  },
  {
    id: 19,
    title: 'Operations Management',
    price: 69.99,
    rating: 4.5,
    synopsis: 'Explores techniques for optimizing operations in engineering and business contexts.',
    genre: 'Business',
  },
  {
    id: 20,
    title: 'Engineering Economics',
    price: 54.99,
    rating: 4.2,
    synopsis: 'Covers economic analysis for engineering projects, including cost-benefit analysis.',
    genre: 'Business',
  },
  // Mathematics
  {
    id: 21,
    title: 'Calculus',
    price: 69.99,
    rating: 4.5,
    synopsis: 'A comprehensive guide to calculus, covering derivatives, integrals, and applications.',
    genre: 'Mathematics',
  },
  {
    id: 22,
    title: 'Linear Algebra and Its Applications',
    price: 64.99,
    rating: 4.4,
    synopsis: 'Explores linear algebra concepts with applications in engineering and computer science.',
    genre: 'Mathematics',
  },
  {
    id: 23,
    title: 'Differential Equations',
    price: 59.99,
    rating: 4.3,
    synopsis: 'Covers differential equations with applications in engineering systems.',
    genre: 'Mathematics',
  },
  {
    id: 24,
    title: 'Discrete Mathematics and Its Applications',
    price: 74.99,
    rating: 4.6,
    synopsis: 'Focuses on discrete mathematics for computer science and engineering.',
    genre: 'Mathematics',
  },
  // Physics
  {
    id: 25,
    title: 'University Physics',
    price: 79.99,
    rating: 4.5,
    synopsis: 'A comprehensive introduction to physics, covering mechanics, thermodynamics, and electromagnetism.',
    genre: 'Physics',
  },
  {
    id: 26,
    title: 'Introduction to Electrodynamics',
    price: 69.99,
    rating: 4.6,
    synopsis: 'Explores electromagnetic theory with applications in engineering.',
    genre: 'Physics',
  },
  {
    id: 27,
    title: 'Classical Mechanics',
    price: 64.99,
    rating: 4.4,
    synopsis: 'Covers classical mechanics principles for engineering and physics students.',
    genre: 'Physics',
  },
  {
    id: 28,
    title: 'Quantum Mechanics for Engineers',
    price: 74.99,
    rating: 4.3,
    synopsis: 'Introduces quantum mechanics with applications in electronics and materials.',
    genre: 'Physics',
  },
  // Chemistry
  {
    id: 29,
    title: 'Chemistry: The Central Science',
    price: 79.99,
    rating: 4.5,
    synopsis: 'A comprehensive chemistry text covering atomic structure, chemical reactions, and materials.',
    genre: 'Chemistry',
  },
  {
    id: 30,
    title: 'Organic Chemistry',
    price: 84.99,
    rating: 4.4,
    synopsis: 'Explores organic chemistry principles with applications in materials science.',
    genre: 'Chemistry',
  },
  {
    id: 31,
    title: 'Physical Chemistry',
    price: 74.99,
    rating: 4.3,
    synopsis: 'Covers physical chemistry concepts, including thermodynamics and kinetics.',
    genre: 'Chemistry',
  },
  {
    id: 32,
    title: 'Materials Chemistry',
    price: 69.99,
    rating: 4.2,
    synopsis: 'Focuses on the chemistry of materials used in engineering applications.',
    genre: 'Chemistry',
  },
  // Data Science
  {
    id: 33,
    title: 'Introduction to Data Science',
    price: 49.99,
    rating: 4.3,
    synopsis: 'Covers the fundamentals of data science, including statistics, visualization, and machine learning.',
    genre: 'Data Science',
  },
  {
    id: 34,
    title: 'Python for Data Analysis',
    price: 54.99,
    rating: 4.5,
    synopsis: 'Explores data analysis techniques using Python, including pandas and numpy.',
    genre: 'Data Science',
  },
  {
    id: 35,
    title: 'Data Mining: Concepts and Techniques',
    price: 64.99,
    rating: 4.4,
    synopsis: 'Covers data mining methods for extracting patterns from large datasets.',
    genre: 'Data Science',
  },
  {
    id: 36,
    title: 'Big Data Analytics',
    price: 59.99,
    rating: 4.3,
    synopsis: 'Explores big data technologies and analytics for engineering applications.',
    genre: 'Data Science',
  },
  // Artificial Intelligence
  {
    id: 37,
    title: 'Artificial Intelligence: A Modern Approach',
    price: 99.99,
    rating: 4.9,
    synopsis: 'A comprehensive introduction to AI, covering machine learning, neural networks, and intelligent agents.',
    genre: 'Artificial Intelligence',
  },
  {
    id: 38,
    title: 'Machine Learning Yearning',
    price: 29.99,
    rating: 4.6,
    synopsis: 'A practical guide to structuring machine learning projects, by Andrew Ng.',
    genre: 'Artificial Intelligence',
  },
  {
    id: 39,
    title: 'Deep Learning',
    price: 89.99,
    rating: 4.7,
    synopsis: 'Covers deep learning techniques, including neural networks and convolutional models.',
    genre: 'Artificial Intelligence',
  },
  {
    id: 40,
    title: 'Reinforcement Learning: An Introduction',
    price: 74.99,
    rating: 4.5,
    synopsis: 'Explores reinforcement learning algorithms and their applications in AI.',
    genre: 'Artificial Intelligence',
  },
  // Additional Computer Science
  {
    id: 41,
    title: 'Computer Graphics: Principles and Practice',
    price: 84.99,
    rating: 4.2,
    synopsis: 'A guide to computer graphics, covering rendering, animation, and 3D modeling techniques.',
    genre: 'Computer Science',
  },
  {
    id: 42,
    title: 'Compilers: Principles, Techniques, and Tools',
    price: 94.99,
    rating: 4.7,
    synopsis: 'A deep dive into compiler design, covering parsing, optimization, and code generation.',
    genre: 'Computer Science',
  },
  {
    id: 43,
    title: 'Software Engineering: A Practitioner’s Approach',
    price: 79.99,
    rating: 4.5,
    synopsis: 'Explores software development methodologies, from requirements to testing.',
    genre: 'Computer Science',
  },
  {
    id: 44,
    title: 'Parallel and Distributed Computing',
    price: 69.99,
    rating: 4.4,
    synopsis: 'Covers parallel computing architectures and distributed systems design.',
    genre: 'Computer Science',
  },
];

export default BookList;