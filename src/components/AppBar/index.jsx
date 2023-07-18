import React from "react";
import Box from "@mui/material/Box";
import ModeSelect from "~/components/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
// import TrelloLogo from "~/assets/trello.svg";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import { Badge, Button, SvgIcon, TextField, Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import Workspaces from "./Menus/Workspaces";
import Recents from "./Menus/Recents";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profiles from "./Menus/Profiles";

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
        </Box>

        <Workspaces />
        <Recents />
        <Starred />
        <Templates />
        <Button variant="outlined">Create</Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <TextField
          id="outlined-search"
          label="Search..."
          size="small"
          type="search"
        />
        <ModeSelect />

        <Tooltip title="Notification">
          <Badge badgeContent={4} color="secondary">
            <NotificationsNoneIcon color="primary.main" />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon color="primary.main" />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
