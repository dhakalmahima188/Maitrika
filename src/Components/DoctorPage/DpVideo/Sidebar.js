import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { io } from "socket.io-client";
import { useTranslation } from "react-i18next";
import { SocketContext } from "../../../Context";
import { sendDocID } from "../../../server";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  container: {
    width: "600px",
    margin: "35px 0",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: "10px 20px",
    border: "2px solid black",
  },
}));
let tempSocket = io("http://localhost:5000");
const Sidebar = ({ children }) => {
  const { t } = useTranslation();
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");
  const classes = useStyles();

  useEffect(() => {
    tempSocket.on("ready", (data) => {
      console.log(data);
      setIdToCall(data.pat);
    });
  }, []);
  const sendData = () => {
    tempSocket.emit("doc", me);
  };

  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
             
              <TextField
               
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <div onClick={sendData}>
                <CopyToClipboard text={me} className={classes.margin}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<Assignment fontSize="large" />}
                  >
                    {t("Ready")}
                  </Button>
                </CopyToClipboard>
              </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
             
              <TextField
                
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneDisabled fontSize="large" />}
                  fullWidth
                  onClick={leaveCall}
                  className={classes.margin}
                >
                  {t("Hang Up")}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Phone fontSize="large" />}
                  fullWidth
                  onClick={() => callUser(idToCall)}
                  className={classes.margin}
                >
                  {t("Call")}
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Sidebar;
