import { createTheme } from "@material-ui/core";

const Theme = createTheme({
  palette: {
    primary: {
      main: '#24d166',
    },
    secondary: {
      main: '#d9d9d9',
    },
    text: {
      primary: '#d9d9d9',
      secondary: '#24d166',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  overrides: {
    MuiButton: {
        root: {
          textTransform: 'none',
          borderRadius: '5px',
          fontWeight: 'normal',

        },
      },
    MuiPaper: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none !important',
          backdropFilter: 'blur( 13.5px )',
          WebkitBackdropFilter: 'blur (13.5px)',
          border: 'none',
          outline:'none'
        },
      },
    MuiTableHead: {
        root: {
          '& .MuiTableCell-root': {
            fontWeight: 'bold',
          },
        },
      },
    MuiTableCell: {
        root: {
          border: '1px solid #D8D8D8',
        },
      },
     MuiOutlinedInput:{
      root:{
        '& fieldSet':{
          borderColor:'#d8d8d8',
        }
      }
     }
  },
}
)

export default Theme;