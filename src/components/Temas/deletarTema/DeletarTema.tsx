import React, { useEffect, useState } from 'react'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Tema from '../../../models/Tema';
import { buscaId, deleteId } from '../../../services/service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function DeletarTema() {
  const navigation = useNavigate();
    const {id} = useParams<{id:string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>();

    useEffect(()=>{
        if(token===''){
            navigation('/login')
        }
    },[token])

    useEffect(()=>{
        console.log("id:"+id)
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    const findById = async (id:string)=>{
        buscaId(`/temas/${id}`,setTema,{headers:{
            'authorization': token
        }})
    }

    const deleteYes = ()=>{
      deleteId(`/temas/${id}`,{headers:{
        'Authorization' : token
      }})
      toast.success("tema deletado com sucesso",{
        theme: "dark",
        hideProgressBar: true,
        position: "bottom-left",
        closeOnClick: false,
        autoClose: 2000,
      })
      navigation('/themes')
    }
    const deleteNO = ()=>{
      navigation('/themes')
    }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button variant="contained" className="marginLeft" size='large' color="primary" onClick={()=>deleteYes()}>
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button variant="contained" size='large' color="secondary" onClick={()=>deleteNO()}>
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
export default DeletarTema;