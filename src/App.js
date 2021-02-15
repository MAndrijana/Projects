import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import BrowseArtists from './Components/BrowseArtists/BrowseArtists';
import ArtistsPage from './Components/ArtistsPage/ArtistsPage';

function App() {
  return (
    <div className="App container-sm-fluid">
      <div className="row no-gutters">
        <div className="col-md-4 offset-md-4">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={BrowseArtists} />
              <Route path="/artists/:id" component={ArtistsPage} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
