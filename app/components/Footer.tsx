import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="capitalize">
      <p className="text-center text-sm dark:text-dark-theme-light-white">
        &#64; yashLodhi 2025, design by{" "}
        <Link
          target="_blank"
          to="https://elements.envato.com/bentofolio-personal-portfolio-html-template-FQJYXNH"
          className="text-theme-primary"
        >
          marvelTheme
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
