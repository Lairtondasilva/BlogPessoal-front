import { Grid, Typography } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './Footer.css'

function Footer() {
  let navbar;
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const navigation = useNavigate();
  useEffect(()=>{
    if(token == ''){
      navigation('/login')
    }
  },[token])
  if(token!==''){
    return (

      <Grid container>
        <Grid item container xs={12} className='container'>
          <Grid item xs={10} className='footer'>
            <Box className='content'>
              <Box>
              <Typography color='secondary'>
                  Privace Police
                </Typography>
              </Box>
              <Box className="icons">
                <Facebook color="secondary"/>
                <Twitter color="secondary"/>
                <LinkedIn color="secondary"/>
                <Instagram color="secondary"/>
              </Box>
              <Box color='secondary'>
                <Typography color='secondary'>
                  Generation
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
  )
  }else{
    return (<></>)
  }
}

export default Footer;