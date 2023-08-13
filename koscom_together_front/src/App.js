import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Balance from "./pages/Balance";
import Price from "./pages/Price";
import History from "./pages/History";
import StockHistory from "./pages/StockHistory";
import SubLayout from "./components/SubLayout";
import Asset from "./pages/Asset";
import NewAccount from "./pages/NewAccount";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/price" element={<Price />} />
            <Route path="/history" element={<History />} />
          </Route>
          <Route element={<SubLayout />}>
            <Route path="/new" element={<NewAccount />} />
            <Route path="/asset" element={<Asset />} />
            <Route path="/stockHistory" element={<StockHistory />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
