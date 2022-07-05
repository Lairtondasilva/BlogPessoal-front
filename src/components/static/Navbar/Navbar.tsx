import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <AppBar position="static"  color='primary'>
      <Toolbar variant='dense' className='toolbar' >
          <Box className='logo'>
            <Typography variant="h5" color='textPrimary' >
              <Typography variant='h5' component='span' color='textSecondary'>LS</Typography>-DEV
            </Typography>
          </Box>
        <Box className='nav' >
          <Box className='navItem'>
            <Typography variant="h5" >
              Home
            </Typography>
          </Box>
          <Box className='navItem'>
            <Typography variant="h5" >
              Postagens
            </Typography>
          </Box>
          <Box className='navItem'>
            <Typography variant="h5" >
              Temas
            </Typography>
          </Box>
          <Box className='navItem'>
            <Typography variant="h5" >
              CadastrarTema
            </Typography>
          </Box>
          <Box>
            <Link to='/login' className='text-decoration-none'>
              <Typography variant="h5" color='secondary' className='navItem'>
                Logout
              </Typography>
            </Link>
          </Box>
        </Box> 
      </Toolbar>
    </AppBar>
  )
}

export default Navbar