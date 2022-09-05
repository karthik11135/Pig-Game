import Form from "./components/Form/Form";
import Slider from "./components/Carousel/Carousel";
import Ourteam from "./components/Our Team/Ourteam";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css";
import Home from './components/Homepage/Home';
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/Aboutus/AboutUs";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className={classes.main}>
        <Home id='home' />
        <AboutUs />
        <Ourteam id='ourteam'/>
        <Slider id='slider'/>
        <Form id='form'/>
      </main>
      <Footer id="footer" />
    </div>
  );
}

export default App;
