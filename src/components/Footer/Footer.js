import { Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      className="Nav-Bars"
      style={{ padding: "30px 0px" }}
    >
      {"All Rights Reserved © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
