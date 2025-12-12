import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";



function App() {
  return (
    <>
    <Navbar/>
    <Portfolio/>
    
    <About/>
    <Projects/>
    <Contact/>
    <ToastContainer position="top-right" autoClose={2000} />

    </>
    
  );
}

export default App;
