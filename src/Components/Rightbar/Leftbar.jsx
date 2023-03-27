import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FriendAvatar from "./FriendAvatar";

export default function Leftbar() {
  return (
    <Stack
      sx={{
        display: { xs: "none", sm: "flex" },
        position: "sticky",
        top: "65px",
        left: 0,
        width: "100%",
        padding: "10px",
        height: "100vh",
      }}
      style={{ margin: 0 }}
    >
      <Paper style={{ padding: "15px", overflow: "scroll" }}>
        <Stack flex={1} direction="column" spacing={1}>
          <Stack
            direction="row"
            sx={{
              borderRadius: "4px",
              backgroundColor: "#f6fafd",
              padding: "2px",
            }}
          >
            <InputBase
              sx={{
                flex: 1,
                borderRadius: "4px",
              }}
              placeholder="Search people or groups"
            ></InputBase>
            <IconButton type="button" sx={{ flex: 0 }}>
              <SearchIcon></SearchIcon>
            </IconButton>
          </Stack>

          <Typography
            sx={{ fontSize: "13px", fontWeight: "500", color: "#d1d4dc" }}
          >
            FALLOWING
          </Typography>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
          <FriendAvatar></FriendAvatar>
        </Stack>
      </Paper>
    </Stack>
  );
}
