import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'

function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  const navigation = useNavigate();
  useEffect(()=>{
    if(token == ''){
      navigation('/login')
    }
  },[token])

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
              <Typography variant="h5" color='secondary' className='navItem' onClick={()=>{setToken('')}}>
                Logout
              </Typography>
          </Box>
        </Box> 
      </Toolbar>
    </AppBar>
  )
}

export default Navbar