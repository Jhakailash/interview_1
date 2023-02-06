import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import Category from './Components/Category/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Category />} />
        {/* <Route path="/list" element={<Cards />} /> */}
        {/* <Route pat h="/bookmark" element={<Bookmark />} /> */}
      </Routes>
    </div>
  );
}

export default App;
