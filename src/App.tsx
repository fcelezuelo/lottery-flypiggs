import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewSort } from "./pages/NewSort";
import { Login } from "./pages/Login";

import { SortContextProvider } from './contexts/SortContext';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <SortContextProvider>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/newSort" component={NewSort} />
          </Switch>
        </AuthContextProvider>
      </SortContextProvider>
    </BrowserRouter>
  );
}

export default App;
