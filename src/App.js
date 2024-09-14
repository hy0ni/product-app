import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductApp from "./pages/ProductApp";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import './resource/css/App.min.css';

function App() {
  return (
    <Router basename="/product-app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductApp" element={<ProductApp />} />
      </Routes>
    </Router>
  )
}
export default App;