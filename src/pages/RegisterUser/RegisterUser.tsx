import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import User from '../../models/User';
import { cadastrar } from '../../services/service';
import './RegisterUser.css'

function RegisterUser() {
  const navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>('');
  const [user, setUser] = useState<User>({
    id: 0,
    nome:'',
    usuario:'',
    senha:''
  });
  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome:'',
    usuario:'',
    senha:''
  });

  useEffect(()=>{
     if(userResult.id !== 0) {
      navigate('/login')
     }

  },[navigate, userResult])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setUser({
      ...user,
      [e.target.name] : e.target.value,
  }
    )
  }
  const handlePasswordConfirmChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setConfirmarSenha(
      e.target.value
    )
  }
  const verificaSenhas = ()=>{
    if(user.senha !== confirmarSenha){
      throw new Error('Senhas incompativeis')
    }
  }

  const cadastro = async (e:ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      verificaSenhas()
      await cadastrar('/usuarios/cadastrar', user, setUserResult);
    }
    catch(error : any ){
      alert(error.message)
    }
  }

  return (
    <Grid container>
      <Grid item xs={12}>
      <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='24px' marginTop='3rem'>
          <Paper component='div'>
            <Typography variant='h1' style={{ border: 'none', marginBottom: '24px' }}>
              Cadastre-se
            </Typography>
            <form style={{width:'500px', margin:'0 auto'}} onSubmit={(e: ChangeEvent<HTMLFormElement>)=>{cadastro(e)}}>
              <Box display='flex' flexDirection='column' gap='24px' alignItems='center'>
                <TextField value={user.nome} id='nome' name='nome' label="nome" variant='outlined' color='primary' fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>handleInputChange(e)}/>
                <TextField value={user.usuario} id='usuario' name='usuario' label="usuario" variant='outlined' color='primary' fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>handleInputChange(e)}/>
                <TextField value={user.senha} id='senha' name='senha' label="Senha" variant='outlined' color='primary' fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>handleInputChange(e)} />
                <TextField value={confirmarSenha} id='confirmarSenha' name='confirmarSenha' label="Confirmar Senha" variant='outlined' color='primary' fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>handlePasswordConfirmChange(e)}/>
                {/* <Link to='/home' className='text-decorator-none'>
                </Link> */}
                  <Button color='primary' variant='contained' type='submit' style={{ width: '300px', marginTop:'24px' }}>
                    Cadastrar
                  </Button>
              </Box>
            </form>
            <Box display='flex' marginTop='48px' gap='12px' justifyContent='center'>
              <Box>
                <Typography>
                  Já tem uma conta?
                </Typography>
              </Box>
              <Box>
                  <Link to='/register' className='text-decorator-none'>
                    <Typography color='secondary'>
                      faça Login
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

export default RegisterUser