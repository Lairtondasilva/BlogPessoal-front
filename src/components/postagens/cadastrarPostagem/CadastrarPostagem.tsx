import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastrarPostagem.css';
import { useNavigate, useParams } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroPostagem() {
    //faz a navegação
    const navigation = useNavigate();
    //para pegar o id da rota
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])//armazena um lista de tema
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );//manipula o token

    useEffect(() => {
        if (token == "") {
            toast.info('Usuário precisa está logado',{
                theme: "dark",
                hideProgressBar: true,
                position: "bottom-left",
                closeOnClick: false,
                autoClose: 2000,
            })
            navigation("/login")

        }
    }, [token])//verifica se houve mudança no token de autenticação

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })//cria um estado para o tema para conseguimos setar em postagem

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })//cria um estado para postagem para podemos criar no banco de dados

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])//inseri o tema na nossa requisição de postagem

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens/${id}`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso',{
                theme: "dark",
                hideProgressBar: true,
                position: "bottom-left",
                closeOnClick: false,
                autoClose: 2000,
            });
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso',{
                theme: "dark",
                hideProgressBar: true,
                position: "bottom-left",
                closeOnClick: false,
                autoClose: 2000,
            });
        }
        back()
    }

    function back() {
        navigation('/posts')
    }

 
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h2" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={postagem.titulo} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedPostagem(e)}/>
                <TextField value={postagem.texto} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedPostagem(e)}/>

                <FormControl fullWidth variant='filled'>
                    <InputLabel id="demo-simple-select-helper-label">tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e)=>buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                "Authorization": token
                            }
                        })}
                        > 
                        {temas.map(tema=>
                            <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            )}
                    </Select>
                    <FormHelperText variant='standard'>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPostagem;