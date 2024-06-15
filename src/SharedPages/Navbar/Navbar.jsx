import {
    FaHeadset,
    FaQuestionCircle,
    FaSearchLocation,
    FaUserCircle,
  } from "react-icons/fa";
  
  const Navbar = () => {
    return (
      <div>
        <div className="hidden md:hidden lg:block bg-slate-400 bg-opacity-40 p-2">
          <div className=" max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold">
              <FaHeadset className="text-[#C89C74]"></FaHeadset>
              Hotline:
              <span className="text-[#C89C74]"> +018 343 434 34</span>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <FaUserCircle className="text-[#C89C74]"></FaUserCircle>{" "}
                <span className="hover:text-[#C89C74] hover:duration-500">
                  Login/Register
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FaQuestionCircle className="text-[#C89C74]"></FaQuestionCircle>{" "}
                <span className="hover:text-[#C89C74] hover:duration-500">
                  FAQ
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FaSearchLocation className="text-[#C89C74]"></FaSearchLocation>{" "}
                <span className="hover:text-[#C89C74] hover:duration-500">
                  Order Tracking
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 shadow-lg">
          <div className=" max-w-[1500px] mx-auto p-8 navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li className="">
                    <a>Catelogue</a>
                    <ul className="p-2 w-full absolute">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost normal-case text-xl">
                <img
                  className="w-12 rounded-full"
                  src="https://i.ibb.co/wzNpb6G/Yellow-Modern-Gadget-Store-Logo.jpg"
                  alt=""
                />
                Furni Havern
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Item 1</a>
                </li>
                <li tabIndex={0}>
                  <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <div className="form-control w-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered rounded-3xl w-24 md:w-auto"
                />
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">0</span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  