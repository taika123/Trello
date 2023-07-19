import Box from "@mui/material/Box";
import React from "react";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sorts";

function BoardContent({ board }) {
  const orderedColumns = mapOrder(board.columns, board.columnOrderIds, "_id");
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
      <ListColumns columns={orderedColumns} />
    </Box>
  );
}

export default BoardContent;
