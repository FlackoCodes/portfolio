import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [active, setActive] = useState(false);

  const modalPopup = () => {
    setActive(!active);
    console.log("fired function");
  };

  return (
    <nav className="flex justify-between items-center w-[90%] my-0 mx-auto py-4 border-b shadow-md">
      <div>Flacko.dev</div>
      <div className="hidden md:block">
        <ul className="flex items-center gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
      <RxHamburgerMenu className="md:hidden" onClick={modalPopup} />
    </nav>
  );
}
