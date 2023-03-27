import {
  Favorite,
  Groups,
  Home,
  Logout,
  MissedVideoCall,
  PhotoSizeSelectActual,
  ProductionQuantityLimits,
  Settings,
} from "@mui/icons-material";
import { Button, List, ListItem, Paper } from "@mui/material";
import React from "react";

export default function Leftbar() {
  return (
    <Paper
      sx={{
        flex: "1",
        position: "sticky",
        top: "65px",
        marginRight: "5px",
        height: "100%",
      }}
    >
      <List>
        <ListItem>
          <Button
            variant="text"
            sx={{ color: "black", fontSize: "12px" }}
            startIcon={<Home />}
          >
            HomePage
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="text"
            sx={{ color: "black", fontSize: "12px" }}
            startIcon={<ProductionQuantityLimits />}
          >
            Products
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="text"
            sx={{ color: "black", fontSize: "12px" }}
            startIcon={<Groups />}
          >
            Groups
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="text"
            sx={{ color: "black", fontSize: "12px" }}
            startIcon={<PhotoSizeSelectActual />}
          >
            Photos
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="text"
            sx={{ color: "black", fontSize: "12px" }}
            startIcon={<MissedVideoCall />}
          >
            Videos
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="text"
            sx={{ color: "black", fontSize: "12px" }}
            startIcon={<Favorite />}
          >
            Wishlist
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="text"
            sx={{ color: "black", fontSize: "12px" }}
            startIcon={<Settings />}
          >
            Settings
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="text"
            sx={{ color: "black", fontSize: "12px" }}
            startIcon={<Logout />}
          >
            Logout
          </Button>
        </ListItem>
      </List>
    </Paper>
  );
}
