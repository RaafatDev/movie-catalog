import React, { useReducer } from "react";
// import { movieReducer, initialState, State } from "./appState/movieReducer";
import { movieReducer, initialState } from "./appState/movieReducer";
import { Actions } from "./appState/movieActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import MainSlider from "./components/slider/MainSlider";

import "./App.scss";
// import MoviesList from "./components/MoviesList";
import MainNav from "./components/navbar/MainNav";
import Home from "./components/Home";
import About from "./components/About";
import SearchResults from "./components/SearchResults";
// import MovieDetails from "./pages/MovieDetails";
import MovieDetails from "./components/movie-details/MovieDetails";
import ViewAll from "./components/ViewAll";
import NotFound from "./components/NotFound";

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
    <div className="app min-vh-100">
      {/* <div className="app "> */}
      <MoviesContext.Provider value={{ state, dispatch } as StoreApi}>
        <Router>
          <MainNav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/results" component={SearchResults} />
            <Route exact path="/viewall" component={ViewAll} />
            <Route exact path="/movie/:id/:title" component={MovieDetails} />
            <Route
              exact
              path="/search?keyword:keyword"
              component={SearchResults}
            />
            <Route path="/" render={NotFound} />
          </Switch>
        </Router>
      </MoviesContext.Provider>
    </div>
  );
};

export default App;
