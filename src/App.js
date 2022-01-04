import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import NotFound from './Page/NotFound/NotFound';
import './App.css';
import Navigation from './Page/Navigation/Navigation';
import Login from './Page/Login/Login/Login';
import Register from './Page/Login/Register/Register';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navigation/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/home" element={<Home/>} />
       <Route path="*" element={<NotFound/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/Register" element={<Register/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
