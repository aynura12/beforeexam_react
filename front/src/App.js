
import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';
import Add from './page/Add';
import Home from './page/Home';
import About from './page/About';
import Project from './page/Project';
import Services from './page/Services';
import Blog from './page/Blog';
import Contact from './page/Contact';

function App() {

  return (
    <div >
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/add" element={<Add />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
