// import About from "./components/About";
// import Contact from "./components/Contact";
// import Experience from "./components/Experience";
// import Home from "./components/Home";
// import NavBar from "./components/NavBar";
// import Portfolio from "./components/Portfolio";

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Home />
//       <About />
//       <Portfolio />
//       <Experience />
//       <Contact />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
const App = () => {
  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    </>
  )
}

export default App