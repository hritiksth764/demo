import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import About from "./components/About";
import Community from "./components/Community";
import PageTransition from "./components/PageTransition";
import TransitionOverlay from "./components/TransitionOverlay";
import Office from "./components/Offices";
import Retail from "./components/Retail";
import ExclusiveAccess from "./components/ExclusiveAccess";

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
      <Route
        path="/Community"
        element={
          <PageTransition>
            <Community />
          </PageTransition>
        }
      />
      <Route
        path="/Office"
        element={
          <PageTransition>
            <Office />
          </PageTransition>
        }
      />
      <Route
        path="/Retail"
        element={
          <PageTransition>
            <Retail />
          </PageTransition>
        }
      />
      <Route
        path="/ExclusiveAccess"
        element={
          <PageTransition>
            <ExclusiveAccess />
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
