import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CadastroPostagem from './components/postagens/cadastrarPostagem/CadastrarPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import Footer from './components/static/Footer/Footer';
import Navbar from './components/static/Navbar/Navbar';
import ListaTema from './components/Temas/listaTema/ListaTema';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RegisterUser from './pages/RegisterUser/RegisterUser';
import store from './store/store';
import 'react-toastify/dist/ReactToastify.css'
import CadastroTema from './components/Temas/cadastroTema/CadastroTema';
import Theme from './Theme/Theme';
import { ThemeProvider } from '@material-ui/core';
import DeletarTema from './components/Temas/deletarTema/DeletarTema';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
       <ThemeProvider  theme={Theme}>
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
            <Route path='/formularioPostagem/:id' element={<CadastroPostagem />} />
            <Route path='/formularioPostagem' element={<CadastroPostagem />} />
            <Route path='/deletarPostagem/:id' element={<DeletarPostagem />} />
            <Route path={"/formularioTema"} element={<CadastroTema />} />
            <Route path={"/formularioTema/:id"} element={<CadastroTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
          </Routes>
        </div>
        <Footer />
      </Router>
  </ThemeProvider>
    </Provider>
  );
}

export default App;
