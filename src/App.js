import {Route, Switch, Link} from "react-router-dom"
import Home from "./components/Home"
import CookBook from "./components/CookBook"
import Nav from "./components/Nav"
import "./App.css"


function App() {
  return (
    <main className="container-fluid  p-0">
      <Nav/>
      <Switch>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
        <Route path="/cook_book">
          <CookBook/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
