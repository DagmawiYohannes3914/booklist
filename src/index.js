import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Sarah J",
    title: "House of Flame and shadows",
    img: "./images/flame.jpg",
    id: "1",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL900_SR900,600_.jpg",
    id: "2",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleformInput = () => {
    console.log("handle form input");
  };
  const handlebuttonclick = () => {
    alert("handle form button");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleformInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handlebuttonclick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
