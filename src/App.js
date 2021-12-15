import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Table from "./pages/Table";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/table" component={Table} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
