import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    // src="https://images-na.ssl-images-amazon.com/images/I/91jbHTNpy6L._AC_UL900_SR900,600_.jpg"
    // alt="House of Flame and shadows"
    src="./images/flame.jpg"
    alt="House of Flame and shadows"
  />
);

const Title = () => <h2>House of Flame and shadows</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return (
    // <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
    //   Sarah J
    // </h4>
    <h4 style={inlineHeadingStyles}>Sarah J</h4>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
