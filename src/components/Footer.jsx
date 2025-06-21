import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const GITHUB = "https://www.github.com/FlackoCodes";
  const LINKEDIN = "https://www.linkedin.com/in/joseph-kofi-leslie-lartey-6b905b222/";
  const TWITTER = "https://x.com/kinglatito";

  return (
    <footer className="bg-[#2d2e32] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left: Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="flex items-center gap-1">
            <MdCopyright className="text-lg" />
            {year} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FACC15] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FACC15] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href={TWITTER}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FACC15] transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
