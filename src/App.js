import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking/Booking';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import ProtectedRoute from './Pages/ProtectedRoute/ProtectedRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Navigate replace to="/home"/>}></Route>
        <Route path="/booking/:id" 
        element={
          <ProtectedRoute>
            <Booking/>
          </ProtectedRoute>
        }>

        </Route>
        
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      <Footer></Footer>
      
    </AuthProvider>
    </div>
  );
}

export default App;
