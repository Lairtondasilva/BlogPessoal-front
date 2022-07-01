import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='24px' marginTop='5rem'>
          <Paper component='div' className='form-background'>
            <Typography variant='h1' style={{ border: 'none', marginBottom: '24px' }}>
              Entrar
            </Typography>
            <form action="">
              <Box display='flex' flexDirection='column' gap='24px' alignItems='center'>
                <TextField id='usuario' name='usuario' label="usuario" variant='outlined' color='primary' fullWidth />
                <TextField id='senha' name='senha' label="Senha" variant='outlined' color='primary' fullWidth />
                <Link to='/home' className='text-decorator-none'>
                  <Button color='primary' variant='contained' type='submit' style={{ width: '300px' }}>
                    Logar
                  </Button>
                </Link>
              </Box>
            </form>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login