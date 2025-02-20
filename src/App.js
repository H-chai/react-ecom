import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
