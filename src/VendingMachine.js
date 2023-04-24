import { Link } from "react-router-dom";

/** 
 * Component for VendingMachine
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * App -> VendingMachine -> Snack
 */

function VendingMachine() {

    return (
        <div className="VendingMachine">
            <h2>Choose a Snack</h2>
            <Link to="/snack/chips" >
                Chips
            </Link>
            <br></br>
            <Link to="/snack/cookies" >
                Cookies
            </Link>
            <br></br>
            <Link to="/snack/doughnuts" >
                Doughnuts
            </Link>
        </div>
    )
}

export default VendingMachine;