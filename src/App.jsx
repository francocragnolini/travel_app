import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Navbar from "./shared/components/Navbar/Navbar";
import Footer from "./shared/components/Footer/Footer";
import Home from "./pages/Home";
import TrendsPage from "./pages/TrendsPage";
import BlogPage from "./pages/BlogPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/trends">
            <TrendsPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
