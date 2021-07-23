import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, Typography } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const useStyles = makeStyles({
  root: {
    height: 200,
    width: 300,
    margin: 16,
    borderRadius: 16,
  },
  serialCount: {
    fontSize: 16,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  deleteContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 16,
  },
});

const Timer = (props) => {
  const classes = useStyles();
  const [startCounter, setStartCounter] = useState(props.startCounter);
  const [timerState, setTimerState] = useState("play"); //play | stopped | paused | resumed
  useEffect(() => {
    // exit early when we reach 0
    if (!startCounter) {
      return setTimerState("stopped");
    }
    if (timerState === "paused") {
      return;
    }

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setStartCounter(startCounter - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [startCounter, timerState]);

  const playPause = (timerStatus) => {
    setTimerState(timerStatus);
  };

  const restart = () => {
    setTimerState("play");
    setStartCounter(props.startCounter);
  };
  const stop = () => {
    setStartCounter(0); //stopping the timer
    setTimerState("stopped");
  };

  const shouldButtonDisable = startCounter === 0;
  return (
    <Card raised className={classes.root}>
      <div className={classes.deleteContainer}>
        <Typography className={classes.serialCount} color="primary">
          {props.serialNumber}
        </Typography>
        <DeleteOutlinedIcon
          color="error"
          className="cursor-pointer"
          onClick={props.deleteTimer}
        />
      </div>
      <div className={classes.container}>
        <Typography style={{ fontSize: 64 }}>
          {startCounter} <span style={{ fontSize: 24 }}>S</span>
        </Typography>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="secondary"
          onClick={stop}
          disabled={shouldButtonDisable}
          id="stop-button"
        >
          Stop
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={restart}
          disabled={shouldButtonDisable}
          id="restart-button"
        >
          Restart
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => playPause(timerState === "play" ? "paused" : "play")}
          disabled={shouldButtonDisable}
          id="start-button"
        >
          {timerState !== "play" ? "Resume" : "Pause"}
        </Button>
      </div>
    </Card>
  );
};

export default Timer;
