import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Paper, Avatar, Button } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ItemsArea from './ItemsArea';
import AvatarImg from '../../assets/imgs/avatar.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            minWidth: 1200,//theme.spacing(50),
            //padding: theme.spacing(5, 3),
        },
        avatar: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        addBtnItem: {
            textAlign: 'right',
            '& > button': {
                borderRadius: 15,
                textTransform: 'none',
            }
        },
        personDescription: {
            '& b': {
                fontSize: 17,
            },
            '& p': {
                margin: theme.spacing(0),
                //marginTop: theme.spacing(2),
                fontSize: 12,
            }
        }
    })
);

export default () => {
    const classes = useStyles();

    return (
        <Box mt={5}>
            <Grid container direction="row" justify="center">
                <Grid item >
                    <Paper className={classes.paper} elevation={3}>
                        <Box pt={5} px={3} mb={1}>
                            <Grid container justify="space-between">
                                <Grid item container sm={6} spacing={1}>
                                    <Grid item>
                                        <Avatar className={classes.avatar} src={AvatarImg} alt="Avatar"></Avatar>
                                    </Grid>
                                    <Grid item className={classes.personDescription}>
                                        <b>Kai Knees</b>
                                        <Box color="text.secondary">
                                            <p>Project manager | Employee since: 2020</p>
                                            <p><i>Kai is a cooliemaster and doglover. Slack her any time!</i></p>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid item sm={6} className={classes.addBtnItem}>
                                    <Button variant="contained" size="small" color="primary">Add +</Button>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container>
                            <Grid item sm={12}>
                                <ItemsArea />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}