import { Link } from "react-router-dom";
import { useState } from "react"; 
import NGOlogo from "../assets/NGOlogo.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const links = (
    <>
      <Link to="/" className="py-2 hover:text-violet-600 hover:scale-110 text-[20px] no-underline">Home</Link>
      <Link to="/activities" className="py-2 hover:text-violet-600 hover:scale-110 text-[20px] no-underline">Activities</Link>
      <Link to="/aboutus" className="py-2 hover:text-violet-600 hover:scale-110 text-[20px] no-underline">About Us</Link>
      <Link to="/donate" className="py-2 hover:text-violet-600 hover:scale-110 text-[20px] no-underline">Donate</Link>
      <Link to="/donate" className="py-2 hover:text-violet-600 hover:scale-110 text-[20px] no-underline">Sign In</Link> 
      <Link to="/donate" className="py-2 hover:text-violet-600 hover:scale-110 text-[20px] no-underline">Sign Up</Link>
     </>
  );

  return (
    <div className="p-3 px-5 flex justify-between shadow-md items-center bg-white relative z-50 rounded-full">
      <img src={NGOlogo} width={50} height={50} alt="NGO Logo" />

      {/* Toggle button for mobile view */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between gap-7 items-center">
        {links}
      </div>

      {/* Mobile Navbar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-start p-5 z-50">
          {links}
        </div>
      )}
    </div>
  );
}

export default Header;