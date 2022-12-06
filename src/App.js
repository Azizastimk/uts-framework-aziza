import './App.css';
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Gallery from "./components/Gallery"

import "./style/landingPage.css"
import Contact from "./components/Contact"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"
import Forms from "./components/Forms"

function App() {
  return (
    <div>
      
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      
      <div className="home">
        <Home/>
      </div>

      <div className="trending">
        <Trending/>
      </div>

      <div className="gallery">
        <Gallery/>
      </div>

      <div className="kontak">
        <Contact/>
      </div>

      <div className="about">
        <About/>
      </div>

      <div className="forms">
        <Forms/>
      </div>
      
      <div className="footer">
        <Footer/>
      </div>

    </div>
  )
}

export default App;
