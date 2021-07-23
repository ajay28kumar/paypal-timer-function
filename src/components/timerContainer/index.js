import {useCallback, useState} from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Timer from "./timer";
import AddTimer from './addTimer'


const useStyles = makeStyles({
    container: {
        flexGrow: 1,
        width: '100%'
    },
    addTimerContainer: {
        margin: '32px auto',
    },

});

const TimerContainer = props => {
    const {timerDetails, setTimerDetails} = useTimerDetails([]);
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <AddTimer timerDetails={timerDetails} setTimerDetails={setTimerDetails}/>
            {timerDetails.length >0 && (<Grid item xs={12}>
                <Grid container justifyContent="space-evenly" spacing={4} alignItems="center">
                    {timerDetails.map((itm,index) => {
                        return (
                            <Grid item key={itm.id}>
                                <Timer serialNumber={index+1}
                                    startCounter={itm.startTime}
                                       deleteTimer={() => {
                                         const newTimerDetails = timerDetails.filter(val => val.id !==itm.id);
                                         setTimerDetails([...newTimerDetails])
                                       }}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>)}
        </Grid>
    )
};

export const useTimerDetails = initialValue => {
    const [timerDetails, setTimer] = useState(initialValue);
    const setTimerDetails = useCallback(x=>setTimer(x),[]);
    return {timerDetails, setTimerDetails}
}

export default TimerContainer;