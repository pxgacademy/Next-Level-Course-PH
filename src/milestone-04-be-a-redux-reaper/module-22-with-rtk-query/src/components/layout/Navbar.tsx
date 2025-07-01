import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto py-2 px-4 bg-white/5 rounded-lg mt-2">
      <div>
        <Link to="/">
          <h4 className="text-xl font-semibold text-error">Logo</h4>
        </Link>
      </div>

      <div className="flex items-center gap-x-3">
        <Link to="/tasks">Task</Link>
        <Link to="/users">User</Link>
        <Link to="/redux-counter">Counter</Link>
        <Link to="/hold-button">HB</Link>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
