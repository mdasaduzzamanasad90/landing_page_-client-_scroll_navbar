import { NavLink } from "react-router";

const Navbar = () => {
  // Reusable menu links
  const navlink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `duration-200 ${
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/advantages"}
          className={({ isActive }) =>
            `duration-200 ${
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }`
          }
        >
          Advantages
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/steps"}
          className={({ isActive }) =>
            `duration-200 ${
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }`
          }
        >
          Steps
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/reviews"}
          className={({ isActive }) =>
            `duration-200 ${
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }`
          }
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/getquote"}
          className={({ isActive }) =>
            `duration-200 ${
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }`
          }
        >
          Get Quote
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 z-50 md:px-20 px-5">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-8 6h8"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
          </ul>
        </div>

        {/* Logo */}
        <a
          href="#home"
          className="btn btn-ghost text-2xl md:text-4xl font-bold text-primary"
        >
          OUYI
        </a>
      </div>

      {/* Center Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium">
          {navlink}
        </ul>
      </div>

      {/* Right Side CTA */}
      <div className="navbar-end">
        <a
          href="#quote"
          className="btn btn-primary rounded-full font-semibold md:px-6 hover:scale-105 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          Free Quote
        </a>
      </div>
    </div>
  );
};

export default Navbar;
