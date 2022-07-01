import { Grid, Typography } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import { Box } from "@mui/material";
import './Footer.css'

function Footer() {
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
}

export default Footer;