import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { Box } from '@mui/material';
import { buscaId, deleteId } from '../../../services/service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {
  const navigation = useNavigate();
  const {id} = useParams<{id:string}>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [postagem, setPostagem] = useState<Postagem>();

  useEffect(()=>{
      if(token===''){
          navigation('/login')
      }
  },[token])

  useEffect(()=>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  const findById = async (id:string)=>{
      buscaId(`/postagens/${id}`,setPostagem,{headers:{
          'Authorization': token
      }})
  }

  const deleteYes = ()=>{
    deleteId(`/postagens/${id}`,{headers:{
      'Authorization' : token
    }})
    toast.success('postagem deletada com sucesso',{
      theme: "dark",
      hideProgressBar: true,
      position: "bottom-left",
      closeOnClick: false,
      autoClose: 2000,
    })
    navigation('/posts')
  }
  const deleteNO = ()=>{
    navigation('/posts')
  }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              Tema
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button  variant="contained" className="marginLeft" size='large' color="primary" onClick={deleteYes}>
                Sim
              </Button>
              </Box>
              <Box>
              <Button   variant="contained" size='large' color="secondary" onClick={deleteNO}>
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;