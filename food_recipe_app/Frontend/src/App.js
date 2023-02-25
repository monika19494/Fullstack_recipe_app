
// import './App.css';
import Login from './components/login';
import Register from './components/register';
import {BrowserRouter as Router, Switch, Route, Routes, useRoutes} from "react-router-dom";
import Landing_page from './components/landing_page';
// import Login from './components/login';
function App() {
  
    let routes = useRoutes([
    <div className='App'>
      <Routes>
        
          
          <Route exact path="/" element= {<Login />}></Route>
          <Route path="/register" element= {<Register />}></Route>
          <Route path="/landing_page" element= {<Landing_page />}></Route>
        
      </Routes>
      
    
     

    </div>
    ]);
    return routes;
  
};
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
