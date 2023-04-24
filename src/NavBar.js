import { Link } from "react-router-dom";

/**
 * Navbar for VendingMachine
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> NavBar -> Snack
 */

function NavBar({ snacks }) {

  return (
  <div className="NavBar">
    <h3>Navigation:</h3>
    <ul>
      {snacks.map(snack => (
        <li key={snack}>
          <Link to={`/snack/${snack}`}>{snack}</Link>
        </li>
      ))}
    </ul>
  </div>

)};

export default NavBar;