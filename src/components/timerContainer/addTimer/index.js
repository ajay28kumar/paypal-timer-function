import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  timerContainer: {
    display: "flex",
    justifyContent: "center",
    margin: 16,
    width: "100%",
  },
  addTimeInputContainer: {
    maxWidth: 360,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  inputBox: {
    marginBottom: 8,
    marginTop: 24,
  },
});
export const isValidStartTime = (value) =>
  typeof value === "number" && value > 0 && Math.floor(value) === value;

//source: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
export const createUUID = () => {
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

const AddTimer = (props) => {
  const classes = useStyles();
  const { timerDetails, setTimerDetails } = props;
  const [startTime, setStartTime] = useState("");
  const shouldButtonDisable = timerDetails.length >= 10;
  return (
    <div className={classes.timerContainer}>
      <div className={classes.addTimeInputContainer}>
        <TextField
          className={classes.inputBox}
          value={startTime}
          onChange={(e) => {
            const value = event.target.value;
            const numericValue = parseInt(value, 10);
            if (!(numericValue === "NaN")) {
              if (isValidStartTime(numericValue)) {
                setStartTime(value);
              }
            }
          }}
          label="Enter Time in Seconds"
          placeholder="Enter Countdown Timer"
          fullWidth
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={() =>
            setTimerDetails([...timerDetails, { id: createUUID(), startTime }])
          }
          disabled={shouldButtonDisable}
        >
          Add Timer
        </Button>
      </div>
    </div>
  );
};

export default AddTimer;
