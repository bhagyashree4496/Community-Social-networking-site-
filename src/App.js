import React from "react";
import Navbar from "./Components/Navbar";
import Leftbar from "./Components/Leftbar/Leftbar";
import Rightbar from "./Components/Rightbar/Rightbar";
import Feed from "./Components/Feed/Feed";
import { useState } from "react";
import Login from "./Components/Login";
import { CssBaseline, Stack } from "@mui/material";

export default function App() {
  const [open, setopen] = useState(true);
  // function OpenDialog() {
  //   setopen(true);
  // }
  return (
    <>
      <CssBaseline></CssBaseline>
      <Login open={open} setopen={setopen}></Login>
      <Stack direction="column" height="100%">
        <Navbar></Navbar>

        <Stack
          direction="row"
          height="100%"
          flex={1}
          spacing={2}
          justifyContent="center"
          sx={{ backgroundColor: "#f4f2f3", margin: "0px" }}
        >
          <Leftbar></Leftbar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
      </Stack>
    </>
  );
}
