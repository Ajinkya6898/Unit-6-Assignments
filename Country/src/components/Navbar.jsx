import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="compo">
        <Link to="/">Home</Link>
        <Link to="/citi">Add-Citi</Link>
        <Link to="/country">Add-Country</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
