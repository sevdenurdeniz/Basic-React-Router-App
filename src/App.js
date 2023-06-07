import "./App.css";
import Nav from "./Nav";
import Hakkimizda from "./Hakkimizda";
import Uyeler from "./Uyeler";
import UyeDetay from "./UyeDetay";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/uyeler" element={<Uyeler />} />
          <Route path="/uyeler/:id" element={<UyeDetay />} />
        </Routes>
      </div>
    </Router>
  );
}
const Home = () => {
return(
  <div>
  <h3>Anasayfa</h3>
</div>
)
};

export default App;
