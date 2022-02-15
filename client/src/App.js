import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Auth from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="/" exact element={<Home/>}/>
     <Route path="/auth" exact element={<Auth/>} />
     <Route path="/myself" exact element={<Profile/>} />
     </Routes>
     </BrowserRouter>
    
  );
}

export default App;
