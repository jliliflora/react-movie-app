import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react-movie-app/movie/:id" element={<Detail />}></Route>
        <Route path="/react-movie-app" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
