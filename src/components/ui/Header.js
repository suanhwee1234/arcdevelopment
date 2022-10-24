import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles'

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,

    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
       marginBottom:"3em" 
    },
    logo: {
        height:"7em"
    }
}))
export default function Header(props) {
    const classes = useStyles()
    
    return (
        <>
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                        <img alt="company logo" className={classes.logo } src={logo} />
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </>      
        
    )
}