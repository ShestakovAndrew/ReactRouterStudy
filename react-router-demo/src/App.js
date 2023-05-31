import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {NavigationBar} from "./components/NavigationBar";

function App() {
  return (
      <>
          <NavigationBar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='about' element={<About />} />
          </Routes>
      </>
  );
}

export default App;
