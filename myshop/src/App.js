import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import ProductLayout from "./layout/productLayout/ProductLayout";
import LoginPage from "./layout/loginLayout/loginPage";
import HomePage from "./layout/homeLayout/HomePage";


function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/admin" element={<ProductLayout />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
