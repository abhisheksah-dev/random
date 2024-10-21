import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Main3 from "./components/Main3";
import Main4 from "./components/Main4";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Main2 />
              <Card />
              <Main3 />
              <Main4 />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
