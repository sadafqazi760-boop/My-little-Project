
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h2>
            Sadaf's <span>Space</span> ✨
          </h2>

          <p>
            A little corner where I create,
            learn and build with love. 💜
          </p>
        </div>

        <div className="footer-socials">

          <a
            href="https://github.com/sadafqazi760-boop/react-button-practice"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sadaf-qazi-2525a3429/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://vercel.com/sadaf6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vercel"
          >
            <SiVercel />
          </a>

        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Sadaf's Space. Made with 💜 and code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;