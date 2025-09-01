import { CONTACT_ROUTE, LOGO } from "~/lib/vars/contants";
import { ModeToggle } from "./ModeToggle";
import {
  Files,
  Home,
  Layers,
  MessageSquareText,
  PencilLine,
  Redo,
  SquareUserRound,
  type LucideIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router";

interface Navbar {
  path: string;
  icon: LucideIcon;
}
const Navbar = () => {
  const navbar: Navbar[] = [
    {
      path: "/",
      icon: Home,
    },
    {
      path: "about",
      icon: SquareUserRound,
    },
    {
      path: "services",
      icon: Layers,
    },
    {
      path: "works",
      icon: Files,
    },
    {
      path: "blog",
      icon: PencilLine,
    },
    {
      path: "contact",
      icon: MessageSquareText,
    },
  ];

  const location = useLocation();

  return (
    <div className="capitalize">
      <nav className="flex text-light-black dark:text-dark-theme-white items-center justify-between card py-1 gap-4">
        <div className="flex items-center justify-center pl-1 mr-8">
          <img
            src={LOGO}
            alt="logo"
            className="w-10 h-10 aspect-square rounded mr-4"
          />

          <span className="text-2xl font-semibold">
            port<span className="text-theme-primary">Folio</span>
          </span>
        </div>

        <ul className="flex justify-center items-center gap-1 ">
          {navbar.map((nav) => {
            const activeRoute = location.pathname === nav.path;
            return (
              <li key={nav.path}>
                <Link
                  to={nav.path}
                  className={`flex justify-center items-center gap-3 px-3 py-2 rounded-md group ${
                    activeRoute
                      ? "text-dark-theme-black bg-theme-background dark:text-dark-theme-white dark:bg-dark-theme-black"
                      : " hover:bg-theme-background dark:hover:bg-dark-theme-black text-light-black dark:hover:text-dark-theme-white"
                  }`}
                >
                  <nav.icon
                    className={`w-5 stroke-2 ${
                      activeRoute
                        ? "text-inherit"
                        : "text-[#8991A7] group-hover:text-black dark:group-hover:text-dark-theme-white"
                    } `}
                  />
                  <span className="font-medium ">
                    {nav.path === "/" ? "home" : nav.path}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-center gap-4">
          <ModeToggle />
          <Link
            to={CONTACT_ROUTE}
            className="capitalize font-semibold cursor-pointer text-dark-theme-white bg-dark-theme-black dark:bg-dark-theme-black hover:bg-theme-primary dark:hover:bg-theme-primary rounded-lg px-4 py-3 whitespace-nowrap transition-all"
            type="button"
          >
            let's talk{" "}
            <Redo className="rotate-x-180 -rotate-[28deg] translate-y-0.5 inline ml-2 w-5" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
