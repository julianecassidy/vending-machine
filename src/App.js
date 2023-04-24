import './App.css';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Snack from './Snack';
import NavBar from "./NavBar";

// TODO: doc string

function App() {

  const snacks = ["chips", "cookies", "doughnuts"];

  return (
    <div className="App">
      <h1>Vending Machine</h1>
      <BrowserRouter>
        <NavBar snacks={snacks} />
        <Routes>
          <Route path="/snack/:name" element={<Snack />} />
          <Route path="/" element={<VendingMachine snacks={snacks} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
