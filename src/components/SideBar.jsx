import { motion, AnimatePresence } from "framer-motion";
import { ImProfile } from "react-icons/im";
import K from "../constants";
import { NavLink } from "react-router";
import { FiChevronDown, FiLogOut, FiMenu } from "react-icons/fi";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

const SideBar = ({ isOpen, setIsOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true); // controls mobile visibility only

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = (index) =>
    setActiveDropdown((prev) => (prev === index ? null : index));

  const sidebarVariants = {
    open: { width: 240 },
    closed: { width: 80 },
  };

  const dropdownVariants = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed top-5 left-5 z-50 bg-[#1a2a1a] text-white p-2 rounded-full shadow-md md:hidden"
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={sidebarVariants}
            initial={false}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-screen bg-[#112211] text-white shadow-lg z-40 p-4 pt-16 md:pt-14 md:block"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-10 px-2">
              <div className="flex items-center gap-3">
                <ImProfile className="text-3xl" />
                {isOpen && <h1 className="text-xl font-bold">Admin</h1>}
              </div>
              <button
                onClick={toggleSidebar}
                className="hidden md:block text-gray-400 hover:text-white transition"
              >
                <FiMenu />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-3 text-sm">
              {K.NAVLINKS.map(({ icon, text, path, children }, index) => (
                <div key={text}>
                  {children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`flex items-center w-full gap-3 px-3 py-2 rounded-md hover:bg-green-700 transition ${
                          activeDropdown === index ? "bg-green-600" : ""
                        }`}
                        data-tooltip-id={!isOpen ? `tt-${text}` : undefined}
                        data-tooltip-content={!isOpen ? text : undefined}
                      >
                        <span className="text-xl">{icon}</span>
                        {isOpen && <span className="flex-1">{text}</span>}
                        {isOpen && <FiChevronDown className="text-sm" />}
                      </button>

                      <motion.div
                        animate={activeDropdown === index ? "open" : "closed"}
                        variants={dropdownVariants}
                        initial="closed"
                        className="overflow-hidden ml-7"
                      >
                        {children.map(({ text: subText, path: subPath }) => (
                          <NavLink
                            key={subText}
                            to={subPath}
                            className={({ isActive }) =>
                              `block px-3 py-1 rounded hover:bg-green-800 text-gray-300 ${
                                isActive ? "text-white font-semibold" : ""
                              }`
                            }
                          >
                            {subText}
                          </NavLink>
                        ))}
                      </motion.div>
                    </>
                  ) : (
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                          isActive
                            ? "bg-green-500 text-white"
                            : "hover:bg-green-700 text-gray-300"
                        }`
                      }
                      data-tooltip-id={!isOpen ? `tt-${text}` : undefined}
                      data-tooltip-content={!isOpen ? text : undefined}
                    >
                      <span className="text-xl">{icon}</span>
                      {isOpen && <span>{text}</span>}
                    </NavLink>
                  )}
                  {/* Tooltip fallback */}
                  {!isOpen && (
                    <Tooltip id={`tt-${text}`} place="right" effect="solid" />
                  )}
                </div>
              ))}
            </nav>

            {/* Logout */}
            <div className="mt-auto px-2 pt-10">
              <button className="flex items-center gap-3 text-red-400 hover:text-red-600">
                <FiLogOut className="text-xl" />
                {isOpen && <span>Log Out</span>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;
