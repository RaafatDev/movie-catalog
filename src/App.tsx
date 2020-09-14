import React, { useReducer } from "react";
import { movieReducer, initialState } from "./appState/movieReducer";
import { Actions } from "./appState/movieActions";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollTop";

// ##########
import {
  Home,
  About,
  SearchResults,
  ViewAll,
  NotFound,
  MovieDetails,
} from "./pages";

// ##########
import "./App.scss";
import MainNav from "./components/navbar/MainNav";
// import MovieDetails from "./pages/MovieDetails";
// import MovieDetails from "./components/movie-details/MovieDetails";

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
  console.log("hiii");
  console.log("hiii");
  console.log("hiii");
  console.log("hiii");
  console.log("hiii");

  return (
    <div className="app min-vh-100">
      {/* <div className="app "> */}
      <MoviesContext.Provider value={{ state, dispatch } as StoreApi}>
        {/* <Router basename="/movie-catalog"> */}
        <Router basename={process.env.PUBLIC_URL}>
          {/* <Router> */}
          <ScrollToTop />
          <MainNav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/results" component={SearchResults} />
            <Route exact path="/viewall" component={ViewAll} />
            <Route
              exact
              path="/details/:kind/:id/:title"
              component={MovieDetails}
            />

            <Route
              exact
              // path="/search?keyword:keyword"
              path="/search/keyword:keyword"
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
