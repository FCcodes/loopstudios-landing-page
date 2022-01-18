import { createTheme } from "@mui/material/styles";
import { fontSize } from "@mui/system";

let theme = createTheme({
    breakpoints: {
        values: {
            phone: 0,
            tablet: 420,
            tabletxl: 520,
            laptop: 900,
            desktop: 1200
        }
    }
})

theme.typography.h1 = {
    fontSize: '1.5rem',
    fontWeight: '300',
    [theme.breakpoints.up('tabletxl')]:{
        fontSize: '2.3rem'
    },
    [theme.breakpoints.up('tabletxl')]:{
        fontSize: '2.5rem'
    },
    [theme.breakpoints.up('laptop')]:{
        fontSize: '3rem'
    }
}

theme.typography.h2 = {
    fontWeight: 300,
    fontSize: '1rem',
    [theme.breakpoints.up('laptop')]: {
        fontSize: '1.8rem',
    }
}

theme.typography.h3 = {
    fontSize: '1rem',
    fontWeight: 300,
    
    [theme.breakpoints.up('tablet')]: {
        fontSize: '1.8rem',
    }
}

theme.typography.body1 = {
    fontSize: '.6rem',
    [theme.breakpoints.up('laptop')]:{
        fontSize: '1rem'
    }
}

export default theme