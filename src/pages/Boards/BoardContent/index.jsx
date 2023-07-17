import Box from "@mui/material/Box";
import React from "react";

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) =>
          `calc(100vh - (${theme.trelloCustom.appBarHeight} + ${theme.trelloCustom.boardBarHeight}))`,
        display: "flex",
        alignItems: "center",
      }}
    >
      Box content
    </Box>
  );
}

export default BoardContent;
