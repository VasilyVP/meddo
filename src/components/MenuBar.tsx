import React, { useState } from 'react';
//import { Box, Container } from '@material-ui/core';
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
//import IconButton from '@material-ui/core/IconButton';
//import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles, withStyles } from '@material-ui/core/styles';
//import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import MenuLogo from '../assets/imgs/meddo_logo_text.png';
import AvatarImg from '../assets/imgs/avatar.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        toolbar: {
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
            //backgroundColor: '#2f353c',
        },
        sectionLeft: {
            display: "flex"
        },
        sectionRight: {
            display: "flex",
            alignItems: "center",
            '& > *': {
                marginRight: theme.spacing(2),
                //color: theme.color.
            },
        },
        menuLogo: {
            //flexGrow: 1,
            marginRight: theme.spacing(2),
        },
        /*
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        */
        search: {
            position: 'relative',
            borderRadius: 20,//theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            //width: '100%',
            width: '250px',
            display: 'flex',
            /*
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
            */
            //marginRight: theme.spacing(2),
        },
        searchIcon: {
            //padding: theme.spacing(0, 0),
            paddingRight: theme.spacing(1),
            //height: '100%',
            //position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            //paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            paddingLeft: theme.spacing(2),
            //paddingRight: theme.spacing(1),//`calc(1em + ${theme.spacing(4)}px)`,
            //transition: theme.transitions.create('width'),
            //width: '100%',
            //flexGrow: 1,
            /*
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
            */
        },
        greyBtn: {
            color: theme.palette.greyElement.main,
        },
        avatar: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        }
    })
);

const MenuTabs = withStyles({
    root: {
        '& button': {
            minWidth: 110,
            textTransform: 'none',
        },
    },
    indicator: {
        backgroundColor: 'white',
        /*
        display: 'flex',
        justifyContent: 'center',
        '& > span': {
            maxWidth: 40,
            width: '100%',
        }
        */
    }
})(Tabs);

export default () => {
    const classes = useStyles();

    const [value, setValue] = useState(4);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.menuLogo}><img src={MenuLogo} alt="meddo_logo" /></div>
                    <MenuTabs
                        value={value}
                        onChange={handleChange}
                    >
                        <Tab label="Protfolio" />
                        <Tab label="Markets" />
                        <Tab label="Work" />
                        <Tab label="People" />
                        <Tab label="My Items" />
                    </MenuTabs>
                    <div className={classes.grow}></div>
                    <div className={classes.sectionRight} >
                        <div className={classes.search}>
                            <InputBase
                                placeholder="Search"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                        </div>
                        <NotificationsNoneOutlinedIcon className={classes.greyBtn} />
                        <HelpOutlineOutlinedIcon className={classes.greyBtn} />
                        <Avatar className={classes.avatar} src={AvatarImg} alt="Avatar" />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}