import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="container-fluid d-flex justify-content-center sticky-top p-2 nav-background">
        <div className="col-2 mx-1 d-flex justify-content-center">
          <Link className="btn button-color" to="/">Home</Link>
        </div>
        <div className="col-2 mx-1 d-flex justify-content-center">
          <Link className="btn button-color" to="/cook_book">Cook Book</Link>
        </div>
      </nav>
  )
}