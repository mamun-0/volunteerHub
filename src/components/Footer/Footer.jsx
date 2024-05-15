import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useProvideMode } from "../../../hooks/useProvideMode";
export function Footer() {
  const {toggle} = useProvideMode()
  return (
    <div className="mt-auto">
      <div className=" bg-slate-200 dark:bg-black">
        <div className="flex flex-col md:flex-row justify-around items-center py-4">
          <div className="flex justify-center space-x-4">
            <img src="/images/footer-icon.svg" alt="" />
            <ul className="space-y-1 text-lg text-cyan-900 dark:text-cyan-200">
              <li>Contact Us</li>
              <li>Mobile : 0179868299</li>
              <li>csemamun30@gmail.com</li>
            </ul>
          </div>
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-cyan-900 dark:text-cyan-200">
              <li>Platform</li>
              <li>Resources</li>
              <li>Privacy Policy</li>
              <li>Solutions</li>
              <li>About</li>
              <li>Terms of Use</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-2 h-1 border-b-indigo-800 dark:border-b-white"></div>
      </div>
      <div className="flex justify-between items-center px-3 dark:bg-black">
        <div>
          <ul className="text-2xl flex space-x-2 dark:text-slate-400">
            <Link to="https://www.facebook.com/">
              <FaFacebook />
            </Link>
            <Link to="https://www.twitter.com/">
              <FaXTwitter />
            </Link>
            <Link to="https://www.youtube.com/">
              <FaYoutube />
            </Link>
          </ul>
        </div>
        <div className="dark:text-slate-400">
        <p>&copy; 2024 All rights reserved.</p>
        <p className="text-lg font-semibold tracking-widest">
          Volunteer<span className="text-yellow-700">Hub</span>
        </p>
        </div>
      </div>
    </div>
  );
}
