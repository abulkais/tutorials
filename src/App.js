import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route, Redirect, Navigate
// } from "react-router-dom";
import LowerHeader from './Components/Header/LowerHeader';
import UpperHeader from './Components/Header/UpperHeader';
import Index from './Components/Index';
function App() {
  return (
    <>


      <UpperHeader />
      {/* <LowerHeader /> */}
      <Index />
    </>

  );
}

export default App;
