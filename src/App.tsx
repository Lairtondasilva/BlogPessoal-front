
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PostList from './components/Posts/PostList/PostList';
import Footer from './components/static/Footer/Footer';
import Navbar from './components/static/Navbar/Navbar';
import ListTheme from './components/Themes/ListThemes/ListTheme';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RegisterUser from './pages/RegisterUser/RegisterUser';



function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> 
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/Register" element={<RegisterUser />} />
          <Route path='/themes' element = {<ListTheme />} />
          <Route path= '/posts' element = {<PostList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
