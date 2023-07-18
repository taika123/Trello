import Box from "@mui/material/Box";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tooltip from "@mui/material/Tooltip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCardIcon from "@mui/icons-material/AddCard";
import Button from "@mui/material/Button";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PeopleIcon from "@mui/icons-material/People";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function BoardContent() {
  const COLUMN_HEADER_HEIGHT = "50px";
  const COLUMN_FOOTER_HEIGHT = "56px";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: (theme) => {
          return theme.palette.mode === "dark" ? "#34495e" : "#1976d2";
        },
        width: "100%",
        height: (theme) => {
          return theme.trello.boardContentHeight;
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          p: "10px 0",
          "&::-webkit-scrollbar-track": {
            m: 2,
          },
        }}
      >
        {/* Box columns 1*/}
        <Box
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            bgcolor: (theme) => {
              return theme.palette.mode === "dark" ? "#333643" : "#ebecf0";
            },
            ml: 2,
            borderRadius: "5px",
            height: "fit-content",
            maxHeight: (theme) => {
              return `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                5
              )})`;
            },
          }}
        >
          {/* Box header */}
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Title Columns
            </Typography>

            <Box>
              <Tooltip title="Options More">
                <ExpandMoreIcon
                  sx={{ color: "black", cursor: "pointer" }}
                  id="basic-column-dropdown"
                  aria-controls={
                    open ? "basic-menu-column-dropdown" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-column-dropdown",
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Coppy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>

                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this columns</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* Box List card */}
          <Box
            sx={{
              height: `calc(100vh - ${COLUMN_HEADER_HEIGHT}- ${COLUMN_FOOTER_HEIGHT})`,
              display: "flex",
              flexDirection: "column",
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: (theme) => {
                return `calc(
                ${theme.trello.boardContentHeight} - 
                ${theme.spacing(5)} - 
                ${COLUMN_HEADER_HEIGHT} - 
                ${COLUMN_FOOTER_HEIGHT}
                )`;
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#ced0da",
                borderRadius: "99px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#bfc2bf",
              },

              gap: 1,
              p: "0 5px",
              m: "0 5px",
            }}
          >
            <Card
              sx={{
                cursor: "pointer",
                overflow: "unset",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://images.unsplash.com/photo-1511289081-d06dda19034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Dev dev test test</Typography>
              </CardContent>
              <CardActions
                sx={{
                  p: "0px 4px 8px 4px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button size="small" startIcon={<PeopleIcon />}>
                  20
                </Button>
                <Button size="small" startIcon={<QuestionAnswerIcon />}>
                  20
                </Button>
                <Button size="small" startIcon={<RemoveRedEyeIcon />}>
                  20
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography variant="h1">Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* Box footer */}
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              startIcon={<AddCardIcon />}
              sx={{
                color: "black",
              }}
            >
              Add new cart
            </Button>

            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: "pointer" }} />
            </Tooltip>
          </Box>
        </Box>

        {/* box columns 2 */}
        <Box
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            bgcolor: (theme) => {
              return theme.palette.mode === "dark" ? "#333643" : "#ebecf0";
            },
            ml: 2,
            borderRadius: "5px",
            height: "fit-content",
            maxHeight: (theme) => {
              return `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                5
              )})`;
            },
          }}
        >
          {/* Box header */}
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Title Columns
            </Typography>

            <Box>
              <Tooltip title="Options More">
                <ExpandMoreIcon
                  sx={{ color: "black", cursor: "pointer" }}
                  id="basic-column-dropdown"
                  aria-controls={
                    open ? "basic-menu-column-dropdown" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-column-dropdown",
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Coppy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>

                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this columns</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* Box List card */}
          <Box
            sx={{
              height: `calc(100vh - ${COLUMN_HEADER_HEIGHT}- ${COLUMN_FOOTER_HEIGHT})`,
              display: "flex",
              flexDirection: "column",
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: (theme) => {
                return `calc(
                ${theme.trello.boardContentHeight} - 
                ${theme.spacing(5)} - 
                ${COLUMN_HEADER_HEIGHT} - 
                ${COLUMN_FOOTER_HEIGHT}
                )`;
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#ced0da",
                borderRadius: "99px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#bfc2bf",
              },

              gap: 1,
              p: "0 5px",
              m: "0 5px",
            }}
          >
            <Card
              sx={{
                cursor: "pointer",
                overflow: "unset",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://images.unsplash.com/photo-1511289081-d06dda19034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Dev dev test test</Typography>
              </CardContent>
              <CardActions
                sx={{
                  p: "0px 4px 8px 4px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button size="small" startIcon={<PeopleIcon />}>
                  20
                </Button>
                <Button size="small" startIcon={<QuestionAnswerIcon />}>
                  20
                </Button>
                <Button size="small" startIcon={<RemoveRedEyeIcon />}>
                  20
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography variant="h1">Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                overflow: "unset",
                cursor: "pointer",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* Box footer */}
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              startIcon={<AddCardIcon />}
              sx={{
                color: "black",
              }}
            >
              Add new cart
            </Button>

            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: "pointer" }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BoardContent;
