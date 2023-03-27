import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import VideocamIcon from "@mui/icons-material/Videocam";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import Me from "../../photos/me.jpg";
import Post from "./Post";
import { useSelector } from "react-redux";

export default function Feed() {
  const name = useSelector((state) => state.user.name);
  return (
    <>
      <CssBaseline></CssBaseline>
      <Stack
        direction="column"
        spacing={2}
        flex={4}
        sx={{ py: "10px", marginLeft: 0 }}
        style={{ margin: 0 }}
      >
        <Paper sx={{ padding: "10px" }}>
          <Stack direction="row" spacing={3}>
            <Avatar src={Me} flex={0}></Avatar>
            <Box
              sx={{
                border: "1px solid rgba(219, 207 ,213, 0.5) ",
                borderRadius: "1px",
                padding: "5px",
                flex: 1,
              }}
            >
              <InputBase
                id="standard-multiline-flexible"
                placeholder={`Hi ${name}, What's on your mind?`}
                multiline
                rows={2}
                variant="standard"
                sx={{
                  width: "100%",
                }}
              />
              <Stack spacing={1} direction="row" justifyContent="flex-end">
                <IconButton type="button" aria-label="audioh">
                  <AudiotrackIcon style={{ color: "#ea7186" }} />
                </IconButton>
                <IconButton type="button" aria-label="video">
                  <VideocamIcon style={{ color: "#ea7186" }} />
                </IconButton>
                <IconButton type="button" aria-label="photo">
                  <AddAPhotoIcon style={{ color: "#ea7186" }} />
                </IconButton>
                <IconButton type="button" aria-label="camera">
                  <PhotoSizeSelectActualIcon style={{ color: "#ea7186" }} />
                </IconButton>
                <Button
                  variant="contained"
                  size="small"
                  endIcon={<SendIcon />}
                  style={{ backgroundColor: "#ea7186" }}
                  component="label"
                >
                  Post
                  <input
                    style={{ display: "none" }}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Paper>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </Stack>
    </>
  );
}
