import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home/Home";
import NotFound from "./Page/NotFound/NotFound";
import Navigation from "./Page/Navigation/Navigation";
import Login from "./Page/Login/Login/Login";
import Register from "./Page/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Page/Login/PrivateRoute/PrivateRoute";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
