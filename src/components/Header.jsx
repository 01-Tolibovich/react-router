import { NavLink } from "react-router-dom";

const Header = () => {
  const menu = [
    {
      text: "Home",
      link: ".",
    },
    {
      text: "About us",
      link: "about-us",
    },
    {
      text: "Courses",
      link: "courses",
    },
    {
      text: "Posts",
      link: "posts",
    },
    {
      text: "Contacts",
      link: "contacts",
    },
  ];

  return (
    <div className="header">
      <nav>
        {menu.map((elem) => {
          return (
            <NavLink key={elem.index} to={elem.link}>
              {elem.text}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
