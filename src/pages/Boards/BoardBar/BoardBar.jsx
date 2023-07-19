import React from "react";
import Box from "@mui/material/Box";
import { Chip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LockResetIcon from "@mui/icons-material/LockReset";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { capitalizeFirstLetter } from "~/utils/formatter.js";

const MENU_STYLE = {
  color: "white",
  border: "none",
  paddingX: "8px",
  bgcolor: "transparent !important",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": { bgcolor: "#1abc9c !important" },
  display: {
    xs: "flex",
    overflow: "auto",
  },
};

function BoardBar(props) {
  const { board } = props;

  return (
    <Box
      sx={{
        // backgroundColor: "primary.dark",
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 2,
        gap: 1,
        overflowX: "auto",
        bgcolor: (theme) => {
          return theme.palette.mode === "dark" ? "#34495e" : "#1976d2";
        },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Chip
          sx={MENU_STYLE}
          clickable
          icon={<DashboardIcon />}
          label={board.title}
          variant="outlined"
        />
        <Chip
          sx={MENU_STYLE}
          clickable
          icon={<LockResetIcon />}
          label={capitalizeFirstLetter(board.type)}
          variant="outlined"
        />
        <Chip
          sx={MENU_STYLE}
          clickable
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          variant="outlined"
        />
        <Chip
          sx={MENU_STYLE}
          clickable
          icon={<BoltIcon />}
          label="Automation"
          variant="outlined"
        />
        <Chip
          sx={MENU_STYLE}
          clickable
          icon={<FilterListIcon />}
          label="Filters"
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white",
              borderWidth: "1px ",
            },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={6}
          total={10}
          sx={{
            gap: 1,
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none",
              cursor: "pointer",
              "&: first-of-type": { bgcolor: "#34495e" },
            },
          }}
        >
          <Tooltip title="Remy">
            <Avatar
              alt="Remy Sharp"
              src="https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            />
          </Tooltip>
          <Tooltip title="Travis">
            <Avatar
              alt="Travis Howard"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            />
          </Tooltip>

          <Tooltip title="Cindy">
            <Avatar
              alt="Cindy Baker"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            />
          </Tooltip>
          <Tooltip title="Agnes">
            <Avatar
              alt="Agnes Walker"
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            />
          </Tooltip>
          <Tooltip title="Trevor">
            <Avatar
              alt="Trevor Henderson"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
