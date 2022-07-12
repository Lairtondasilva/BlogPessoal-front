import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import './CadastroTema.css'
import { useNavigate, useParams } from 'react-router-dom'
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroTema() {
    const navigation = useNavigate();
    const {id} = useParams<{id:string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    const [tema, setTema] = useState<Tema>({
        id:0,
        descricao:''
    });

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
        console.log('herllo')
        buscaId(`/temas/${id}`,setTema,{headers:{
            'authorization': token
        }})
    }

    const updateTema = (e: ChangeEvent<HTMLInputElement>)=>{
        setTema({
            ...tema,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = (e: ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(id !== undefined){
            put(`/temas/${id}`,tema,setTema,{headers:{
                'Authorization': token
            }})
            toast.success('tema atualizado com sucesso')
            navigation('/themes')
        }else{
            post('/temas',tema, setTema, {headers:{
                'Authorization' : token
            }})
            toast.success("cadastrado com sucesso!!",{
                theme: "dark",
                hideProgressBar: true,
                position: "bottom-left",
                closeOnClick: false,
                autoClose: 2000,
            })
            navigation('/themes')
        }
    }
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={(e:ChangeEvent<HTMLFormElement>)=>{onSubmit(e)}}>
                <Typography variant="h3" color="textSecondary" component="h2" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth style={{marginBottom:'24px'}} onChange={(e:ChangeEvent<HTMLInputElement>)=>{updateTema(e)}} />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;