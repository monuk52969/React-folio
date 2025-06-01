import { FaGithub, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";
import Logo from "../../assets/monulogo.webp";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label="Home">
          <img src={Logo} alt="logo" className="mx-2" width={50} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/monu-kumar-a2b257220"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/monuk52969"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/markdev_services"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance"
        >
          <FaBehance />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
