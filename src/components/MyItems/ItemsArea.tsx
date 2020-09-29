import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { Tabs, Tab, Avatar } from '@material-ui/core';
import { createStyles, Theme, makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import AvatarImg from '../../assets/imgs/avatar.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tableContainer: {
            width: '100%',
            margin: theme.spacing(4, 0),
        },
        table: {
            '& th': {
                '&:first-of-type': {
                    padding: theme.spacing(1, 1, 1, 7),
                },                
                backgroundColor: theme.palette.common.white,
            },
            '& td:first-of-type': {
                paddingLeft: theme.spacing(7),
            },
        },
        avatar: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        tableText: {
            color: theme.palette.greyElement.main,
            fontSize: 12,
        },
        rowIcon: {
            fontSize: 'medium',
            color: theme.palette.greyElement.main,
        },
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
        //backgroundColor: 'white',
        //maxWidth: '10px',
        //textAlign: 'center',
    }
})(Tabs);

export default () => {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box px={1}>
                <MenuTabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                >
                    <Tab label="Cascade" />
                    <Tab label="Bookmarks" />
                    <Tab label="History" />
                </MenuTabs>
            </Box>

            <TableContainer className={classes.tableContainer}>
                <Table stickyHeader size="small" aria-label="sticky table" className={classes.table}>
                    <TableHead>
                        <TableRow >
                            <TableCell align="left" style={{ minWidth: 250 }}>
                                Items
                            </TableCell>
                            <TableCell align="center" style={{ minWidth: 150 }}>
                                ETA
                            </TableCell>
                            <TableCell align="center">
                                Project Followers
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">
                                <Box display="flex" alignItems="center">
                                    <Box>
                                        <Avatar className={classes.avatar} src={AvatarImg} alt="Avatar" />
                                    </Box>
                                    <Box mx={1} className={classes.tableText}>
                                        Performance Reviews
                                    </Box>
                                    <VisibilityOffOutlinedIcon className={classes.rowIcon} />
                                </Box>
                            </TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center" className={classes.tableText}>
                                Private
                            </TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">
                                <Box display="flex" alignItems="center">
                                    <Box>
                                        <Avatar className={classes.avatar} src={AvatarImg} alt="Avatar" />
                                    </Box>
                                    <Box mx={1} mr={9} className={classes.tableText}>
                                        Two-Factor Authentication
                                    </Box>
                                    <CheckCircleOutlineOutlinedIcon className={classes.rowIcon}/>
                                </Box>
                            </TableCell>
                            <TableCell align="center" className={classes.tableText}>This Quarter</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">
                                <Box display="flex" alignItems="center">
                                    <Box>
                                        <Avatar className={classes.avatar} src={AvatarImg} alt="Avatar" />
                                    </Box>
                                    <Box mx={1} mr={12} className={classes.tableText}>
                                        Language Localization
                                    </Box>
                                    <CheckCircleOutlineOutlinedIcon className={classes.rowIcon}/>
                                </Box>
                            </TableCell>
                            <TableCell align="center" className={classes.tableText}>This Half</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}