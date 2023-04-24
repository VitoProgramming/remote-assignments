import { useState, useRef } from "react";

function Nav() {
  const items = [
    {
      item: "Item 1",
      id: 1,
    },
    {
      item: "Item 2",
      id: 2,
    },
    {
      item: "Item 3",
      id: 3,
    },
    {
      item: "Item 4",
      id: 4,
    },
  ];

  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((current) => !current);
  }

  return (
    <nav className="main-header__nav">
      <div className="nav__container">
        <a href="#" className="nav__logo">
          Website Title / Logo
        </a>
        <div
          className="nav__menu__container"
          style={{
            right: isActive ? "0px" : "-100%",
          }}
        >
          <ul className="nav__menu">
            {items.map((item) => (
              <li key={item.id.toString()}>
                <a href="#" className="menu__link" onClick={handleClick}>
                  {item.item}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__close" onClick={handleClick}>
            <span className="close__bar"></span>
            <span className="close__bar"></span>
            <span className="close__bar"></span>
          </div>
        </div>
        <div className="nav__hamburger" onClick={handleClick}>
          <span className="hamburger__bar"></span>
          <span className="hamburger__bar"></span>
          <span className="hamburger__bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
