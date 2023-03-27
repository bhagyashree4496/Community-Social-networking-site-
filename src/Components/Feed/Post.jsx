import {
  Avatar,
  Badge,
  Box,
  CardMedia,
  Checkbox,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Norma from "../../photos/Ria.avif";
import Norma1 from "../../photos/ria1.avif";
import Me from "../../photos/me.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import { useSelector } from "react-redux";
export default function Post() {
  const name = useSelector((state) => state.user.name);
  return (
    <Paper sx={{ padding: "10px" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Stack direction="row" spacing={1}>
            <Avatar src={Norma}></Avatar>

            <Stack justifyContent="center">
              <Typography
                sx={{ fontSize: "20px", color: "#ea7186", fontWeight: "500" }}
              >
                {" "}
                {name}
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "#d6d6cd", fontWeight: "500" }}
              >
                Published jan.3 2021 .4am
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <CardMedia component="img" height={300} image={Norma1} alt="norma" />
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1} direction="row">
            <IconButton type="button">
              <Badge
                badgeContent={1200}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <VisibilityIcon
                  fontSize="small"
                  sx={{ padding: "2px" }}
                ></VisibilityIcon>
              </Badge>
            </IconButton>
            <IconButton type="button">
              <Badge
                badgeContent={60}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Checkbox
                  sx={{ padding: "2px" }}
                  icon={<FavoriteIcon fontSize="small"></FavoriteIcon>}
                  checkedIcon={
                    <FavoriteIcon
                      fontSize="small"
                      sx={{ color: "red" }}
                    ></FavoriteIcon>
                  }
                />
              </Badge>
            </IconButton>
            <IconButton type="button">
              <Badge
                badgeContent={2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Checkbox
                  sx={{ padding: "2px" }}
                  icon={<ThumbDownIcon fontSize="small"></ThumbDownIcon>}
                  checkedIcon={
                    <ThumbDownIcon
                      fontSize="small"
                      sx={{ color: "red" }}
                    ></ThumbDownIcon>
                  }
                />
              </Badge>
            </IconButton>
            <IconButton type="button">
              <Badge
                badgeContent={2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <CommentIcon
                  fontSize="small"
                  sx={{ padding: "2px" }}
                ></CommentIcon>
              </Badge>
            </IconButton>
            <IconButton type="button">
              <ShareIcon fontSize="small"></ShareIcon>
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            tempore a fugit excepturi dolor? Saepe accusantium dolorum quam
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ border: "1px solid rgba(219, 207 ,213, 0.5) " }}>
            <Stack spacing={1} direction="row" padding={1}>
              <Avatar src={Me}></Avatar>
              <InputBase
                flex={1}
                placeholder="Write your comment "
                sx={{
                  backgroundColor: "#f6fafd",
                  borderRadius: "5px",
                  width: "100%",
                }}
              ></InputBase>
            </Stack>
          </Box>
        </Grid>
        {/* <Grid item xs={11}>
          my comment input field
        </Grid> */}
      </Grid>
    </Paper>
  );
}
