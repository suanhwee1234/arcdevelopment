import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange:`${arcOrange}`
        },
        primary: {
            main:`${arcBlue}`
        },
        secondary: {
            main:`${arcOrange}`
        }
    },
    typography: {
        h3: {
            fontWeight:300
        }
    }
})
