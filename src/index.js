import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return <section></section>;
};

const Book = () => {
  return <article></article>;
};

const Image = () => <h2>image plaeholder</h2>;
const Title = () => <h2>Book Title</h2>;
const Author = () => {
  return <h4>Author</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
