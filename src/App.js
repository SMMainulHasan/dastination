import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Destination from "./components/Destination/Destination";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

export const userContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState();
  return (
    <userContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/vehicle-:vehicleType">
            <Destination></Destination>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </userContext.Provider>
  );
}

export default App;
