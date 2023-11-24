import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md pr-6">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Study Booster</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "underline font-semibold" : "font-semibold"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/schedules"
                className={({ isActive }) =>
                  isActive ? "underline font-semibold" : "font-semibold"
                }
              >
                Schedules
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/membership"
                className={({ isActive }) =>
                  isActive ? "underline font-semibold" : "font-semibold"
                }
              >
                Membership
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? "underline font-semibold" : "font-semibold"
                }
              >
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <NavLink
                to="/offers"
                className={({ isActive }) =>
                  isActive
                    ? "underline text-orange-500 font-semibold"
                    : "text-orange-500 font-semibold"
                }
              >
                Offers
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/offers"
                className={({ isActive }) =>
                  isActive
                    ? " text-white font-semibold bgPrimary"
                    : "text-white font-semibold bgPrimary rounded-3xl"
                }
              >
                Courses
              </NavLink>
            </li>
          </ul>

          <ul className="menu menu-horizontal px-1 lg:hidden pr-6">
            <li tabIndex={0}>
              <details>
                <summary>Menu</summary>
                <ul className="p-2 ">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "underline font-semibold" : ""
                      }
                    >
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "underline font-semibold" : "font-semibold"
                      }
                    >
                      About
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/schedules"
                      className={({ isActive }) =>
                        isActive ? "underline font-semibold" : "font-semibold"
                      }
                    >
                      Schedules
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/membership"
                      className={({ isActive }) =>
                        isActive ? "underline font-semibold" : "font-semibold"
                      }
                    >
                      Membership
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/pricing"
                      className={({ isActive }) =>
                        isActive ? "underline font-semibold" : "font-semibold"
                      }
                    >
                      Pricing
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/offers"
                      className={({ isActive }) =>
                        isActive ? "underline font-semibold" : "font-semibold"
                      }
                    >
                      Offers
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/course"
                      className={({ isActive }) =>
                        isActive ? "underline font-semibold" : "font-semibold"
                      }
                    >
                      Course
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
