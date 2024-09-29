import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import ModalPopup from "../ModalPopup";

export default function NavBar() {
  const [active, setActive] = useState(false);

  const modalPopup = () => {
    setActive(!active);
    console.log("fired function");
  };

  return (
    <>
      <nav className="py-4 border-b shadow-md">
        <div className="flex justify-between items-center w-[90%] my-0 mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-black tracking-tight font-sans">
              Flacko.dev
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
          {active ? (
            <FaTimes onClick={modalPopup} className="text-2xl cursor-pointer" />
          ) : (
            <RxHamburgerMenu
              className="md:hidden text-2xl font-bold text-black cursor-pointer"
              onClick={modalPopup}
            />
          )}
        </div>
      </nav>
      {active && <ModalPopup closeModal={modalPopup} />}
    </>
  );
}
