import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CelebrationIcon from "@mui/icons-material/Celebration";
import MessageIcon from "@mui/icons-material/Message";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Me from "../../photos/me.jpg";
import { useSelector } from "react-redux";
import Leftbar from "./Leftbar";
import { Visibility } from "@mui/icons-material";

export default function Rightbar() {
  const [value, setvalue] = useState(0);
  const handleChange = (event, newvalue) => {
    setvalue(newvalue);
  };
  const name = useSelector((state) => state.user.name);
  return (
    <Stack
      flex={2}
      direction="column"
      spacing={1}
      sx={{ display: { xs: "none", sm: "flex" }, padding: "10px" }}
      style={{ margin: 0 }}
    >
      <Chip
        label="You had 20k visitors this week"
        variant="outlined"
        icon={<CelebrationIcon color="primary" />}
        sx={{ backgroundColor: "rgba(251,78,78,0.5)", width: "100%" }}
      />
      <Paper sx={{ padding: "8px" }}>
        <Stack direction="column" justifyContent="center" spacing={3}>
          <Typography
            variant="h5"
            color="gray"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "rgba(251,78,78,0.8)",
              textAlign: "center",
            }}
          >
            My Profile
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Avatar
              src={Me}
              variant="square"
              sx={{ height: "80px", width: "80px" }}
            ></Avatar>
            <Stack direction="column" spacing={2}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "500", color: "rgba(251,78,78,0.8)" }}
              >
                {name}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <MessageIcon
                  sx={{ fontSize: "20px", color: "gray" }}
                ></MessageIcon>
                <Typography sx={{ fontSize: "20px", color: "gray" }}>
                  Messages
                </Typography>
                <Chip
                  label="2"
                  variant="outlined"
                  size="small"
                  sx={{ fontSize: "11px" }}
                />
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <CircleNotificationsIcon
                  sx={{ fontSize: "20px", color: "gray" }}
                ></CircleNotificationsIcon>
                <Typography sx={{ fontSize: "20px", color: "gray" }}>
                  Notifications
                </Typography>
                <Chip
                  label="4"
                  variant="outlined"
                  size="small"
                  sx={{ fontSize: "11px" }}
                />
              </Stack>
            </Stack>
          </Stack>
          {/* <Stack
            direction="row"
            justifyContent="center
          "
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "rgba(251,78,78,0.8)", borderRadius: 0 }}
            >
              Likes
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "rgba(251,78,78,0.8)", borderRadius: 0 }}
            >
              Views
            </Button>
          </Stack> */}
          <Tabs centered value={value} onChange={handleChange}>
            <Tab label="Likes" />
            <Tab label="Views" />
          </Tabs>

          <div
            role="tabpanel"
            style={{ display: value !== 0 ? "none" : "block" }}
          >
            <Stack direction="column" spacing={2}>
              <Stack direction="row" justifyContent="center" spacing={1}>
                <FavoriteIcon sx={{ color: "red" }}></FavoriteIcon>
                <Typography>677</Typography>
              </Stack>
              <Typography sx={{ fontSize: "20px" }} textAlign="center">
                35 new likes this weak
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <AvatarGroup max={5} total={34}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </Box>
            </Stack>
          </div>

          <div style={{ display: value !== 1 ? "none" : "block" }}>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" justifyContent="center" spacing={1}>
                <Visibility sx={{ color: "blue" }}></Visibility>
                <Typography>50K</Typography>
              </Stack>
              <Typography sx={{ fontSize: "20px" }} textAlign="center">
                20K new views this weak
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <AvatarGroup max={5} total={34}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </Box>
            </Stack>
          </div>
        </Stack>
        <Leftbar></Leftbar>
      </Paper>
    </Stack>
  );
}
