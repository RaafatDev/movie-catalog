import React, { useReducer } from "react";
// import { movieReducer, initialState, State } from "./appState/movieReducer";
import { movieReducer, initialState } from "./appState/movieReducer";
import { Actions } from "./appState/movieActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import MainSlider from "./components/slider/MainSlider";

import "./App.scss";
// import MoviesList from "./components/MoviesList";
import MainNav from "./components/navbar/MainNav";
import Home from "./pages/Home";
import About from "./pages/About";
import SearchResults from "./pages/SearchResults";
import MovieDetails from "./pages/MovieDetails";
import ViewAll from "./pages/ViewAll";

export type StoreApi = {
  state: typeof initialState;
  dispatch: React.Dispatch<Actions>;
  // dispatch: React.Dispatch<any>;
};

export const MoviesContext = React.createContext<
  StoreApi | typeof initialState
>(initialState);

const App: React.FC = () => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MoviesContext.Provider value={{ state, dispatch } as StoreApi}>
      <Router>
        <MainNav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/results" component={SearchResults} />
          <Route path="/viewall" component={ViewAll} />
          <Route path="/:id" component={MovieDetails} />
          {/* <Router exact path="/" component={Home} /> */}
        </Switch>
        {/* <div className="App">
          <MoviesList />
        </div> */}
      </Router>
    </MoviesContext.Provider>
  );
};

export default App;
