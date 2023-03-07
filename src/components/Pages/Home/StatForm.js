import { Box, Button, Container, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import StatCard from "./StatCard";
import SearchIcon from '@mui/icons-material/Search';

export default function StatForm() {
  const [confirmed, setConfirmed] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.country.value);
    console.log(e.target.startDate.value);
    console.log(e.target.endDate.value);
    let url = `https://api.covid19api.com/country/${e.target.country.value}/status/confirmed?from=${e.target.startDate.value}T00:00:00Z&to=${e.target.endDate.value}T00:00:00Z`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setConfirmed([
          {
            total: res.data.length,
            startDate: e.target.startDate.value,
            endDate: e.target.endDate.value,
            country: e.target.country.value,
          },
          ...confirmed,
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 10, textAlign: "center" }}>
      <h2>Get Statistics for a specific country</h2>
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
          <TextField
            required
            id="country"
            label="Country"
            type="text"
          />

          <TextField
            required
            id="startDate"
            type="date"
          />
          <TextField
            required
            id="endDate"
            type="date"
          />
          <Button type="submit" variant="contained" sx={{mt:1, width: "150px", height: "54px", backgroundColor:"purple", fontWeight: "bold" }} >
            Search <SearchIcon />
          </Button>
        </div>
      </Box>

        <Grid container spacing={4} mt={4}>
      {confirmed.length > 0 &&
        confirmed.map((item, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={idx}>

            <StatCard idx={idx} item={item} />
            </Grid>
            );
        })}
           
            </Grid>
    </Container>
  );
}
