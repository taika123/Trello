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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function AppBar() {
  const [searchValue, setSeachValue] = useState("");

  return (
    <Box
      sx={{
        // backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <AppsIcon sx={{ color: "white" }} />
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
            sx={{ color: "white" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
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
          <Button
            variant="outlined"
            sx={{
              color: "white",
              fontSize: 16,
              border: "none",
              "&:hover": { border: "none" },
            }}
            startIcon={<AddCircleOutlineIcon />}
          >
            Create
          </Button>
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
          sx={{
            minWidth: 80,
            maxWidth: 160,
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          InputLabelProps={{
            style: { color: "primary.dark" },
          }}
          id="outlined-search"
          label="Search..."
          size="small"
          type="text"
          value={searchValue}
          onChange={(e) => setSeachValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize="small"
                sx={{ color: searchValue ? "white" : "transparent" }}
                onClick={() => setSeachValue("")}
              />
            ),
          }}
        />
        <ModeSelect />

        <Tooltip title="Notification">
          <Badge variant="dot" color="warning" sx={{ color: "white" }}>
            <NotificationsNoneIcon color="white" />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon color="white" sx={{ color: "white" }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
