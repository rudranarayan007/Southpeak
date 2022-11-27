import "./App.css";
import Navbarcomp from "./Component/Navbarcomp/Navbarcomp";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "./Page/Gallery/Gallery";
import Footer from "./Component/Navbarcomp/Footer/Footer";
import Contactus from "./Page/Contactus/Contactus";
function App() {
  return <div>

<Navbarcomp/>
{/* <Home/> */}
<Gallery/>
<Contactus/>
<Footer/>
  </div>;
}

export default App;
