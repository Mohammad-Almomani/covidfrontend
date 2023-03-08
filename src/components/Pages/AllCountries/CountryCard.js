import {
  Box,
  Button,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

export default function CountryCard({ idx, item }) {
  const handleAdd = () => {
    const data = {
      Country: item.Country,
      TotalConfirmed: item.TotalConfirmed,
      TotalDeaths: item.TotalDeaths,
      TotalRecovered: item.TotalRecovered,
      Date: item.Date,
    };
    console.log(data);
    axios
      .post("http://localhost:4000/records", data)
      .then((res) => {
        Swal.fire({
          title: "Success",
          text: "Country added to your records",
          icon: "success",
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box>
      <Grid
        container
        spacing={2}
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
            title={`Country: ${item.Country}`}
          />
          <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
            Total Confirmed Cases : {item.TotalConfirmed}
          </Typography>
          <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
            Total Deaths Cases : {item.TotalDeaths}
          </Typography>
          <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
            Total Recovered Cases : {item.TotalRecovered}
          </Typography>
          <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
            Date : {item.Date}
          </Typography>
          <Divider sx={{ borderStyle: "dashed", borderWidth: 1 }} /> <br />
          <Button
            onClick={handleAdd}
            variant="contained"
            sx={{ mb: 1, backgroundColor: "#4F30C0", fontWeight: "bold" }}
            fullWidth
          >
            Add To My Records
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
