import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

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
    img: "./images/atomic.jpg",
    id: "2",
  },
];

const BookList = () => {
  const SomeValue = "shakeAndBake";
  const displayValue = () => {
    console.log(SomeValue);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, displayValue } = props;

  //   const displayTitle = () => {
  //     console.log(title);
  //   };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>Click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
