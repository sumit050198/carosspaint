import './App.css';
// import Home from './component/Home';
// import Navbar from './component/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Main from './Main';
import InstallationProcess from './component/InstallationProcess';
import ThePPFInstallationProcess from './component/ThePPFInstallationProcess';
import Testimonials from './component/Testimonials';
import CardFeeds from './component/CardFeeds';

// function MainComponent() {
//   return (
//     <div className="App">
//       <Navbar/>
//     </div>

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path="/" element={ <InstallationProcess/> } />
        <Route path="/" element={ <ThePPFInstallationProcess/> } />
        <Route path="/" element={ <Testimonials/> } />
        <Route path="/" element={ <CardFeeds/> } />
        
         {/* <Route path="/" element={ <Navbar/> } /> */}

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
