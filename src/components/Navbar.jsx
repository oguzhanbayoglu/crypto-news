import React from "react";
import { NavLink } from "react-router-dom";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <div className="navbar justify-between p-4 sticky top-0 backdrop-blur-2xl z-10">
      <NavLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.917cm"
          height="0.917cm"
          className="fill-current"
        >
          <path d="M21.420,25.657 L17.783,25.657 C15.538,25.657 13.718,23.837 13.718,21.592 L13.718,17.71 C13.718,14.825 15.538,13.6 17.783,13.6 L21.420,13.6 C23.665,13.6 25.485,14.825 25.485,17.71 L25.485,21.592 C25.485,23.837 23.665,25.657 21.420,25.657 ZM21.420,11.874 L17.783,11.874 C15.538,11.874 13.718,10.54 13.718,7.809 L13.718,4.496 C13.718,2.251 15.538,0.431 17.783,0.431 L21.420,0.431 C23.665,0.431 25.485,2.251 25.485,4.496 L25.485,7.809 C25.485,10.54 23.665,11.874 21.420,11.874 ZM8.216,25.461 L4.579,25.461 C2.334,25.461 0.514,23.641 0.514,21.396 L0.514,4.603 C0.514,2.358 2.334,0.538 4.579,0.538 L8.216,0.538 C10.461,0.538 12.281,2.358 12.281,4.603 L12.281,21.396 C12.281,23.641 10.461,25.461 8.216,25.461 Z" />
        </svg>
      </NavLink>
      <div className="flex gap-8 ml-24 text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/currencies">Currencies</NavLink>
        <NavLink to="/news">News</NavLink>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
