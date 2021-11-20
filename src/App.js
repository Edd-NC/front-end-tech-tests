import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home.jsx';
import Test1 from './components/test1/Test1.jsx';
import Test5 from './components/test5/Test5.jsx';

function App() {
  return (
    <section className="App">
      <Header />
      <Nav />
       <Routes>
          <Route exact path="/" element={Home()} />
          <Route exact path="/test/1" element={Test1()} />
          <Route exact path="/test/5" element={Test5()} />
       </Routes>
    </section>
  );
}

export default App;
