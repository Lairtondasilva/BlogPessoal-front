import { Button, Grid, Typography } from "@material-ui/core"
import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import TabPost from "../../components/postagens/TabPost/TabPost"
import './Home.css'


function Home() {
  const navigation = useNavigate();
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
              <Button variant="outlined" className="btn" onClick={()=>{navigation('/formularioPostagem')}}>
                Nova Postagem
              </Button>
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