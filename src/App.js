import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Contact from "./views/Contact";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

