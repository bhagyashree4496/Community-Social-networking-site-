import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Collapse,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Popover,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MessageIcon from "@mui/icons-material/Message";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import Me from "../photos/me.jpg";
import { useSelector } from "react-redux";

const Styledappbar = styled(AppBar)({
  backgroundColor: "rgba(251,78,78,0.8)",
  flex: 0,
  width: "100%",
  position: "sticky",
});

export default function Navbar() {
  // const [open, setopen] = useState(false);
  const [messageanchor, setmessageanchor] = useState();
  const openmessage = Boolean(messageanchor);
  const messagepopup = (e) => {
    setmessageanchor(e.currentTarget);
  };
  const closemessagepopup = () => {
    setmessageanchor(null);
  };
  const [notificationanchor, setnotificationanchor] = useState();
  const opennotification = Boolean(messageanchor);
  const notificationpopup = (e) => {
    setmessageanchor(e.currentTarget);
  };
  const closenotificationpopup = () => {
    setmessageanchor(null);
  };

  const name = useSelector((state) => state.user.name);
  return (
    <Styledappbar bgcolor="#ea7186">
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Stack direction="row" spacing={1}>
          <AllInclusiveIcon
            fontSize="large"
            sx={{ color: "#9ae3b7" }}
          ></AllInclusiveIcon>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            COMMUNITY
          </Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center">
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              backgroundColor: "#f6fafd",
              display: { xs: "none", sm: "flex" },
              borderRadius: "5px",
              padding: "2px",
            }}
          >
            <InputBase
              placeholder="Search.."
              sx={{
                padding: "4px",

                borderRadius: "5px",
              }}
            />
            <IconButton type="button" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Stack>
          <IconButton
            aria-label="message"
            sx={{ display: { xs: "none", sm: "flex" } }}
            onClick={messagepopup}
          >
            <Badge badgeContent={4} color="primary">
              <MessageIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>
          <Collapse in={openmessage}>
            <Popover
              open={openmessage}
              anchorEl={messageanchor}
              onClose={closemessagepopup}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <List sx={{ width: "300px" }}>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography fontWeight={700}>
                        Lorem ipsum dolor
                      </Typography>
                    }
                    secondary="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  ></ListItemText>
                </ListItem>
                <Divider flexItem />
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography fontWeight={700}>
                        Lorem ipsum dolor
                      </Typography>
                    }
                    secondary="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  ></ListItemText>
                </ListItem>
                <Divider flexItem />
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography fontWeight={700}>
                        Lorem ipsum dolor
                      </Typography>
                    }
                    secondary="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  ></ListItemText>
                </ListItem>
              </List>
            </Popover>
          </Collapse>
          <IconButton
            aria-label="notifications"
            sx={{ display: { xs: "none", sm: "flex" } }}
            onClick={notificationpopup}
          >
            <Badge badgeContent={8} color="primary">
              <CircleNotificationsIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>
          {/* <Collapse in={opennotification}>
            <Popover
              open={opennotification}
              anchorEl={notificationanchor}
              onClose={closenotificationpopup}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <List sx={{ width: "300px" }}>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography fontWeight={700}>
                        Lorem ipsum dolor
                      </Typography>
                    }
                    secondary="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  ></ListItemText>
                </ListItem>
                <Divider flexItem />
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography fontWeight={700}>
                        Lorem ipsum dolor
                      </Typography>
                    }
                    secondary="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  ></ListItemText>
                </ListItem>
                <Divider flexItem />
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography fontWeight={700}>
                        Lorem ipsum dolor
                      </Typography>
                    }
                    secondary="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  ></ListItemText>
                </ListItem>
              </List>
            </Popover>
          </Collapse> */}
          <Divider orientation="vertical" flexItem />
          <Avatar src={Me} sx={{ height: "30px", width: "30px" }}></Avatar>
          <Button
            size="small"
            endIcon={<ArrowDropDownIcon />}
            sx={{ color: "white" }}
            // onClick={OpenDialog}
          >
            {name}
          </Button>

          <Divider orientation="vertical" flexItem />
        </Stack>
      </Toolbar>
    </Styledappbar>
  );
}
