import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Item from "./pages/Item";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Signup1 from "./pages/Signup1";
import Signup4 from "./pages/Signup4";
import Kangji from "./pages/Kangji";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/item" element={<Item />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup1" element={<Signup1 />} />
      <Route path="/signup4" element={<Signup4 />} />
      <Route path="/kangji" element={<Kangji />} />
    </Routes>
  );
}

export default App;
