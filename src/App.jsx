import { useState } from "react";
import NotVoch from "./components/NotVoch";
import { Box, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "blue",
          borderRadius: "10px",
          padding: "20px",
          margin: "20px auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "80%",
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Buy with Less, No Fees
        </Typography>
        <Typography variant="body1">Sell at Your Price</Typography>
      </Box>
      <NotVoch />
    </>
  );
}

export default App;
