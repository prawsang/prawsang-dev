import Switch from "../common/Switch";
import MoonStarsFill from "@/public/icons/moon-stars-fill.svg";
import SunFill from "@/public/icons/sun-fill.svg";

const NAV_LNKS = [
  {
    text: "Intro",
    id: "intro",
  },
  {
    text: "Projects",
    id: "projects",
  },
  {
    text: "Skills",
    id: "skills",
  },
  {
    text: "Job Experience",
    id: "job_experience",
  },
  {
    text: "Contact",
    id: "contact",
  },
];

export default function Navbar({
  darkMode,
  onDarkModeChange,
  onNavLinkClick,
}: {
  darkMode: boolean;
  onDarkModeChange: (value: boolean) => void;
  onNavLinkClick: (id: string) => void;
}) {
  return (
    <nav className="nav-bar absolute">
      <div className="app-container">
        <div className="flex justify-between items-center">
          {NAV_LNKS.map(({ text, id }) => (
            <div
              key={"nav-" + id}
              className="nav-link-container"
              onClick={() => onNavLinkClick(id)}
            >
              <a className="nav-link">{text}</a>
              <div className="nav-link-underline" />
            </div>
          ))}
          <Switch
            onChange={onDarkModeChange}
            value={darkMode}
            IconOn={MoonStarsFill}
            IconOff={SunFill}
          />
        </div>
      </div>
    </nav>
  );
}
