import { Box, CardHeader, Divider, Grid, Typography } from "@mui/material";
import React from "react";

export default function StatCard({ idx, item }) {
  console.log(item);
  return (
    <Box>
      <Grid
        container
        sx={{
          boxShadow: 2,
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          // p: 1,
          mb: 1,
          borderRadius: 1,
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Grid
          item
          xs={0.5}
          sx={{
            bgcolor: "#FD0072",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        ></Grid>
        <Grid item xs={11.5}>
          <CardHeader
            style={{ color: "#FD0072" }}
            title={`Date: ${item.startDate} to ${item.endDate}`}
          />
          <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
            Country : {item.country}
          </Typography>
          <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
            Number of Confirmed Cases : {item.total}
          </Typography>
          <Divider sx={{ borderStyle: "dashed", borderWidth: 1 }} /> <br />
        </Grid>
      </Grid>
    </Box>
  );
}
