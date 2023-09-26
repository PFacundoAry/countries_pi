import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Create from './components/Create/Create';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <>
      <div>
        <h1>Proyecto Henry</h1>
        <BrowserRouter>
            <Route path={"*"} component={NavBar}/>
          <Routes>
            <Route path={"/"} component={Landing}/>
            <Route path='/home' Component={Home}/>
            <Route path='/create' Component={Create}/>
            <Route path='/detail:id' Component={Detail}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
