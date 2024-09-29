import { FaTimes } from "react-icons/fa";

export default function ModalPopup({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 transition-transform transform animate-slide-in">
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-6">
        <button onClick={closeModal} className="absolute top-4 right-4">
          <FaTimes className="text-2xl" />
        </button>
        <ul className="flex flex-col items-center gap-4">
          <li className="cursor-pointer" onClick={closeModal}>
            Home
          </li>
          <li className="cursor-pointer" onClick={closeModal}>
            About
          </li>
          <li className="cursor-pointer" onClick={closeModal}>
            Portfolio
          </li>
          <li className="cursor-pointer" onClick={closeModal}>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
