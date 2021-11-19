import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Test1 from './components/test1/Test1.jsx';

function App() {
  return (
    <section className="App">
      <Header />
      <Nav />
       <Routes>
          <Route exact path="/" element={Home} />
          <Route exact path="/test/:num" element={Test1} />
       </Routes>
    </section>
  );
}

export default App;
