import React from "react";
import Box from "@mui/material/Box";
import Cards from "./Card/Card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListCards({ cards }) {
  return (
    <SortableContext
      items={cards?.map((c) => c._id)}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          height: (theme) =>
            `calc(100vh - ${theme.trello.columnHeaderHeight}- ${theme.trello.columnFooterHeight})`,
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: (theme) => {
            return `calc(
           ${theme.trello.boardContentHeight} - 
           ${theme.spacing(5)} - 
           ${theme.trello.columnHeaderHeight} - 
           ${theme.trello.columnFooterHeight}
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
        {cards.map((card) => {
          return <Cards key={card._id} card={card} />;
        })}
      </Box>
    </SortableContext>
  );
}

export default ListCards;
