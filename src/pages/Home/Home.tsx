import { Button, Grid, Typography } from "@material-ui/core"
import { Box } from "@mui/material"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem"
import TabPost from "../../components/postagens/TabPost/TabPost"
import { TokenState } from "../../store/tokens/tokensReducer"
import './Home.css'


function Home() {
  const navigation = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  useEffect(() => {
    if (token == "") {
        toast.info("Você precisa estar logado",{
          theme: "dark",
          hideProgressBar: true,
          position: "bottom-left",
          closeOnClick: false,
          autoClose: 2000,
        })
        navigation("/login")

    }
}, [navigation, token])
  return (
    <>
      <Grid container className="home">
          <Grid item xs={12}>
            <Box className='container' marginBottom={'5rem'}>
              <Box className="title">
                <Typography variant="h1" >
                  Seja bem vindo(a) ao seu blog <Typography component='span' variant='h2' color="primary">Pessoal.</Typography>
                </Typography>
              </Box>
              <Box className='subtitle'>
              <Typography variant="h4" color="secondary">
                 Expresse aqui os seus pensamentos e opiniões!
                </Typography>
              </Box>
              <Box className="btn_C">
              <ModalPostagem/>
              <Button variant="outlined" className="btn">
                Ver Postagens
              </Button>
              </Box>
            </Box>
          </Grid>
          <TabPost />
      </Grid>
    </>
  )
}

export default Home