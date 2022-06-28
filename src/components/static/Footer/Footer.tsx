import { Grid } from "@material-ui/core";
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
                <span>Privace Police</span>
              </Box>
              <Box className="icons">
                <Facebook/>
                <Twitter/>
                <LinkedIn/>
                <Instagram/>
              </Box>
              <Box>
                Generation
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Footer;