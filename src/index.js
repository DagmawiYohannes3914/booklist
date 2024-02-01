import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "Sarah J",
  title: "House of Flame and shadows",
  img: "./images/flame.jpg",
};
const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL900_SR900,600_.jpg",
};

// const author = "Sarah J";
// const title = "House of Flame and shadows";
// const img = "./images/flame.jpg";
const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

// const Image = () => (
//   <img
//     // src="https://images-na.ssl-images-amazon.com/images/I/91jbHTNpy6L._AC_UL900_SR900,600_.jpg"
//     // alt="House of Flame and shadows"
//     src="./images/flame.jpg"
//     alt="House of Flame and shadows"
//   />
// );

// const Title = () => <h2>House of Flame and shadows</h2>;
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return (
//     // <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
//     //   Sarah J
//     // </h4>
//     // <h4 style={inlineHeadingStyles}>Sarah J</h4>
//   );
// };
