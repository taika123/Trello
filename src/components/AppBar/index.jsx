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
        // backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
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
            // fontSize="small"
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

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Workspaces />
          <Recents />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ minWidth: 80 }}
          InputLabelProps={{
            style: { color: "primary.dark" },
          }}
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
