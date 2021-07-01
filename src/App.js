import "./App.css";
import Header from "./components/Header";
import StartPage from "./components/StartPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Header />
          <StartPage />
        </Route>
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
