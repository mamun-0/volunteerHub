import React from "react";
import { useProvideAuth } from "../../../hooks/useProvideAuth";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { LoadingSpin } from "../LoadingSpin/LoadingSpin";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useProvideMode } from "../../../hooks/useProvideMode";
const defaultPhotoURL =
  "https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png";
export function NavBar() {
  const {
    loading,
    firebaseAuth: { user, logOut },
  } = useProvideAuth();
  const { toggle, setToggle } = useProvideMode();
  const displayName =
    user?.displayName || user?.user?.displayName || "Not Found";
  const photoURL = user?.photoURL || user?.user?.photoURL || defaultPhotoURL;
  function logMeOut() {
    logOut();
    toast.success("Successfully Logout !😀");
  }
  return (
    <div className="navbar bg-base-200 dark:bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/need-volunteer">Need Volunteer</Link>
            </li>
            {loading ? null : user ? null : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {loading ? null : user ? null : (
              <li>
                <Link to="/register">Register</Link>
              </li>
            )}
          </ul>
        </div>

        <Link to="/">
          <img
            className="h-14 cursor-pointer hidden min-[425px]:inline-block"
            src="/images/logo-full-color.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 dark:text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/need-volunteer">Need Volunteer</Link>
          </li>
          {loading ? null : user ? null : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {loading ? null : user ? null : (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <div
          onClick={() => {
            setToggle();
          }}
          className="text-3xl cursor-pointer dark:text-white"
        >
          {toggle ? <MdLightMode /> : <MdDarkMode />}
        </div>
        <div className="dropdown dropdown-end hiddenLogoutBtnParent">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full" id="my-anchor-element-id">
              {loading ? (
                <LoadingSpin />
              ) : (
                <>
                  <img alt="Profile" src={photoURL} />
                  <Tooltip
                    // Don't forget the `#`!
                    anchorSelect="#my-anchor-element-id"
                    position="left"
                    content={displayName}
                  />
                </>
              )}
            </div>
          </div>
          {user ? (
            <div className="hiddenLogoutBtn">
              <ul>
                <li>
                  <button onClick={logMeOut} className="btn btn-error btn-sm">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* My Profile */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-outline">
            <button className="dark:text-white">My Profile ⬇</button>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:text-white dark:bg-black"
          >
            <li>
              <Link to="/add-volunteer" className="justify-between">
                Add Volunteer
              </Link>
            </li>
            <li>
              <Link to={"/manage-post"}>Manage My Post</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
