import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import nora from "../../photos/friend2.jpg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function FriendAvatar() {
  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar src={nora} width={20} height={20}></Avatar>
        <Typography sx={{ flex: 1 }}>Nora Griffin</Typography>
        <FiberManualRecordIcon
          fontSize="small"
          sx={{ color: "green" }}
        ></FiberManualRecordIcon>
      </Stack>
    </>
  );
}
