import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <div>
      <h1> 📚 DEV READS.</h1>
      <img className="blog" src="./logogif.gif" alt="animatebook"></img>
      <h1 className="headline">"Unlock Your Code to Success: Dive into Dev Reads and Master Your Craft!"</h1>
     <img className="header" src="./coding_gif.gif" alt="coding langauges"></img>
      <div className="blog-content">
  <h2>The Power of Programming Books in a Developer's Learning Journey</h2>
 <img className="blog" src="./code_books.jpeg" alt="codingbook"></img>
  <p>
    In the world of software development, knowledge is ever-evolving,<br></br> and the quest for continuous improvement is a fundamental part of a developer's journey.<br></br> Programming books play a vital role in this journey,<br></br> offering a wealth of benefits and insights for developers at all levels of expertise.
  </p>

  <h3>Why Programming Books Matter</h3>
  <img className="blog" src="./coding_book2.jpeg" alt="coding"></img>
  <p>
    Programming books are more than just printed words on paper or digital pages.<br></br> They are valuable companions that aid developers in multiple ways:<br></br>
  </p>
  <ul>
    <li><strong>In-Depth Learning:</strong> Programming books provide in-depth knowledge on specific topics, allowing developers to master a subject from the ground up.</li>
    <li><strong>Structured Learning:</strong> These books offer structured content, guiding developers from the basics to advanced concepts, making it easier to build a strong foundation.</li>
    <li><strong>Hands-On Examples:</strong> Practical examples and code snippets bridge the gap between theory and real-world application.</li>
    <li><strong>Staying Current:</strong> They help developers stay up-to-date with rapidly evolving technologies through regular updates.</li>
    <li><strong>Problem Solving:</strong> Programming books serve as references for troubleshooting and finding solutions to common development challenges.</li>
    <li><strong>Expanding Horizons:</strong> They introduce developers to diverse approaches and solutions to broaden their skill set.</li>
    <li><strong>Continuous Improvement:</strong> The learning journey of a developer is ongoing, and programming books provide the means to keep improving throughout their career.</li>
  </ul>

  <h3>How to Make the Most of Programming Books</h3>
  <img className="blog" src="./engineer.jpg" alt="coding2"></img>
  <p>
    To maximize the benefits of programming books, consider the following tips:
  </p>
  <ol>
    <li><strong>Select Relevant Books:</strong> Choose books that align with your current goals and interests.</li>
    <li><strong>Take Notes:</strong> Keep a notebook or digital notes to jot down important concepts and ideas as you read.</li>
    <li><strong>Practice What You Learn:</strong> Apply the knowledge from the book through coding exercises and projects.</li>
    <li><strong>Join Communities:</strong> Engage with developer communities, forums, or discussion groups to discuss and share insights from the books.</li>
    <li><strong>Update Your Library:</strong> As technology advances, keep your bookshelf updated with the latest releases to stay current.</li>
  </ol>
<br></br>
  <h3>ABOUT "DEV READS"</h3>
  <img className="blog" src="./bookshelf.gif" alt="coding"></img>
  <p>
   "DEV READS" is a testament to the power of programming books. 
   It not only showcases a diverse collection of books but also allows users to interact by adding on their favorite reads.
   <br></br> The Books section provides a platform for developers to discuss and share their insights about the books they've read with aspiring/budding engineers.
  </p>
</div>
<div>
  <h1>Popular Reads</h1>
  <img className="blog" src="./book.png" alt="coding"></img>
  <h1>Share your thoughts and books you've read in the section below!</h1>
</div>
      <div className="books">
       {books.map((book) => (
          <div key={book.id} className="book">
          <img src="./bookgif.gif" alt="Book Cover" />
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>R{book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${book.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
<br></br>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  );
};

export default Books;
