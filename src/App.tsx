import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewSort } from "./pages/NewSort";

import { SortContextProvider } from './contexts/SortContext';

function App() {
  return (
    <BrowserRouter>
      <SortContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/newSort" component={NewSort} />
        </Switch>
      </SortContextProvider>
    </BrowserRouter>
  );
}

export default App;
