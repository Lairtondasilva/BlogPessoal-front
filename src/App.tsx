
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/static/Footer/Footer';
import Navbar from './components/static/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';



function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> 
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
