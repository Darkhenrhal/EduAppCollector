import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 fixed w-full bg-grey z-50 shadow-md"> 
      {/* Fixed position, full width, and shadow for navbar */}
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <a href="/" className="text-xl font-bold tracking-wide uppercase text-greylight">
          MyGPA
        </a>

        {/* Desktop menu */}
        <ul className="hidden space-x-8 lg:flex">
          <li>
            <a href="#hero" className="text-greylight hover:text-deep-purple-accent-400">
              Download
            </a>
          </li>
          <li>
            <a href="#features" className="text-greylight hover:text-deep-purple-accent-400">
              Features
            </a>
          </li>
          <li>
            <a href="#contact" className="text-greylight hover:text-deep-purple-accent-400">
              Contact
            </a>
          </li>
          <li>
            <a href="#footer" className="text-greylight hover:text-deep-purple-accent-400">
              Collaboration
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            className="text-greylight"
            onClick={() => setIsMenuOpen(true)}
          >
            <TiThMenu className="text-2xl" />
          </button>

          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full bg-greylight p-5 shadow-md">
              <div className="flex items-center justify-between">
                <a href="/" className="text-xl font-bold tracking-wide uppercase text-grey">
                  MyGPA
                </a>
                <button onClick={() => setIsMenuOpen(false)} className="text- hover:text-black">
                  X
                </button>
              </div>

              <nav className="mt-4">
                <ul className="space-y-4">
                  <li>
                    <a href="#hero" className="text-grey font-bold hover:text-black">
                      Download
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="text-grey font-bold hover:text-black">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-grey font-bold hover:text-black">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#footer" className="text-grey font-bold hover:text-black">
                      Collaboration
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
