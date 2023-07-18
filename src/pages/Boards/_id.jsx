import * as React from "react";
import Container from "@mui/material/Container";
import AppBar from "~/components/AppBar";
import BoardBar from "~/pages/Boards/BoardBar";
import BoardContent from "~/pages/Boards/BoardContent";

const Board = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
};

export default Board;
