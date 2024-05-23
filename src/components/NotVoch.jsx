import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Badge,
  Box,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import image from "./notvon.png"; // Adjust the path to where your image is saved

import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";

const VoucherCard = ({ days, likes, bid, price, sendTransaction }) => {
  return (
    <Card
      sx={{
        margin: "1rem",
        position: "relative",
        "&:hover .buy-now": { display: "flex" },
      }}
    >
      <CardActionArea>
        <CardContent>
          <Box
            component="img"
            src={image}
            alt="Voucher"
            sx={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
          <Box sx={{ display: "flex", flexDirection: "column-reverse" }}>
            <Typography
              variant="h5"
              component="div"
              align="center"
              sx={{ mt: 2 }}
            >
              10,000 Δ
            </Typography>
            <Box>Δ{price}</Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions
        className="buy-now"
        sx={{
          display: "none",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={() => sendTransaction(price)}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

const NotVoch = () => {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();

  const sendTransaction = (price) => {
    console.log("Sending transaction...");
    const transaction = {
      messages: [
        {
          address: "UQB4i2u-DswfjDjVLgHFL2-JDOwGb6E8qhDRFwRV4Z3EmDSH", // destination address
          amount: price * 1000000000, // Toncoin in nanotons
        },
      ],
    };

    if (tonConnectUI != null && wallet != null) {
      tonConnectUI.sendTransaction(transaction);
    } else {
      alert("Please connect your wallet.");
    }
  };

  const vouchers = [
    { days: 6, likes: 2, bid: 2, price: 4.2 },
    { days: 13, likes: 7, bid: 2.02, price: 5.1 },
    { days: 6, likes: 16, bid: 2.1, price: 6 },
    { days: 10, likes: 5, bid: 2.05, price: 6.7 },
    { days: 6, likes: 2, bid: 2, price: 4.2 },
    { days: 13, likes: 7, bid: 2.02, price: 5.1 },
    { days: 6, likes: 16, bid: 2.1, price: 6 },
    { days: 10, likes: 5, bid: 2.05, price: 6.7 },
    { days: 6, likes: 2, bid: 2, price: 4.2 },
    { days: 13, likes: 7, bid: 2.02, price: 5.1 },
    { days: 6, likes: 16, bid: 2.1, price: 6 },
    { days: 10, likes: 5, bid: 2.05, price: 6.7 },
    { days: 6, likes: 2, bid: 2, price: 4.2 },
    { days: 13, likes: 7, bid: 2.02, price: 5.1 },
    { days: 6, likes: 16, bid: 2.1, price: 6 },
    { days: 10, likes: 5, bid: 2.05, price: 6.7 },
    { days: 6, likes: 2, bid: 2, price: 4.2 },
    { days: 13, likes: 7, bid: 2.02, price: 5.1 },
    { days: 6, likes: 16, bid: 2.1, price: 6 },
    { days: 10, likes: 5, bid: 2.05, price: 3.7 },
    { days: 6, likes: 2, bid: 2, price: 4.2 },
    { days: 13, likes: 7, bid: 2.02, price: 5.1 },
    { days: 6, likes: 16, bid: 2.1, price: 3 },
    { days: 10, likes: 5, bid: 2.05, price: 6.7 },
  ];

  return (
    <Grid container justifyContent="center" spacing={2}>
      {vouchers.map((voucher, index) => (
        <Grid item key={index} xs={6} sm={4} md={3}>
          <VoucherCard {...voucher} sendTransaction={sendTransaction} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NotVoch;
