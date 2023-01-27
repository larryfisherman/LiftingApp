import Header from "./components/Header";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";
import WorkoutsDiary from "./components/WorkoutsDiary";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Workouts from "./components/Workouts";
import WorkoutDetails from "./components/WorkoutDetails";

function App() {
  console.log("nowy commit");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/registerPage">
            <RegisterPage />
          </Route>
          <Route path="/loginPage">
            <LoginPage />
          </Route>
          <Route path="/recipes">
            <Link to="/">
              <Header />
            </Link>
            <Recipes />
          </Route>
        </Switch>
        <Route path="/details/:id">
          <RecipeDetails />
        </Route>
        <Route path="/workouts">
          <Link to="/">
            <Header />
          </Link>
          <Workouts />
        </Route>
        <Route path="/workoutsDiary">
          <Link to="/">
            <Header />
            <WorkoutsDiary />
          </Link>
        </Route>
        <Route path="/exercise/:id">
          <WorkoutDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;
