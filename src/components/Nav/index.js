import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav className="container-fluid d-flex justify-content-end sticky-top p-2 nav-background align-items-center">
      <div className="me-auto p-2">
        <Link
          to="/"
          className="m-1 d-flex text-decoration-none text-white align-items-center"
        >
          <FontAwesomeIcon icon={faUtensils} size="lg" color="white" />
          <h3 className="m-2 navi-link">WE COOK</h3>
        </Link>
      </div>
      <div className="col-2 w-auto mx-1">
        <Link className="btn button-color" to="/">
          Home
        </Link>
      </div>
      <div className="col-2 w-auto mx-1">
        <Link className="btn button-color" to="/cook_book">
          Cook Book
        </Link>
      </div>
    </nav>
  );
}
