import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Gallery from "./Page/Gallery/Gallery";
import Footer from "./Component/Navbarcomp/Footer/Footer";
import Contactus from "./Page/Contactus/Contactus";
import Blog from "./Page/Blog/Blog";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="footer" element={<Footer />} />
        </Routes>
      </Router>
      {/* <Navbarcomp /> */}
      {/* <Home/> */}
      {/* <Gallery/>
<Contactus/>
<Footer/> */}
    </div>
  );
}

export default App;
