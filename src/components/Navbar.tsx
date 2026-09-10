import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const LINKS: [string, string][] = [
  ["Home", "/"],
  ["Search", "/search"],
  ["Offers", "/offers"],
  ["Dashboard", "/dashboard"],
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-[76px] flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex gap-8">
          {LINKS.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className={`text-sm pb-1 border-b ${
                location.pathname === to
                  ? "text-charcoal border-gold"
                  : "text-charcoalSoft border-transparent"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/login")} className="btn-outline !py-2 !px-4 text-[13px]">
            Sign In
          </button>
          <button onClick={() => navigate("/search")} className="btn-primary !py-2 !px-5 text-[13px]">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}
