import React from "react";
import Column from "./Column/Column";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import {
  SortableContext,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListColumns({ columns }) {
  return (
    <SortableContext
      items={columns?.map((c) => c._id)}
      strategy={horizontalListSortingStrategy}
      // strategy={verticalListSortingStrategy}
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
        {columns?.map((column) => {
          return <Column key={column._id} column={column} />;
        })}

        {/* Add new column */}
        <Box
          sx={{
            minWidth: "160px",
            maxWidth: "160px",
            mx: 2,
            borderRadius: "5px",
            bgcolor: "#ffffff3d",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ".MuiButtonBase-root:hover": {
              bgcolor: "#2ecc71",
            },
          }}
        >
          <Button
            sx={{
              color: "white",
              width: "100%",
            }}
            startIcon={<AddCardIcon />}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  );
}

export default ListColumns;
