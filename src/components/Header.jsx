import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { TonConnectButton } from "@tonconnect/ui-react";
import React from "react";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography>Δ Not_Voch</Typography>
        <TonConnectButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
