import { Link } from "react-router-dom";

/**
 * Component for VendingMachine
 *
 * Props:
 * - snacks
 *
 * State:
 * - none
 *
 * App -> VendingMachine -> Snack
 */

function VendingMachine({ snacks }) {

    return (
        <div className="VendingMachine">
            <h2>Choose a Snack</h2>

            <ul>
                {snacks.map(snack => (
                    <li key={snack}>
                        <Link to={`/snack/${snack}`}>{snack}</Link>
                    </li>
                ))}
            </ul>

            {/* <Link to="/snack/chips" >
                Chips
            </Link>
            <br></br>
            <Link to="/snack/cookies" >
                Cookies
            </Link>
            <br></br>
            <Link to="/snack/doughnuts" >
                Doughnuts
            </Link> */}

        </div>
    );
}

export default VendingMachine;