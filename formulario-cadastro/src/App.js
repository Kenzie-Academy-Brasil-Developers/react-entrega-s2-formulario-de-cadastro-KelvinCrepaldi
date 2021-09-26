import "./App.css";
import { Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Sucess from "./pages/Sucess";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Cadastro />
          </Route>
          <Route exact path="/sucess/:user">
            <Sucess />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
