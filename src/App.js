import Home from "./page/Home";
import ADS from "./assets/images/ads.png";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
   return (
      <div className="container mt-5">
         <div className="ads">
            <img src={ADS} className="img-fluid mb-4" />
         </div>
         <Home />
      </div>
   );
}

export default App;
