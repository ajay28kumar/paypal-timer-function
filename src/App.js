import { makeStyles } from "@material-ui/core/styles";
import TimerContainer from "./components/timerContainer";
import "./styles.css";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    width: 960,
    ["@media (max-width:900px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "100%",
    },
    margin: "0 32px",
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TimerContainer />
    </div>
  );
}
