import { useState } from "react";
import Article from "./Article";

function Main() {
  const content1 = [
    {
      content: "Content Box 1",
      id: 1,
    },
    {
      content: "Content Box 2",
      id: 2,
    },
    {
      content: "Content Box 3",
      id: 3,
    },
    {
      content: "Content Box 4",
      id: 4,
    },
  ];
  const content2 = [
    {
      content: "Content Box 5",
      id: 5,
    },
    {
      content: "Content Box 6",
      id: 6,
    },
    {
      content: "Content Box 7",
      id: 7,
    },
    {
      content: "Content Box 8",
      id: 8,
    },
  ];

  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(true);
  }

  return (
    <main className="main">
      <h2 className="main__title">Section Title</h2>
      <Article contents={content1}></Article>
      <button className="main__CTA" onClick={handleClick}>
        Call to Action
      </button>
      <Article
        contents={content2}
        style={{ display: isActive ? "" : "none" }}
      ></Article>
    </main>
  );
}

export default Main;
