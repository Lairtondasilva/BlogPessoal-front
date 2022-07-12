import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Navbar.css'

function Navbar() {
  let navbar;
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const dispatch = useDispatch();
  const navigation = useNavigate();
  useEffect(()=>{
    if(token == ''){
      toast.info("usuario deslogado",{
        theme: "dark",
        position: "bottom-left",
        autoClose: 2000,
        closeOnClick: false,
      })
      navigation('/login')
    }
  },[token])
  if(token !== ''){
    return (
      <AppBar position="static"  color='primary'>
        <Toolbar variant='dense' className='toolbar' >
            <Box className='logo'>
              <Typography variant="h5" color='textPrimary' >
                <Typography variant='h5' component='span' color='textSecondary'>LS</Typography>-DEV
              </Typography>
            </Box>
          <Box className='nav' >
            <Link to='/home' className='text-decorator-none'>
              <Box className='navItem'>
                <Typography variant="h5" >
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to='posts' className='text-decorator-none'>
              <Box className='navItem'>
                <Typography variant="h5" >
                  Postagens
                </Typography>
              </Box>
            </Link>
            <Link to='/themes' className='text-decorator-none'>
              <Box className='navItem'>
                <Typography variant="h5" >
                  Temas
                </Typography>
              </Box>
            </Link>
            <Link to='formularioTema' className='text-decorator-none'>
              <Box className='navItem'>
                <Typography variant="h5" >
                  CadastrarTema
                </Typography>
              </Box>
            </Link>
            <Box>
                <Typography variant="h5" color='secondary' className='navItem' onClick={()=>{dispatch(addToken(''))}}>
                  Logout
                </Typography>
            </Box>
          </Box> 
        </Toolbar>
      </AppBar>
    )
  }else{
    return (<>
    </>)
  }
 
}

export default Navbar