import './App.css';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Snack from './Snack';

function App() {
  return (
    <div className="App">
      <h1>Vending Machine</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/snack/:name" element={<Snack />} />
          <Route path="/" element={<VendingMachine />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
