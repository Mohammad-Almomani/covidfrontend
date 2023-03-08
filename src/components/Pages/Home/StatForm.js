import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import StatCard from "./StatCard";
import SearchIcon from "@mui/icons-material/Search";
import Swal from "sweetalert2";

export default function StatForm() {
  const [confirmed, setConfirmed] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.country.value === "" ||
      e.target.startDate.value === "" ||
      e.target.endDate.value === ""
    ) {
      return Swal.fire({
        title: "Error",
        text: "Please fill all the fields",
        icon: "warning",
      });
    }
    console.log(e.target.country.value);
    console.log(e.target.startDate.value);
    console.log(e.target.endDate.value);
    const data = {
      country: e.target.country.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
    };
    let url = `https://api.covid19api.com/country/${e.target.country.value}/status/confirmed?from=${e.target.startDate.value}T00:00:00Z&to=${e.target.endDate.value}T00:00:00Z`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setConfirmed([
          {
            total: res.data.length,
            startDate: data.startDate,
            endDate: data.endDate,
            country: data.country,
          },
          ...confirmed,
        ]);
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "ERR_BAD_REQUEST") {
          Swal.fire({
            title: "Country not found",
            text: "Please enter a valid country name",
            icon: "warning",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Something went wrong",
            icon: "error",
          });
        }
      });
  };

  return (
    <div style={{ textAlign: "center", margin: "1% 3%" }}>
      <h2 style={{ marginTop: "3%" }}>Get Statistics for a specific country</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          mt: 5,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        alignContent="center"
      >
        <div>
          <TextField required id="country" label="Country" type="text" />
          <TextField required id="startDate" type="date" />
          <TextField required id="endDate" type="date" />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 1,
              width: "150px",
              height: "54px",
              backgroundColor: "#4F30C0",
              fontWeight: "bold",
            }}
          >
            Search <SearchIcon />
          </Button>
        </div>
      </Box>

      <Grid
        container
        spacing={4}
        mt={4}
        sx={{
          direction: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {confirmed.length > 0 &&
          confirmed.map((item, idx) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={idx}>
                <StatCard idx={idx} item={item} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
