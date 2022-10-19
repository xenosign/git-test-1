import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Item from './pages/Item';
import Join from './pages/Join';
import Login from './pages/Login';
import Signup5 from './pages/Signup5';
import Signup4 from "./pages/Signup4";
<<<<<<< Updated upstream
=======
import Kangji from "./pages/Kangji";
>>>>>>> Stashed changes

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/item" element={<Item />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup5" element={<Signup5 />} />
      <Route path="/signup4" element={<Signup4 />} />
<<<<<<< Updated upstream
=======
      <Route path="/signup4" element={<Signup6 />} />
      <Route path="/kangji" element={<Kangji />} />
>>>>>>> Stashed changes
    </Routes>
  );
}

export default App;
