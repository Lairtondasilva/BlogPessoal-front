
import { Link, useNavigate } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { Box } from '@mui/material';
import Postagem from '../../../models/Postagem';
import useLocalStorage from 'react-use-localstorage';
import { useEffect, useState } from 'react';
import { busca } from '../../../services/service';

function ListaPostagem() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [token, setToken] = useLocalStorage('token');
  const navigation = useNavigate();

  useEffect(()=>{
    if(token == ''){
      navigation('/login')
    }
  }, [token])

  const getPostagens = async ()=>{
    await busca('/postagens', setPostagens, {headers:{
      'authorization': token
    }})
  }

  useEffect(()=>{
    getPostagens()
  }, [postagens])

  return (
    <>
    {postagens.map(postagem=>{
      return (
        <Box m={2} key={postagem.id}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              {postagem.titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {postagem.texto}
            </Typography>
            <Typography variant="body2" component="p">
              {postagem.tema?.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      )
    })}
    </>)
}

export default ListaPostagem;