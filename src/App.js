import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Gallery from "./Page/Gallery/Gallery";
import Footer from "./Component/Footer/Footer";
import Contactus from "./Page/Contactus/Contactus";
import Blog from "./Page/Blog/Blog";
import Navbarcomp from "./Component/Navbarcomp/Navbarcomp";
import Notice from "./Page/Notice/Notice";
import About from "./Page/About/About";
import Dummy from "./Component/Dummy/Dummy";
function App() {
  return (
    <div>
      <Router>
        <Navbarcomp/>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="notice" element={<Notice />} />
          
          <Route path="footer" element={<Footer />} />
        </Routes>
        <Footer/>
      </Router> 
{/* <Contactus/> */}


    </div>
  );
}

export default App;
