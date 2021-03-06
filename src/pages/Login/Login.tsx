import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { ChangeEvent, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import UserLogin from '../../models/UserLogin';
import {login} from '../../services/service';
import { addToken } from '../../store/tokens/actions';
import './Login.css'


function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  useEffect(()=>{
      if(token !== ''){
        dispatch(addToken(token))
        navigate('/home')
      }
  }, [token])
  
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id:0,
    login: '',
    senha:'',
    token: ''
  });
  const updateModel = (e:ChangeEvent<HTMLInputElement>)=>{
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    })
  }

  const logar = async (e:ChangeEvent<HTMLFormElement>)=>{
    try{
      e.preventDefault();
      login('/usuarios/logar',userLogin, setToken)
    }
    catch(e:any){

    }
  }
 
  return ( 
    <Grid container>
      <Grid item xs={12}>
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='24px' marginTop='5rem'>
          <Paper component='div'>
            <Typography variant='h1' style={{ border: 'none', marginBottom: '24px' }}>
              Entrar
            </Typography>
            <form style={{width:'500px', margin:'0 auto'}} onSubmit={(e:ChangeEvent<HTMLFormElement>)=>{logar(e)}}>
              <Box display='flex' flexDirection='column' gap='24px' alignItems='center'>
                <TextField value={userLogin.login} id='login' name='login' label="login" variant='outlined' color='primary' fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updateModel(e)}/>
                <TextField value={userLogin.senha} id='senha' name='senha' label="Senha" variant='outlined' color='primary' fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updateModel(e)}/>
                {/* <Link to='/home' className='text-decorator-none'>
                </Link> */}
                  <Button color='primary' variant='contained' type='submit' style={{ width: '300px', marginTop:'24px' }}>
                    Logar
                  </Button>
              </Box>
            </form>
            <Box display='flex' marginTop='48px' gap='24px' justifyContent='center'>
              <Box>
                <Typography>
                  Ainda n??o possui uma conta?
                </Typography>
              </Box>
              <Box>
                  <Link to='/register' className='text-decorator-none'>
                    <Typography color='secondary'>
                      Cadastra-se
                    </Typography> 
                  </Link>
              </Box>

            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login