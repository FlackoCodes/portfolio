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
      <nav className="py-4 border-b shadow">
        <div className="flex justify-between items-center w-[90%] my-0 mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-black tracking-tight font-sans">
              Flacko.dev
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-3">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

          </div>
          <div className="md:hidden cursor-pointer" onClick={modalPopup}>
            {/* {active ? (
              <FaTimes className="text-2xl" />
            ) : ( */}
            <RxHamburgerMenu className="text-2xl font-bold text-black" />
            {/* )} */}
          </div>
        </div>
      </nav>
      {active && <ModalPopup closeModal={modalPopup} />}
    </>
  );
}
