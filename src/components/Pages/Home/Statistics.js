import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";

export default function Statistics() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/world/total")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          axios
            .get("https://api.covid19api.com/world/total")
            .then((res) => {
              setData(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }, 3000);
      });
  }, []);

  return (
    <Container style={{ textAlign: "center" }}>
      <Grid item xs={12}>
        <h2>World Total Statistics</h2>
      </Grid>
      <Grid container mt={5}>
        <Grid item xs={12} md={3} sx={{ backgroundColor: "#FD0072", borderRadius: 1.5 ,color: "white", mt:2, mr:16}} >
          <h3>Total Confirmed: {data?.TotalConfirmed} </h3>
        </Grid>
        <Grid item xs={12} md={3} sx={{ backgroundColor: "#FD0072", borderRadius: 1.5 ,color: "white", mt:2, mr:16}}>
          <h3>Total Deaths: {data?.TotalDeaths}</h3>
        </Grid>
        <Grid item xs={12} md={3} sx={{ backgroundColor: "#FD0072", borderRadius: 1.5 ,color: "white", mt:2}}>
          <h3>Total Recovered: {data?.TotalRecovered}</h3>
        </Grid>
      </Grid>
    </Container>
  );
}
