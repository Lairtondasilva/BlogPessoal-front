
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import CadastroPostagem from './components/postagens/cadastrarPostagem/CadastrarPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import Footer from './components/static/Footer/Footer';
import Navbar from './components/static/Navbar/Navbar';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTema from './components/temas/listaTema/ListaTema';
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
          <Route path='/themes' element = {<ListaTema />} />
          <Route path= '/posts' element = {<ListaPostagem />} />
          <Route path='/formularioPostagem' element={<CadastroPostagem />} />
          <Route path='/deletarPostagem' element={<DeletarPostagem />} />
          <Route path={"/formularioTema"} element={<CadastroTema />} />
          <Route path={"/formularioTema/:id"} element={<CadastroTema />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
