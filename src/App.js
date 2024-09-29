import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductApp from "./pages/Products";
import './resource/css/App.min.css';

function App() {
  return (
    <Router basename="/product-app">
      <Routes>
        <Route path="/" element={<ProductApp />} />
      </Routes>
    </Router>
  )
}
export default App;