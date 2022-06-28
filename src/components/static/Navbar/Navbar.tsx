import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'

function Navbar() {
  return (
    <AppBar position="static"  color='primary'>
      <Toolbar variant='dense' className='toolbar' >
          <Box className='logo'>
            <Typography variant="h5" >
              <span className='primary'>LS</span>-DEV
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
          <Box className='navItem'>
            <Typography variant="h5" >
              Logout
            </Typography>
          </Box>
        </Box> 
      </Toolbar>
    </AppBar>
  )
}

export default Navbar