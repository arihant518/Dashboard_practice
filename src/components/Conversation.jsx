import React from "react";
import emptyImg from '../assets/empty_page.jpg'
import { Typography } from '@mui/material'

export default function Conversation() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={emptyImg} alt="empty" height={400} width={500} />
      <Typography sx={{ fontSize: "20px" }}>
        Oops! There is no data found
      </Typography>
    </div>
  );
}
