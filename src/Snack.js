import { useParams, Link } from "react-router-dom";

// TODO: include useParams in doc string

/** Component for individual snacks
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * VendingMachine ->
 */

function Snack() {
  const {name} = useParams();

  return (
    <div className="Snack">
      <p>Delicious {name}.</p>
      <button><Link to={"/"}>Return</Link></button>
    </div>
  )
}

export default Snack;