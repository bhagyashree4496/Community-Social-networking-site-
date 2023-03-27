import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Box,
  Paper,
} from "@mui/material";
import { update } from "../Redux/Slice";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Login({ open, setopen }) {
  const [name, setname] = useState("LogIn");
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    setopen(false);
    e.preventDefault();
    dispatch(update({ name }));
  };

  return (
    <Dialog open={open} fullScreen>
      <Paper
        sx={{
          width: "300px",
          height: "300px",
          margin: "auto ",
          backgroundColor: "#fc7171",
        }}
      >
        <form>
          <DialogTitle color="white">LogIn</DialogTitle>
          <DialogContent>
            <DialogContentText color="white">
              Welcome To Community!!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              autoComplete="on"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handlesubmit}>Submit</Button>
          </DialogActions>
        </form>
      </Paper>
    </Dialog>
  );
}
