import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>new horizon posts</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="post">Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
