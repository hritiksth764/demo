import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import About from "./components/About";
import PageTransition from "./components/PageTransition";
import TransitionOverlay from "./components/TransitionOverlay";

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <PageTransition>
            <Home />
          </PageTransition>
        }
      />
      <Route
        path="/about"
        element={
          <PageTransition>
            <About />
          </PageTransition>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <div className="w-full">
        <TransitionOverlay />
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
