import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <div className="text">Hello word !!!</div>
      <Typography variant="body2" color="text.secondary">
        Gaear
      </Typography>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <DeleteIcon />
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
    </>
  );
}

export default App;
