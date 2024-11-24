import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);

  return (
    <footer className="bg-[#2d2e32]">
      <div className="flex text-white">
        <div className="flex-1">
          <p>
            copyright{" "}
            <span>
              <MdCopyright />
            </span>
            {year}. All rights reserved
          </p>
        </div>
        <div className="flex-none">
          {/* Additional content can go here */}
        </div>
      </div>

    </footer>
  );
}
